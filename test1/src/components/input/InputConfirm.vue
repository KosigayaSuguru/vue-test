<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span style="display:block">
      input text1: {{ getItem1.value }}
    </span>
    <span style="display:block">
      input text2: {{ getItem2.value }}
    </span>
    <div style="padding-top:1em;">
      <router-link to="/Input" ref="input">back</router-link>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InputConfirm',
  data () {
    return {
      test: false,
      msg: 'routing InputConfirm'
    }
  },
  computed: {
    ...mapGetters(['getItem1', 'getItem2'])
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
