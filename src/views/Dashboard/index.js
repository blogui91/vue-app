import Dashboard from './Dashboard.vue'

export default {
	path: '/',
	name: 'app_dashboard',
	component: Dashboard,
	meta: {
		requiresAuth: true,
	}
}