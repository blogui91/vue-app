import BaseModel from './Basemodel'

class UserModel extends BaseModel {
	constructor() {
		let props = [
			'id',
			'first_name',
			'last_name'
		];

		super(props)
	}
}


export default UserModel