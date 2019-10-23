<template>
  <div>
      <ex-date-picker :value="value1" type="date" placeholder="选择日期"></ex-date-picker>
      
      <!-- <span class="el-icon-arrow-left arrow" @click="forward" v-show="forwardShow"></span>

      <el-date-picker :value="value1" type="date" placeholder="选择日期"></el-date-picker>

      <span class="el-icon-arrow-right arrow" @click="back" v-if="backShow"></span> -->
  </div>
</template>

<script>
import ExDatePicker from './datePicker.js'
export default {
    components: {
        ExDatePicker
    },
    data(){
        return{
            data: [],
            value1: ''
        }
    },
    methods:{
        
    },
    mounted(){

    }
}
</script>

<style>

</style>