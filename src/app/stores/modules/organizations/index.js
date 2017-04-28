import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'

const organizations_module = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state
}


export default organizations_module