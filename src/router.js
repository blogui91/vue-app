/*
 * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
 * it is only to be used only for websites.
 *
 * If you decide to go with "history" mode, please also open /config/index.js
 * and set "build.publicPath" to something other than an empty string.
 * Example: '/' instead of current ''
 *
 * If switching back to default "hash" mode, don't forget to set the
 * build publicPath back to '' so Cordova builds work again.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
	return () => System.import(`views/${component}.vue`)
}

const router = new VueRouter({

	routes: [{
			path: '/',
			name: 'app.dashboard',
			component: load('Dashboard/Dashboard'),
			meta: {
				requiresAuth: true,
			}
		}, // Default
		{
			path: '/login',
			name: 'app.login',
			component: load('Login/Login'),
			meta: {
				requiresAuth: true,
			}
		}, {
			path: '/users',
			name: 'app.users',
			component: load('Users/Users'),
		}, {
			path: '/organizations',
			name: 'app.organizations',
			component: load('Organizations/Organizations'),
		}, {
			path: '*',
			component: load('Errors/Error404'),
			meta: {
				requiresAuth: true,
			}
		}, {
			path: '/logout',
			name: 'app.logout',
			component: load('Logout/Logout'),
		}


	]
});


export default router