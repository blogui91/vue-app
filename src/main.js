// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
	// ==============================

import './themes/app.scss'
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'

//Vuex Init
//import store from './store' //store/index.js 

import Bootstrap from './bootstrap'
Bootstrap.installPlugins(Vue);
Bootstrap.checkAuth();

//Interruptor
import Interruptor from './interruptor'
Interruptor.handle(router)

//Services
// import User from 'services/User.service'

// let a = User.find(366);

// a.then(a => {
// 	console.log("users:", a)
// })


Quasar.start(() => {
	/* eslint-disable no-new */
	new Vue({
		//store,
		el: '#q-app',
		router,
		render: h => h(require('./App'))
	})
})