import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import vco from "v-click-outside"
import VueMask from 'v-mask'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
axios.defaults.withCredentials = true

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
require('./globals');
import { formatCurrency, formatCryptoCurrency, formatNumber, formatMonth, formatDate, formatTime, formatDateTime, formatUTCDateTime, formatTimestamp, formatUserStatus } from "@/utils";

import vuetify from './plugins/vuetify'
//import 'vuetify/dist/vuetify.min.css'
//import "@/design/app.scss";

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(vco)
Vue.use(VueMask)
Vue.use(BootstrapVue)
Vue.component('apexchart', VueApexCharts)
Vue.use(require('vue-chartist'))
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Object.keys(rules).forEach(rule => { extend(rule, rules[rule]); });

Vue.filter("formatCurrency", formatCurrency);
Vue.filter("formatCryptoCurrency", formatCryptoCurrency);
Vue.filter("formatNumber", formatNumber);
Vue.filter("formatMonth", formatMonth);
Vue.filter("formatDate", formatDate);
Vue.filter("formatDateTime", formatDateTime);
Vue.filter("formatTime", formatTime);
Vue.filter("formatUTCDateTime", formatUTCDateTime);
Vue.filter("formatTimestamp", formatTimestamp);
Vue.filter("formatUserStatus", formatUserStatus);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#container')


