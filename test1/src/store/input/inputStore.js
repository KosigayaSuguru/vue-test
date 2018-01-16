export default {
  state: {
    item1: {
      value: 'input to me',
      valid: false,
      validateRule: '^[0-9]+$'
    }
  },
  mutations: {
    setItem1 (state, payload) {
      console.log(payload)
      state.item1.value = payload.value
      state.item1.valid = payload.valid
    }
  },
  getters: {
    getValueItem1 (state) {
      console.log('call inputStore_js.getItem1()')
      return state.item1.value
    },
    getValidateRuleItem1 (state) {
      console.log('call inputStore_js.getValidateRuleItem1()')
      return state.item1.validateRule
    }
  },
  actions: {
    setItem1 (context, payload) {
      context.commit('setItem1', payload)
    }
  }
}
