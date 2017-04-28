const mutations = {
	setOrganizationsList(state, payload) {
		state.organizations = payload.data
	},
	setCurrentOrganization(state, payload) {
		state.organization = payload.data
	}
}

export default mutations