import Vue from 'vue'
import Vuex from 'vuex'
import inputStore from '@/store/input/inputStore'
import rss1Store from '@/store/rss1/rss1Store'
import countStore from '@/store/count/countStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count: countStore,
    rss1: rss1Store,
    input: inputStore
  }
})
