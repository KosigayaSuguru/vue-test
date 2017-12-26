<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h3>{{ doupdate }}</h3>
    <ul>
      <template v-for='(item,index) in load'>
        <li :class="{odd:index % 2 === 0}">
          <span style="font-inherit">{{item.pubDate}}</span>
          <a :href='item.link'>{{item.title }}</a>
        </li>
      </template>
    </ul>
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
      tmp: {color: 'blue'},
      data: ''
    }
  },
  created: function () {
    console.log('call created')
    this.requestRss()
  },
  updated: function () {
    console.log(`call updated`)
  },
  computed: {
    load: function () {
      // 親コンポーネントから渡されているprops.doupdteが変更された際にもコールされるので、変更を検知して再リクエスト
      console.log(`doupdate : ${this.doupdate}`)

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
        console.log('call computed:load()')
        return this.data
      }
    }
  },
  methods: {
    requestRss () {
      return new Promise((resolve) => {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fkancolle.doorblog.jp%2Findex.rdf', {}).then((res) => {
          this.data = res.data.items
          console.log('call requestRss()')
          console.log(res)
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
  list-style-type: disc;
  text-align :left;
  /* padding: 0; */
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
span {
  display: inline-block;
  /* color: red; */
  width: 10em;
  font-size: 0.5em;
}
a {
  color: #42b983;
}

.odd {
  background-color: floralwhite;
}
</style>
