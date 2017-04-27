import Service from 'easy-requests'
import {
	API_URL
} from 'api/env'


class Organization extends Service {
	constructor() {
		super()
		this.config.origin = API_URL
	}

	static make(data) {
		let OrganizationInstance = this.newInstance()

		let route = OrganizationInstance.buildUrl('/make')

		let organization_promise = OrganizationInstance.http.post(route, data)

		let request = (resolve, reject) => {
			organization_promise.then(response => {
					resolve(response.data)
				})
				.catch(error => {
					reject(error)
				})
		}

		return new Promise(request)


	}
}

export default Organization