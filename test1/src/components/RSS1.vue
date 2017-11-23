<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h3>{{ doupdate }}</h3>
    <div v-html='load'></div>
  </div>
</template>

<script>
import axios from 'axios'

// props の doupdate を true にすると、computed の load() が doupdate を参照しているため、
// 呼び出されRSSを表示している部分がリロードされる
export default {
  name: 'rss1',
  props: ['doupdate'],
  data () {
    return {
      msg: 'display rss1',
      data: ''
    }
  },
  created: function () {
    console.log('call created')
    this.requestRss()
  },
  computed: {
    load: function () {
      if (this.doupdate === true) {
        console.log('call reload()')
        // rssリクエスト
        this.requestRss()
        // コンポーネントの呼び出し元向けに reloaded イベントを発生させ、
        // doupdate を v-bind して true にしている変数を false に戻させる
        this.$emit('reloaded')
      }

      if (this.data === '') {
        return '<span>loding</span>'
      } else {
        return this.data.data.query.results.item
      }
    }
  },
  methods: {
    requestRss () {
      return new Promise((resolve) => {
        axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fkancolle.doorblog.jp%2Findex.rdf'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", {}).then((res) => {
          this.data = res
          console.log('call requestRss()')
          resolve(1)
        })
      })
    },
    update_start () {
      console.log('call update_start()')
      if (this.update === true) {
        this.requestRss().then((a) => {
          console.log(a)
          this.update = false
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
