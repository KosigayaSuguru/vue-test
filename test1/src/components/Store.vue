<template>
  <div class="hello">
    <h1 @click='storeIncrement'>{{ get_store }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'store.vue'
    }
  },
  computed: {
    get_store () {
      return `store.state.count (click me): ${this.$store.state.count.count}`
    }
  },
  methods: {
    storeIncrement () {
      this.$store.commit('increment')
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
