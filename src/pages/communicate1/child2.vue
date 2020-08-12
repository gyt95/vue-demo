<template>
  <div>
      <p>coo: {{coo}}</p>
      <button @click="startChange">我要调用祖先组件的事件</button>
  </div>
</template>

<script>
export default {
    props: ['coo'],
    methods: {
        startChange(){
            this.$emit('handleChange')
            console.log('startChange success')
        }
    }
}
</script>

<style>

</style>