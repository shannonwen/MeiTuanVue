<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model="inputNum">
    <div v-n="inputNum"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      inputNum: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
