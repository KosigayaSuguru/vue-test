<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <ul>
      <template v-for='(item,index) in items'>
        <li :class="{odd:index % 2 === 0}">
          <span style="font-inherit">{{item.pubDate}}</span>
          <a :href='item.link'>{{item.title }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
// 親コンポーネントから渡されている props.items が更新されると自動的に再描画される
export default {
  name: 'rss1',
  props: ['items'],
  data () {
    return {
      msg: 'display rss1',
      tmp: {color: 'blue'}
    }
  },
  created: function () {
    console.log('rss1.vue created')
  },
  updated: function () {
    console.log(`rss1.vue updated`)
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
