<template>
  <div>
      buy—测试通用组件
        <div class="card-nav-box">
            <input v-if="item.isEdit" type="text" v-model="item.name">
            <div v-if="item.isEdit" class="card-nav-btn">
                <button @click="save(item)">确定</button>
                <button @click="cancel(item)">取消</button>
            </div>
            <h3 v-if="!item.isEdit">{{item.name}}</h3>
            <div v-if="!item.isEdit" class="card-nav-btn">
                <button @click="edit(item)">改名</button>
                <button @click="del(item)">删除</button>
            </div>
        </div>
        <ul class="card-list">
            <li v-for="item in data" :key="item.id">
                <span>{{item.name}}</span>
                <span v-if="tag=='C'">{{item.phone}}</span>            
                <span v-if="tag=='B'">{{item.st}} - {{item.et}}</span>            
                <span v-if="tag=='A'" @click="handleChange(item)">
                    <!-- 填写职能 -->
                    <input 
                        type="text" 
                        v-model="item.duty" 
                        placeholder="填写职能" 
                        @blur="handleBlur(item)"
                    />
                </span>
                <button @click="handleClick(item)">{{btnName}}</button>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    name: {
      type: String,
      default: ""
    },
    data: {
      type: Array
    },
    btnName: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    }
  },
  methods: {
    save(item) {
      this.$emit("save", item);
    },
    cancel(item) {
      this.$emit("cancel", item);
    },
    edit(item) {
      this.$emit("edit", item);
    },
    del(item) {
      this.$emit("delete", item);
    },
    handleClick(item) {
      this.$emit("onClick", item);
    },
    handleChange(item) {
      this.$emit("onChange", item);
    },
    handleBlur(item) {
      this.$emit("onBlur", item);
    }
  }
};
</script>
<style>
@import "./card.css";
</style>
