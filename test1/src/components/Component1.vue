<template>
  <div>
    <div>{{ props1 }}</div>
    <div>{{ message }}</div>
    <div>{{ computed1 }}</div>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: ['props1'],
  data () {
    return {
      message: 'messge property string in Compoment1'
    }
  },
  computed: {
    computed1 () {
      return 'computed1:' + this.message + 'aaaaaaa'
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
