const state = {
	access_token: null,
	refresh_token: null,
};
const getters = {
	isAuthenticated: (state) => { return !!state.access_token },
	accessToken: (state) => { return state.access_token },
	refreshToken: (state) => { return state.refresh_token },
};
const actions = {
/*
	async refresh({ dispatch, commit}) {
		try {
			var access_token = await AuthService.verifyToken();
			commit('loginSuccess', { access_token, refresh_token: null })
		} catch (e) {
			commit('loginFailure')
			throw e;
		}
	},
	async register({ dispatch, commit }, user) {
		try {
			var res = await AuthService.register(user);
			commit('registerSuccess')
			return res.data;
		} catch(e) {
			commit('registerFailure')
			throw e;
		}
	},
	async login({ commit }, user) {
		try {
			var res = await AuthService.login(user);
			var { token: access_token, refresh_token = null, email, username } = res;
			commit('loginSuccess', { access_token, refresh_token })
			commit('user/setUser', { email, username }, { root: true })
			return res.data;
		} catch(e) {
			commit('loginFailure')
			throw e;
		}
	},
	async logout({ commit }) {
		await AuthService.logout();
		commit("logout");
	},
	async resetPassword({ commit }, user) {
		console.log("email", user)
		await AuthService.resetPassword(user);
	},
  */
};
const mutations = {
	registerSuccess(state) {
		state.access_token = null;
		state.refresh_token = null;
	},
	registerFailure(state) {
		state.access_token = null;
		state.refresh_token = null;
	},
	loginSuccess(state, { access_token, refresh_token }) {
		state.access_token = access_token;
		state.refresh_token = refresh_token;
	},
	loginFailure(state) {
		state.access_token = null;
		state.refresh_token = null;
	},
	logout(state) {
		state.access_token = null;
		state.refresh_token = null;
	}
};
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

import AuthService from '@/services/auth';
