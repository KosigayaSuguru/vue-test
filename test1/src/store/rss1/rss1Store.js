import axios from 'axios'

export default {
  state: {
    screen1: {
      items: [],
      url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fkancolle.doorblog.jp%2Findex.rdf',
      loading: false
    }
  },
  mutations: {
    // データの再取得を行う
    screen1Reload (state, payload) {
      state.screen1.items = payload.items
      state.screen1.loading = payload.loading
    },
    screen1Loading (state, payload) {
      state.screen1.loading = payload.loading
    }
  },
  getters: {
    getScreen1items (state) {
      console.log('call store_js.getScreen1items()')
      return state.screen1.items
    },
    isScreen1loading (state) {
      console.log('call store_js.isScreen1loading()')
      return state.screen1.loading
    }
  },
  actions: {
    screen1Reload (context) {
      context.commit('screen1Loading', { loading: true })
      new Promise(resolve => {
        axios.get(context.state.screen1.url, {}).then((res) => {
          console.log('call store_js.screen1Reload()')
          resolve(res)
        })
      }).then(res => {
        console.log('then()')
        let tmp = {}
        tmp.items = res.data.items
        tmp.loading = false
        context.commit('screen1Reload', tmp)
      })
    }
  }
}
