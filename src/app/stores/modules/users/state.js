const state = {
	users: {
		data: [],
		meta: {
			pagination: {
				count: 0,
				current_page: 0,
				per_page: 0,
				total: 0,
				total_pages: 0
			}
		}
	},
	currentUser: null
}


export default state