import BaseModel from './BaseModel'
import User from 'app/services/User.service'

class UserModel extends BaseModel {
	constructor() {
		let props = [
			'id',
			'first_name',
			'last_name'
		];
		super(props)
		//this.loadService(User)
	}
}


export default UserModel