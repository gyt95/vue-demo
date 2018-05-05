<template>
  <div>
      Child
      {{isFlag}}
      <br><br>
      <button @click="sum = !sum">...</button>
      {{sum}}
      <br><br>


      
      <p>测试引用类型属性修改子组件视图更新情况</p>
      <ul>
          <li v-for="item in arrData" :key="item.id">
              <button @click="handleMod(item)">click</button>
              {{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.status}}
              
              <p>{{item.city}}a</p>

              <span v-for="item2 in item.lis" :key="item2.id">
                  {{item2.isCorrect}}
              </span>
          </li>
      </ul>
      <br><br>
      <ul>
          <li v-for="(val,index) in objData" :key="index">
              {{val}}
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    isFlag: {
      type: Boolean
    },
    arrData: {
      type: Array
    },
    objData: {
        type: Object
    }
  },
  data() {
    return {
      arr: [
        { id: 1, name: "jack" },
        { id: 2, name: "ben" },
        { id: 3, name: "ken" }
      ],
      sum: false
    };
  },
  watch: {
    // 监听某个属性，变化则被调用
    isFlag: function() {
      alert(this.isFlag);
      this.send();
    },
    sum: function() {
      console.log(this.isFlag);
    }
  },
  methods: {
    send() {
      console.log("全选/全清除");
      console.log(this.arr);
    },
    handleMod(item){
        this.$emit('onClick',item)
    }
  }
};
</script>
