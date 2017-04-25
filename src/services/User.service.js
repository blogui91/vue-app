import Service from 'easy-requests'
import {
	API_URL
} from 'api/env'


class User extends Service {
	constructor() {
		super()
		this.config.origin = API_URL
	}
}

export default User