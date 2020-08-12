<template>
  <div>
      <p>foo: {{foo}}</p>
      
      <!-- $attrs 里存放的是父组件（Child1）中绑定的非 Props 属性。-->
      <!-- $listeners里存放的是父组件中绑定的非原生事件 -->
      <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>

<script>
import child2 from './child2'
export default {
    components:{
        child2
    },
    props:{
        foo: {    // props少的话，也可以简写成['foo']
            type: String
        }
    },
    inheritAttrs: false,
    created(){  // 可以看到当前由于props和inheritAttrs属性的原因，$attrs少了个foo属性
        console.log(this.$attrs) // {boo: "Html", coo: "CSS"}
        console.log(this.$listeners)  // {handleChange: ƒ}
    },
}
</script>

<style>

</style>