<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
      <transition-group name="staggered-fade" tag="ul" v-on:enter="listEnter" v-on:before-enter="listBeforeEnter" appear>
        <template v-for='(item,index) in items'>
          <li :class="{odd:index % 2 === 0}" :key='index' :data-index='index'>
            <span style="font-inherit">{{item.pubDate}}</span>
            <a :href='item.link'>{{item.title }}</a>
          </li>
        </template>
      </transition-group>
  </div>
</template>

<script>
// npm install --save velocity-animate
import Velocity from 'velocity-animate'

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
  },
  methods: {
    listBeforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    listEnter (el, done) {
      // li の data-index に設定された値を取得してる
      var delay = el.dataset.index * 20
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
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
