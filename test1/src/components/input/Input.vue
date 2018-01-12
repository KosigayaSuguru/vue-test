<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span style="display:inline-flex">
      input text1: 
      <input-text-item type="text" elementName="text1" validateRule="^[0-9]+$" value="input to me" @updated-text1='updated' />
    </span>
  </div>
</template>

<script>
import InputTextItem from '@/components/input/InputTextItem'

export default {
  name: 'Input',
  data () {
    return {
      msg: 'routing Input'
    }
  },
  methods: {
    updated (val) {
      console.log(val)
    }
  },
  components: { InputTextItem }
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
