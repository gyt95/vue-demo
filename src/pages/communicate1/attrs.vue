<template>
  <div>
      <p>此例子：通过$attrs和$listeners实现隔代组件通信</p>
      <child1 
      :foo="foo"
      :boo="boo"
      :coo="coo" @handleChange="handleChange"></child1>
  </div>
</template>

<script>
import child1 from './child1.vue'
export default {
    data() {
        return {
            foo: "Javascript",
            boo: "Html",
            coo: "CSS",
            doo: "Vue"
        };
    },
    components: {
        child1
    },
    methods: {
        handleChange(){
            console.log('success!')
            alert('我被调用了')
        }
    }
}
</script>

<style>

</style>