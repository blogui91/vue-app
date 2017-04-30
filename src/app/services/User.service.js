import Service from 'easy-requests'
import {
	API_URL
} from 'config/env'


class User extends Service {
	constructor() {
		super()
		this.config.origin = API_URL
	}

	static currentUser() {
		let UserInstance = this.newInstance()

		let route = UserInstance.buildUrl('/user')

		let user_promise = UserInstance.http.get(route)

		let request = (resolve, reject) => {
			user_promise.then(response => {
					resolve(response.data)
				})
				.catch(error => {
					reject(error)
				})
		}

		return new Promise(request)
	}

}

export default User