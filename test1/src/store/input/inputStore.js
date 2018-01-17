export default {
  state: {
    item1: {
      value: 'input to me @item1',
      startup: true,
      valid: false,
      validateRule: '^[0-9]+$'
    },
    item2: {
      value: 'input to me @item2',
      startup: true,
      valid: false,
      validateRule: '^[0-9]+$'
    }
  },
  mutations: {
    setItem1 (state, payload) {
      console.log(payload)
      state.item1.value = payload.value
      state.item1.valid = payload.valid
      state.item1.startup = payload.startup
    },
    setItem2 (state, payload) {
      console.log(payload)
      state.item2.value = payload.value
      state.item2.valid = payload.valid
      state.item2.startup = payload.startup
    }
  },
  getters: {
    getItem1 (state) {
      console.log('call inputStore_js.getItem1()')
      return state.item1
    },
    getItem2 (state) {
      console.log('call inputStore_js.getItem2()')
      return state.item2
    },
    isAllValidOk (state) {
      if (state.item1.valid && state.item2.valid) {
        return true
      }
      return false
    }
  },
  actions: {
    setItem1 (context, payload) {
      context.commit('setItem1', payload)
    },
    setItem2 (context, payload) {
      context.commit('setItem2', payload)
    }
  }
}
