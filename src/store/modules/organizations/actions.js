import Organization from 'src/services/Organization.service'

const actions = {
	getOrganizations({
		commit,
		state
	}, payload) {

		let users_promise = Organization.get();

		users_promise
			.then(users => {
				commit('organizations/setOrganizationsList', users, {
					root: true
				})
			})
			.catch(error => {
				console.log("There was an error :c")
			});


	},
	getOrganization({
		commit,
		state
	}, payload) {


		let users_promise = Organization.find(payload);

		users_promise
			.then(user => {
				commit('users/setCurrentOrganization', user, {
					root: true
				})
			})
			.catch(error => {
				console.log("There was an error :c")
			});
	}
}


export default actions