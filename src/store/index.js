import Vue from 'vue'
import Vuex from 'vuex'
import car from './modules/car.js'
import count from './modules/count.js'

const modules = {
  car,
  count
}
Vue.use(Vuex)
export default new Vuex.Store({
  modules
})
// kl
