<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <!-- 
      ↓をクリックすると、store(store.js) の state.screen1.rssReload を true にし、
      rss1(RSS1.vue)の doupdate を true にして、computed の load() をコールさせる
    -->
    <span @click="screen1ReloadOn" class="reload">RSS1 reload now</span>
    <!--
      リロードが終了したら、rss1 から reloaded イベントが発火されるので、
      それを受けて store(store.js) の state.screen1.rssReload を false に戻す
      ※これやらないと無限にリロードする
    -->
    <RSS1 :doupdate='getScreen1Reload' @reloaded="screen1ReloadOff"></RSS1>
  </div>
</template>

<script>
// importした変数名がタグとして使用可能
// ここの場合、rss1 がhtmlのタグ（<RSS1></RSS1>）として使えるようになる
import RSS1 from '@/components/RSS1'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Screen1',
  data () {
    return {
      msg: 'routing Screen1'
    }
  },
  computed: {
    // store内で定義されているgettersメソッドをコンポーネント内にマッピングする
    // ※これがないと、store.getters.xxxxみたいなのを一々書かないといけない
    // https://vuex.vuejs.org/ja/getters.html
    ...mapGetters(['getScreen1Reload'])
  },
  methods: {
    // store内で定義されているactionsメソッドをコンポーネント内にマッピングする
    // ※これがないと、store.dispatch('xxxx')みたいなのを一々書かないといけない
    // https://vuex.vuejs.org/ja/actions.html
    ...mapActions(['screen1ReloadOn', 'screen1ReloadOff'])
  },
  components: { RSS1 }
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
.reload {
  color: red;
}
</style>
