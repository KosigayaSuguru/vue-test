<template>
  <div>
    <input :type='type' :name='elementName' v-model='val' :class='{ ok : isValidateOk(), ng : isValidateNg() }'/>
    <span v-if='isValidateOk()'>ok</span>
    <span v-else-if='isValidateNg()'>{{ validateRule }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputItem',
  props: ['type', 'elementName', 'value', 'validateRule', 'inputed'],
  data () {
    return {
      msg: 'InputItem',
      val: this.value,
      timerId: [],
      startup: this.inputed, // 表示直後で何も入力されていない状態:true
      validated: false,
      updateEventName: 'updated-' + this.elementName
    }
  },
  created: function () {
    if (!this.startup) {
      this.validate()
    }
  },
  updated: function () {
    this.timerId.forEach(a => {
      clearTimeout(a)
    })
    let id = setTimeout(() => {
      console.log(this.val)
      this.validate()
      this.$emit(this.updateEventName, { value: this.val, valid: this.validated, startup: this.startup })
    }, 1000)
    this.timerId.shift()
    this.timerId.push(id)
  },
  methods: {
    validate () {
      const v = this.val
      const a = new RegExp(this.validateRule)
      if (a.test(v)) {
        this.validated = true
      } else {
        this.validated = false
      }
      this.startup = false
    },
    isValidateOk () {
      if (!this.startup && this.validated) {
        return true
      }
      return false
    },
    isValidateNg () {
      if (!this.isValidateOk() && !this.startup) {
        return true
      }
      return false
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
input.ok {
  background: aquamarine
}
input.ng {
  background: lightpink
}
</style>
