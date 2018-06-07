<template>
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
</template>
<script>
export default {
  props: {
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
@import "./card.less";
</style>
