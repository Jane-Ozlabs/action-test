import AnalyticsService from '@/services/analytics';

const state = {
};
const getters = {
};
const actions = {
    async monthlyList({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var data = await AnalyticsService.monthlyList({ ...params });
		return data;
	},
	async dailyList({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var data = await AnalyticsService.dailyList({ ...params });
		return data;
	},
	async contentMonthlyList({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var data = await AnalyticsService.contentMonthlyList({ ...params });
		return data;
	},
	async contentDailyList({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var data = await AnalyticsService.contentDailyList({ ...params });
		return data;
	},
	async contentServerList({ dispatch, commit }, params) {
		await dispatch('auth/refresh', null, { root: true });
		var data = await AnalyticsService.contentServerList({ ...params });
		return data;
	},
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
