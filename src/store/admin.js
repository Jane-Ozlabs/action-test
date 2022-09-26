import AdminService from '@/services/admin';

const state = {
	accounts: null
};
const getters = {
};
const actions = {
	async accountList({ dispatch, commit }, { filters }) {
		await dispatch('auth/refresh', null, { root: true });
		var accounts = await AdminService.accountList({ filters });
		commit("setAccounts", accounts);
		return accounts;
	},

	async account({ dispatch, commit }, { id }) {
		await dispatch('auth/refresh', null, { root: true });
		var account = await AdminService.account({ id });
		return account;
	},

	async accountCreate({ dispatch, commit }, form) {
		await dispatch('auth/refresh', null, { root: true });
		var account = await AdminService.accountCreate({ ...form });
		return account;
	},

	async accountDelete({ dispatch, commit }, { id }) {
		await dispatch('auth/refresh', null, { root: true });
		var res = await AdminService.accountDelete({ id });
		return res;
	},
};
const mutations = {
	setAccounts(state, accounts) { state.accounts = accounts; },
};
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
