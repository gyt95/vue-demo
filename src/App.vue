<template>
  <div id="app">

    <main>
      <router-view/>
    </main>

    <!-- <footer>
      <router-link 
        :to="item.path"
        v-for="(item,index) in list" 
        :key="index"
      >
        {{item.title}}
        <div v-html="currPath === item.path ? item.activeNode : item.node "></div>
      </router-link>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      list: [
        { title:'首页', path:'/home', node:'<span>123</span>', activeNode:'<span>home!</span>'},
        { title:'购物', path:'/buy', node:'<span>456</span>', activeNode:'<span>buy!</span>'},
        { title:'我的', path:'/my', node:'<span>789</span>', activeNode:'<span>my!</span>'}
      ],
      activeIndex:0,
      currPath:this.$route.path
    }
  },
  watch:{
    '$route'(to,from){  // 通过在$route观察者回调内获取路由状态信息，判断当前路由
      this.currPath = this.$route.path
      console.log(this.currPath)
    },
    'currPath':'test' // data()的currPath值变化时，调用test()方法
  },
  methods:{
    test(){
      console.log('路由改变了')
    }
  }
   // 测试vue是否有自动获取路由path的api，结果：没有。
   // 当路由跳转时，可以通过router.beforeEach钩子函数或通过watch观察路由对象，再获取当前path值
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
body{
  margin: 0;
  padding: 0;
}
span{
  font-weight: bold;
  color: #000;
}
main div{
  /* height: 400px; */
}
footer{
  position: fixed;
  bottom:0;
  width: 100%;
  background: #fff;
}
footer a{
  border: 1px solid;
  width: 29%;
  margin-right: 5px;
  display: inline-block;
}
</style>
