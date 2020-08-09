const state = {
  // carID: '',
  // carName: '',
  // carBrand: '',
  // carPrice: ''
  car: {}
}
const getters = {
  // getCarID: (state) => {
  //   return state.carID
  // },
  // getCarName: (state) => {
  //   return state.carName
  // },
  // getCarBrand: (state) => {
  //   return state.carBrand
  // },
  // getCarPrice: (state) => {
  //   return state.carPrice
  // },
  getCar: (state) => {
    return state.car
  }
}
const actions = {
  // setCarID: ({ commit }, payload) => {
  //   commit('SET_ID', payload)
  // },
  // setCarName: ({ commit }, payload) => {
  //   commit('SET_NAME', payload)
  // },
  // setCarBrand: ({ commit }, payload) => {
  //   commit('SET_BRAND', payload)
  // },
  // setCarPrice: ({ commit }, payload) => {
  //   commit('SET_PRICE', payload)
  // },
  setCar: ({ commit }, payload) => {
    commit('SET_CAR', payload)
  }
}
const mutations = {
  // SET_ID (state, payload) {
  //   state.carID = payload
  // },
  // SET_NAME (state, payload) {
  //   state.carName = payload
  // },
  // SET_BRAND (state, payload) {
  //   state.carBrand = payload
  // },
  // SET_PRICE (state, payload) {
  //   state.carPrice = payload
  // },
  SET_CAR (state, { payload }) {
    state.car = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
