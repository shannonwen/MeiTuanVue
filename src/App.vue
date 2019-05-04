<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model="inputNum">
    <div v-n="inputNum"></div>
    <ev/>
    <com :age="age" @patch="msg">
      <h1 slot="a">我要加东西</h1>
      <h1 slot="b">我要加东西22</h1>
    </com>
    <!--vuex简单应用-->
    <!-- <Vuexx></Vuexx> -->
    <!--vuex高级应用-->
    <pagea/>
    <pageb/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import ev from './components/events.vue'
import com from './components/com.vue'
// import Vuexx from './components/vuex.vue'

import pagea from './components/a.vue'
import pageb from './components/b.vue'

export default {

  name: 'app',
  components: {
    HelloWorld,
    ev,
    com,
    // Vuexx,
    pagea,
    pageb
  },
  data(){
    return {
      inputNum: 0,
      age: 'vue world'
    }
  },
  methods:{
    msg(){
      // console.log('子组件触发');
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
