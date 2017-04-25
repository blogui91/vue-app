import OAuth from './oauth'
import Quasar from 'quasar'
import VueI18n from 'vue-i18n'

export default {
	installPlugins(Vue) {
		//Install plugins
		Vue.use(VueI18n)
		Vue.use(Quasar) // Install Quasar Framework

	},
	checkAuth() {

		let oauth = new OAuth();
		// oauth.authenticate({
		// 	username: "admin@burgerking.com",
		// 	password: "secret"
		// });

		if (oauth.isAuthenticated()) {
			oauth.addAuthHeaders()
		}

		window.oauth = oauth
	}
}