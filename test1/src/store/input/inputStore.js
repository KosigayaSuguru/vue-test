export default {
  state: {
    item1: {
      value: 0
    }
  },
  mutations: {
    setItem1 (state, payload) {
      state.item1.value = payload.value
    }
  },
  getters: {
    getItem1 (state) {
      console.log('call inputStore_js.getItem1()')
      return state.item1.value
    }
  },
  actions: {
    setItem1 (context) {
      context.commit('setItem1', context)
    }
  }
}
