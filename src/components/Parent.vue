<template>
  <div>
      Parent
      <button @click="change()">全选</button>
      <button @click="clear()">全清除</button>
      <Child 
        :isFlag="flag"
      />
  </div>
</template>
<script>
import Child from './Child.vue'
export default {
  components:{
      Child
  },
  data(){
      return{
          flag: false
      }
  },
  mounted(){
      this.run()
  },
  methods:{
      change(){
          this.flag = true;
      },
      clear(){
          this.flag = false;
      },
      run(){
          console.log('每次更新我都被调用?')
      }
  }
}
</script>
