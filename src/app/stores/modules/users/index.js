import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

let user_module = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state
}


export default user_module