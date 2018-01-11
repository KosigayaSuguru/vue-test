<template>
  <div class="hello">
    <ul>
      <li v-for='(item, index) in list' :key='item' :class='{ now : isSelected(index) }' @click='$emit("selected", index)'>
        {{ selectedStat(index) }} movie{{ index+1 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: ['list', 'selected'],
  data () {
    return {
      msg: 'MovieList'
    }
  },
  methods: {
    isSelected (idx) {
      if (this.selected === idx) {
        return true
      }
      return false
    },
    selectedStat (idx) {
      if (this.isSelected(idx)) {
        return 'selected: '
      }
      return 'click me: '
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
.now {
  background-color: gray;
  color: white;
}
a {
  color: #42b983;
}
</style>
