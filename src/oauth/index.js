import API from 'config/api'
import Env from 'config/env'
import http from 'axios'
import Lang from 'resources/lang/global_strings'
import router from 'config/router'

import {
	LocalStorage
} from 'quasar'

class OAuth {
	constructor() {
		this.attributes = {
			user: null,
			oauth_type: 'Bearer'
		}
		this.error = null
	}

	logout() {
		this.destroySession()
		router.go('/login')
	}

	authenticate(credentials) {
		let self = this;
		Object.assign(credentials, Env.oauth)
		let request = (resolve, reject) => {

			http.post(API.TOKEN_URL, credentials)
				.then(response => {
					self.clearErrors();
					self.storeSession(response.data)
					resolve(response.data)
				})
				.catch(error => {
					console.log("There was an error creating the session:", error)
					self.handleError(error)
					reject(error)
				});
		};

		return new Promise(request);
	}

	storeSession(data) {
		LocalStorage.set('token_id', data.access_token)
		LocalStorage.set('refresh_token', data.expires_in)
		LocalStorage.set('expires', data.refresh_token)
	}

	getAuthHeader() {
		return this.attributes.oauth_type + " " + LocalStorage.get.item('token_id')
	}

	addAuthHeaders() {
		http.defaults.headers.common['Authorization'] = this.getAuthHeader();
	}

	getError() {
		return this.error
	}

	clearErrors() {
		this.errors = null
	}

	handleError(error) {
		let reason = {
			code: error.status,
			description: ""
		}

		switch (error.status) {
			case 401:
				reason.description = Lang.ERROR_RESPONSES.AUTH.UNAUTHORIZED
				break
			case 500:
				reason.description = Lang.ERROR_RESPONSES.AUTH.SERVER_ERROR
				break
			default:
				reason.description = error.status
				break
		}

		this.error = reason;
	}

	isAuthenticated() {
		return LocalStorage.get.item('token_id') ? true : false;
	}

	destroySession() {
		LocalStorage.remove('token_id');
		LocalStorage.remove('refresh_token');
		LocalStorage.remove('expires');
		LocalStorage.remove('binnacle.last_status');
	}
}

export default OAuth