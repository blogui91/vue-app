class UserModel {
	constructor() {
		this.attributes = {
			id: null,
			first_name: null,
			last_name: null
		}
	}

	set id(id) {
		this.attributes.id = id
	}

	get id() {
		return this.attributes.id
	}

	set first_name(first_name) {
		this.attributes.first_name = first_name
	}

	get first_name() {
		return this.attributes.first_name
	}

	set last_name(last_name) {
		this.attributes.last_name = last_name
	}

	get last_name() {
		return this.attributes.last_name
	}

}


export default UserModel