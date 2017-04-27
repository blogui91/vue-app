import OAuth from './oauth'
import Quasar from 'quasar'

export default {
	installPlugins(Vue) {
		//Install plugins
		Vue.use(Quasar) // Install Quasar Framework
	},
	checkAuth() {

		let oauth = new OAuth();

		if (oauth.isAuthenticated()) {
			oauth.addAuthHeaders()
		}

		window.oauth = oauth
	}
}