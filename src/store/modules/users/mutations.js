const mutations = {
	setUsersList(state, payload) {
		state.users = payload.data
	},
	setCurrentUser(state, payload) {
		state.currentUser = payload.data
	}
}

export default mutations