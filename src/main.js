import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './service'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import cors from 'cors'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(cors)

Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  el: '#app',
  router,
  api,
  store,
  render: h => h(App)
}).$mount('#app')
