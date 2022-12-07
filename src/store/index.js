import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import settings from "./settings";
import auth from "./auth";
import admin from "./admin";
import user from "./user";
import analytics from "./analytics";

export const GetSettings = () => store.getters["settings"];
export const SetSettings = (payload) => store.commit("SET_SETTINGS", payload);
export const ResetSettings = () => store.commit("RESET_SETTINGS");

export const GetAuth = () => { var x = store.getters["auth"]; console.log(UV(x)); return x; }
export const SetAuth = (payload) => store.commit("SET_AUTH", payload);
export const ResetAuth = () => store.commit("RESET_AUTH");
export const IsAuthenticated = () => { console.log("IsAuthenticated", GetAuth()); return GetAuth().access_token; }

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loading: false,
        error: null,
        modals: {},
        rightPanel: {},
        mainAreaClass: "",
        iconURL: {
            logo: process.env.VUE_APP_CDN_URL + "/img/logo.png",
            logoF: process.env.VUE_APP_CDN_URL + "/img/logo_f.png",
            logoGC: process.env.VUE_APP_CDN_URL + "/img/logo_gc.png",
            profile: process.env.VUE_APP_CDN_URL + "/img/profile.png",
            menu: process.env.VUE_APP_CDN_URL + "/img/icon_menu.png",
            close_s: process.env.VUE_APP_CDN_URL + "/img/icon_close_s.png",
            user: process.env.VUE_APP_CDN_URL + "/img/icon_username.png",
            coin: process.env.VUE_APP_CDN_URL + '/img/icon_coin.png',
            pgFirst: process.env.VUE_APP_CDN_URL + '/img/icon_pageFirst.png',
            pgLast: process.env.VUE_APP_CDN_URL + '/img/icon_pageLast.png',
            pgPrev: process.env.VUE_APP_CDN_URL + '/img/icon_pagePrev.png',
            pgNext: process.env.VUE_APP_CDN_URL + '/img/icon_pageNext.png',
            checkRed: process.env.VUE_APP_CDN_URL + '/img/icon_check_red.png',
            checkGreen: process.env.VUE_APP_CDN_URL + '/img/icon_check_green.png',
            email: process.env.VUE_APP_CDN_URL + '/img/icon_email.png',
        }
    },
    getters: {
        settings: (state) => state.settings,
        auth: (state) => state.auth,
        loading: (state) => state.loading,
        modals: (state) => state.modals,
        iconURL : (state) => state.iconURL
    },
    actions: {},
    mutations: {
        SET_AUTH(state, payload) { state.auth = { ...state.auth, ...payload }; },
        RESET_AUTH(state) { state.auth = { 	access_token: null, refresh_token: null, }; },
        SET_SETTINGS(state, payload) { state.settings = { ...state.settings, ...payload }; },
        RESET_SETTINGS(state) { state.settings = { rememberMe: false }; },
        SET_MAINAREACLASS(state, value) { state.mainAreaClass = value; },
        LOADING(state, loading) {
            state.loading = loading;
        },
        MODAL(state, {key, data}) {
            console.log(state, key, data)
            state.modals = { ...state.modals, [key]: data };
        },
        NOMODAL(state, key) {
            state.modals = { ...state.modals, [key]: null };
        },
        ERROR(state, error) {
            state.error = error;
        },
        OPEN_RIGHTPANEL(state, data) {
            state.rightPanel = { ...state.rightPanel, isVisible: true, ...(data||{}) }
        },
        CLOSE_RIGHTPANEL(state) {
            state.rightPanel = { ...state.rightPanel, isVisible: false }
        },
    },
    modules: {
        settings,
        auth,
        admin,
        user,
        analytics,
    },
    plugins: [createPersistedState({ paths: ["auth", "settings"] })],
});

store.subscribe((mutation, state) => {
    console.log(`Mutation: ${mutation.type}`, {
        payload: mutation.payload,
        state,
    });
});

export default store;
