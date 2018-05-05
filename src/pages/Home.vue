<template>
  <div>
      <button @click="openModal">打开日期</button>
      <el-button type="primary">aaa</el-button>
      <div class="modal" v-if="isModal">
          <el-form :model="form" label-width="80px">
              <el-form-item label="班次名称" size="medium">
                  <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item label="起始时间">
                <el-time-select
                    placeholder="起始时间"
                    v-model="form.startTime"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                />
              </el-form-item>
              <el-form-item label="结束时间">
                <el-time-select
                    placeholder="结束时间"
                    v-model="form.endTime"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: form.startTime
                    }" 
                />
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>
<script>
export default {
   data() {
      return {
          form:{
              name:'',
              startTime:'',
              endTime:''
          },
        isModal:false,
        startTime: '',
        endTime: ''
      };
    },
    methods:{
        openModal(){
            this.isModal = true;
        }
    }
}
</script>

<style>
.el-form{
    width: 500px;
    margin: auto;
}
.el-input--medium{
    width: 220px;
}
</style>
