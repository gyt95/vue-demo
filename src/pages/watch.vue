<template>
    <div>
        <button @click="num++">{{num}}</button>
        <button @click="form.age++">{{form.age}}</button>

        <button @click="change++">{{isChecked}}</button>
    </div>
</template>
<script>
export default {
  data(){
      return{
          num: 0,
          form: {
              age: 20,
              name: 'gyt'
          },
          change: 0,
          isChecked: false
      }
  },
  watch:{
      num(val, oldVal){   // 基本用法，监听普通属性的值，如属性num
          console.log(`旧值${oldVal},新值${val}`)
      },
      change: 'check',   // 基本用法，可以调用method
      
      'form.age'(val, oldVal){ // 这样写，能监听变化，但缺点是要指定某个属性
          console.log(val)
          console.log(oldVal)
      },
      form:{  // 这样写，深度watcher。每次val和oldVal都是最新值，因为观察的数据为对象或数组，两个形参指向同一个数据对象
          handler(val, oldVal){
              console.log(val)
              console.log(oldVal)
            //   console.log(this.isChecked)
          },
          deep: true
      }
      // newValue(val, oldVal){   // 这样写，结合computed，和'form.age'那种一样，能具体监听某个属性的新旧值，但要指明
      //     console.log(val)
      //     console.log(oldVal)
      // }
  },
  computed:{
      newValue(){
          return this.form.age
      }
  },
  methods:{
      check(){
          // ...
          this.isChecked = !this.isChecked
      }
  }
  // 关于watch vuex的getter：https://www.zhihu.com/question/39155535 “这个男人来自三体”回答的评论
};
</script>
