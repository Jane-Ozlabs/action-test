import UserService from '@/services/user';

const state = {
	user: null,
	users: null,
	detail: null,
	balances: null,
};
const getters = {
};
const actions = {
	async me({ commit }) {
		var user = await UserService.me();
		commit("setUser", user);
	},
	async userList({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var users = await UserService.userList({ ...params });
		commit("setUsers", users);
		return users;
	},
	async userDetail({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var detail = await UserService.userDetail({ ...params });
		commit("setDetail", detail);
		return detail;
	},
	async balanceLogs({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var balances = await UserService.balanceLogs({ ...params });
		commit("setBalances", balances);
		return balances;
	},
};
const mutations = {
	setUser(state, user) { state.user = user; },
	setUsers(state, users) { state.users = users; },
	setDetail(state, detail) { state.detail = detail; },
	setBalances(state, balances) { state.balances = balances; },
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
