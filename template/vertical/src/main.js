import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import vco from "v-click-outside"
import VueMask from 'v-mask'
import * as VueGoogleMaps from 'vue2-google-maps'

import App from './App.vue'
import router from './router'

import "@/design/app.scss";

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


