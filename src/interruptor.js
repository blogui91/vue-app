import OAuth from './oauth'
let oAuth = new OAuth();

import {
	store
} from './store' //store/index.js


export default {
	handle(router) {

		router.beforeEach((to, from, next) => {

			//If visiting login view but you already have logged in
			if (to.name == 'app.login' && oAuth.isAuthenticated()) {
				next({
					path: '/'
				})
			}

			//If our view requires authentication  and we are authenticated then no problem
			if (to.meta.requiresAuth == oAuth.isAuthenticated() || !to.meta.requiresAuth == oAuth.isAuthenticated()) {
				//If everything is okay we should add Authorization header for each request
				oAuth.addAuthHeaders()

				if (oAuth.isAuthenticated()) {
					store.dispatch('users/getCurrentUser')
				}

				next()
			} else if (to.name != 'app.login') {
				next({
					path: '/login',
					query: {
						redirect: to.fullPath
					}
				})

			}

			next()
		});

		router.afterEach((route) => {

			//If visiting login view but you already have logged in
			if (route.name == 'app.login' && oAuth.isAuthenticated()) {
				router.push({
					name: 'app.dashboard'
				})
			} else if (route.meta.requiresAuth && !oAuth.isAuthenticated()) {
				router.push({
					name: 'app.login',
				})
			}
		})

	}
}