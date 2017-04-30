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

	static logout() {
		LocalStorage.remove('token_id');
		LocalStorage.remove('refresh_token');
		LocalStorage.remove('expires');
		LocalStorage.remove('binnacle.last_status');
		router.go('/login')
	}

	authenticate(credentials) {
		let self = this;
		Object.assign(credentials, Env.oauth)
		let request = (resolve, reject) => {

			http.post(API.TOKEN_URL, credentials)
				.then(response => {
					self.storeSession(response.data)
					resolve(response.data)
				})
				.catch(error => {
					console.log("There was an error creating the session:", error)
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

	createInstance(){
		return new OAuth()
	}

	addAuthHeaders() {
		http.defaults.headers.common['Authorization'] = this.getAuthHeader();
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