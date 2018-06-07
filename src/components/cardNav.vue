<template>
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
    }
  }
};
</script>
<style>
@import "./card.less";
</style>
