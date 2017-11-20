<template>
  <div>
    <div>{{ props1 }}</div>
    <div>{{ message1 }}</div>
    <div>{{ message2 }}</div>
    <div>{{ computed1 }}</div>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: ['props1', 'props2'],
  data () {
    return {
      message1: 'message1 property string in Compoment1',
      message2: this.props2
    }
  },
  computed: {
    computed1 () {
      return 'computed1:' + this.message1 + 'aaaaaaa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
