<template>
  <transition name="slide-fade">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <div>
        <span style="display:inline-flex">
          input text1: 
          <input-text-item type="text" elementName="text1" :validateRule='getItem1.validateRule' :value='getItem1.value' :inputed='getItem1.startup' @updated-text1='updated1' />
        </span>
      </div>
      <div>
        <span style="display:inline-flex">
          input text2: 
          <input-text-item type="text" elementName="text2" :validateRule='getItem2.validateRule' :value='getItem2.value' :inputed='getItem2.startup' @updated-text2='updated2' />
        </span>
      </div>
      <div style="padding-top:1em;">
        <template v-if='isAllValidOk'>
          <router-link to="/InputConfirm" ref="inputConfirm">ok</router-link>
        </template>
        <template v-else>
          inputed invalid value.
        </template>
            <router-view/>
      </div>
    </div>
  </transition>
</template>

<script>
import InputTextItem from '@/components/input/InputTextItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Input',
  data () {
    return {
      msg: 'routing Input'
    }
  },
  computed: {
    ...mapGetters(['getItem1', 'getItem2', 'isAllValidOk'])
  },
  methods: {
    updated1 (val) {
      this.setItem1(val)
    },
    updated2 (val) {
      this.setItem2(val)
    },
    ...mapActions(['setItem1', 'setItem2'])
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
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  display: none;
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
