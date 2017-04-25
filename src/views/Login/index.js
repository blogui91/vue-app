import Login from './Login.vue'
export default {
	path: '/login',
	name: 'app.login',
	component: Login,
	meta: {
		requiresAuth: false,
	}
}