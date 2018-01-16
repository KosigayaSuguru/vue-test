import axios from 'axios'

export default {
  state: {
    screen1: {
      items: [],
      url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fkancolle.doorblog.jp%2Findex.rdf'
    }
  },
  mutations: {
    // データの再取得を行う
    screen1Reload (state, payload) {
      state.screen1.items = payload.items
    }
  },
  getters: {
    getScreen1items (state) {
      console.log('call store_js.getScreen1items()')
      return state.screen1.items
    }
  },
  actions: {
    screen1Reload (context) {
      new Promise(resolve => {
        axios.get(context.state.screen1.url, {}).then((res) => {
          console.log('call store_js.screen1Reload()')
          resolve(res)
        })
      }).then(res => {
        console.log('then()')
        let tmp = {}
        tmp.items = res.data.items
        context.commit('screen1Reload', tmp)
      })
    }
  }
}
