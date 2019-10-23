<template>
  <!-- 这是用于测试mixins的 -->
  <!-- 需求：两个页面，都需要执行一个具体操作流程，涉及几个method -->
  <!-- 混入mixins的作用，就是能复用功能，可包含任意组件选项，当组件使用混入对象时，所有混入对象的选项，将被 “混合” 进该组件本身的！选项中 -->
  <div>
      <div v-for="item in tabList" :key="item.id">
          <p @click="switchTab(item)">{{item.title}}</p>
      </div>
      <component :is="currTab.components"></component>
  </div>
</template>

<script>
import exportA from '../components/exportA'
import exportB from '../components/exportB'
export default {
    data(){
        return{
            tabList: [
                { id: 1, title: '导出A', components: exportA },
                { id: 2, title: '导出B', components: exportB },
            ],
            currTab: null
        }
    },
    components:{
        exportA,
        exportB
    },
    created(){
        this.switchTab(this.tabList[0])
    },
    methods:{
        switchTab(item){
            this.currTab = item
        }
    }
}
</script>

<style scoped>
p{
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
p:hover{
    color: rgb(251, 134, 0);
}
</style>