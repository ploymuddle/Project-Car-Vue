const state = {
  count: 0
}
const mutations = {
  setCount (state, value) {
    state.count = value
  }
}
const actions = {
  addAction (context) {
    context.commit('setCount', this.getters.getCount + 1)
  },
  delAction (context) {
    context.commit('setCount', this.getters.getCount - 1)
  }
}
const getters = {
  getCount (state) {
    return state.count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
