<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <Component1 props1='props1 Message' props2="props2 Message" ></Component1>
    <br>
    <router-link to="/">HelloWorld</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-link to="/Screen1">Screen1</router-link>
    
    <router-view/>
  </div>
</template>

<script>
import Component1 from '@/components/Component1'

export default {
  name: 'app',
  components: { Component1 }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
