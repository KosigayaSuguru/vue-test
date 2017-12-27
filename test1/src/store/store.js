import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    screen1: {
      rssReload: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    screen1ReloadOn (state) {
      state.screen1.rssReload = true
    },
    screen1ReloadOff (state) {
      state.screen1.rssReload = false
    }
  },
  getters: {
    getScreen1Reload (state) {
      return state.screen1.rssReload
    }
  },
  actions: {
    screen1ReloadOn (context) {
      context.commit('screen1ReloadOn')
    },
    screen1ReloadOff (context) {
      context.commit('screen1ReloadOff')
    }
  }
})
