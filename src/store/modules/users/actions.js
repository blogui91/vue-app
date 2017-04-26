import User from 'src/services/User.service'

const actions = {
	getUsers({
		commit,
		state
	}, payload) {

		let users_promise = User.get();

		users_promise
			.then(users => {
				commit('users/setUsersList', users, {
					root: true
				})
			})
			.catch(error => {
				console.log("There was an error :c")
			});


	},
	getUser({
		commit,
		state
	}, payload) {


		let users_promise = User.find(payload);

		users_promise
			.then(user => {
				commit('users/setCurrentUser', user, {
					root: true
				})
			})
			.catch(error => {
				console.log("There was an error :c")
			});
	},
	getCurrentUser({
		commit,
		state
	}, payload) {

		let user_promise = User.currentUser();

		user_promise
			.then(user => {
				commit('users/setCurrentUser', user, {
					root: true
				})
			})
			.catch(error => {
				console.log("There was an error :c")
			});

	}


}


export default actions