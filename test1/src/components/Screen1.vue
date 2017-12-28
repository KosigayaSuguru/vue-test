<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <!-- 
      ↓をクリックすると、store(store.js) の screen1Reload() が実行される
    -->
    <span @click="screen1Reload" class="reload">RSS1 reload now</span>
    <!--
      screen1Reload() が実行された際に store.screen1.items が更新されるのでそのタイミングで子コンポーネントが再描画される
    -->
    <RSS1 :items='getScreen1items'></RSS1>
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
  created: function () {
    console.log('screen1.vue created')
    this.screen1Reload()
  },
  computed: {
    // store内で定義されているgettersメソッドをコンポーネント内にマッピングする
    // ※これがないと、store.getters.xxxxみたいなのを一々書かないといけない
    // https://vuex.vuejs.org/ja/getters.html
    ...mapGetters(['getScreen1items'])
  },
  methods: {
    // store内で定義されているactionsメソッドをコンポーネント内にマッピングする
    // ※これがないと、store.dispatch('xxxx')みたいなのを一々書かないといけない
    // https://vuex.vuejs.org/ja/actions.html
    ...mapActions(['screen1Reload'])
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
