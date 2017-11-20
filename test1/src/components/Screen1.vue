<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html='sokuhou_json'></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Screen1',
  data () {
    return {
      msg: 'routing Screen1',
      data: ''
    }
  },
  created: function () {
    this.test()
  },
  computed: {
    sokuhou_json () {
      if (this.data === '') {
        return '<span>loding</span>'
      } else {
        return this.data.data.query.results.item
      }
    }
  },
  methods: {
    test () {
      axios.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Fkancolle.doorblog.jp%2Findex.rdf'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", {}).then((res) => {
        this.data = res
      })
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
