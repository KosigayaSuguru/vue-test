<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <!-- 
      ↓をクリックすると、rss1reoad を true にし、rss1(RSS1.vue)の doupdate を true にし、
      computed の load() をコールさせる
    -->
    <span @click="rss1reload = true" class="reload">rss1 reload now</span>
    <!--
      リロードが終了したら、rss1 から reloaded イベントが発火されるので、それを受けて、rss1reload を false に戻す
      ※これやらないと無限にリロードする
    -->
    <rss1 :doupdate='rss1reload' @reloaded='rss1reload=false'></rss1>
  </div>
</template>

<script>
// importした変数名がタグとして使用可能
// ここの場合、rss1 がhtmlのタグ（<rss1></rss1>）として使えるようになる
import rss1 from '@/components/RSS1'

export default {
  name: 'Screen1',
  data () {
    return {
      rss1reload: false,
      msg: 'routing Screen1'
    }
  },
  components: { rss1 }
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
