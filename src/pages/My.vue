<template>
  <div>
      my
      <nav class="nav-header">
            <button 
                v-for="item in navList" 
                :key="item.id"
                @click="changeTab(item.name)"
                :class="item.name === currTab ? item.isActive = 'btn-active' : item.isActive = ''"
            >
                {{item.title}}
            </button>
        </nav>

        <!-- <component :is="currTab"></component> -->
        <div :is="currTab">{{tmp.title}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { id: 1, title: "测试1", name: "test1", isActive: "" },
        { id: 2, title: "测试2", name: "test2", isActive: "" },
        { id: 3, title: "测试3", name: "test3", isActive: "" }
      ],
      currTab: "",
      tmp:null
    };
  },
  created() {
    this.changeTab(this.navList[0].name);
  },
  methods: {
    changeTab(name) {
      this.currTab = name;
      this.tmp = this.navList.find(v => v.name === name)
    }
  }
}
</script>
<style>
    @import url('../components/tab.less');
</style>

