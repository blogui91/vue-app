// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`config/themes/app.${__THEME}.styl`)
	// 2. or, use next line to activate DEFAULT QUASAR STYLE
	//require(`quasar/dist/quasar.${__THEME}.css`)
	// ==============================
import 'config/themes/app.scss'

import Vue from 'vue'

//Vuex Init
import { store } from 'app/stores' //store/index.js

//i18n provider
import { i18n } from 'resources/lang'

//Install ServiceProviders
import Bootstrap from 'bootstrap'
Vue.use(Bootstrap)

// Install Quasar Framework
import Quasar from 'quasar'
Vue.use(Quasar) 

//Router provider
import router from 'config/router'

import User from 'app/models/User.model'

window.User = User

import MyComponent from 'components/my-component'

Quasar.start(() => {
	/* eslint-disable no-new */
	let app = new Vue({
		store,
		i18n,
		el: '#q-app',
		router,
		components : {

		},
		mounted() {
			console.log("Vue App Initialized")
		},
		render: h => h(require('./App'))
	})

})

