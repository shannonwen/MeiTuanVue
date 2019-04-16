<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="msg1" :id="id" v-if="msg==msg1"></div>
    <div v-else>123</div>

    <div :class="{a1:a3}">
      我借你{{money}},你还我{{giveback}},还剩{{b}}

    </div>
    <div :class="obj">12321</div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span>{{index+1}},英文名：{{item.name}},中文名:{{item.han}}</span>
      </li>
     <!-- <template v-for="(item,index) in list">
      <li :key="item">hello</li>
      <li :key="item">
        <span>{{index+1}},英文名：{{item.name}},中文名:{{item.han}}</span>
      </li>
    </template> -->
    </ul>
    
    <div><span></span></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      msg1: '<h1 style="color:red;">hello world</h1>',
      id: 'text',
      money: 1000,
      giveback: 10,
      a1: "class0",
      a2: "class1",
      a3: true,
      obj: {
        'test--1':true
      },
      list: [
        {name:"wlx",han: "温龙香"},
        {name:"wlx2",han: "温龙香2"},
        {name:"wlx3",han: "温龙香3"}
      ]
    }
  },
  computed:{
    b: function(){
      return this.money - this.giveback
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
