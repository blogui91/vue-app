import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules

import users from './modules/users'
import organizations from './modules/organizations'
// --> Add new module


export const store = new Vuex.Store({
	modules: {
		users,
		organizations,
		//new_module
	}
})


// export default store