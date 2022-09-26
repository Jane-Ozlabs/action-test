import AuthService from '@/services/auth';

const state = {
	rememberMe: false,
};
const getters = {
	rememberMe: (state) => { return !!state.rememberMe },
};
const actions = {
};
const mutations = {
};
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
