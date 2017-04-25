import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules

import users from './modules/users'
// --> Add new module


export const store = new Vuex.store({
	modules: {
		users
	}
})


// export default store