<template>
  <div>
      <h1 :style="{color: color}">A组件</h1>
      <button @click="() => changeColor()">改变颜色</button>
      <child1></child1>
  </div>
</template>

<script>
import child1 from './child1'
import Vue from 'vue'
export default {
    data(){
        return{
            color: 'blue'
        }
    },
    components: {
        child1
    },
    // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
    // 注意，升级时，vue和vue-template-compiler的版本一定要一致，vue是2.6.11，那么vue-template-compiler也要升级为2.6.11
    provide() {
      this.theme = Vue.observable({
        color: "blue"
      });
      return {
        theme: this.theme
      };
    },
    methods: {
        changeColor(color) {
            if (color) {
                this.color = color;
            } else {
                this.color = this.color === "blue" ? "red" : "blue";
            }
        }
    }
}
</script>

<style>

</style>