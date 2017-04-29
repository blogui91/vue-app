// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`config/themes/app.${__THEME}.styl`)
	// 2. or, use next line to activate DEFAULT QUASAR STYLE
	//require(`quasar/dist/quasar.${__THEME}.css`)
	// ==============================

import 'config/themes/app.scss'
import Vue from 'vue'
import Quasar from 'quasar'
import router from 'config/router'
import { i18n } from 'resources/lang'

//Vuex Init
import { store } from 'app/stores' //store/index.js

import Bootstrap from 'config/bootstrap'
Bootstrap.installPlugins(Vue);
Bootstrap.checkAuth();

//Middlewares & inteceptor
import AxiosServiceProvider from 'app/providers/AxiosServiceProvider'
import Middleware from 'config/middleware'
Middleware.handle(router)

//
import Err from 'app/providers/errors'

Quasar.start(() => {
	/* eslint-disable no-new */
	let app = new Vue({
		store,
		i18n,
		el: '#q-app',
		router,
		mounted() {

			this.$nextTick(() => {
				Err.constructor(this)
				AxiosServiceProvider.handle()

			})
		},
		render: h => h(require('./App'))
	})

})

