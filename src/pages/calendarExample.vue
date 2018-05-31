<template>
  <div>
      <div class="scheduling-box">
      <div class="left-box">
       <vue-calendar
            :isAllSelect="isAllSelect"
            :isAllClear="isAllClear"
            @onClick="selectDate"
            @onReset="clearAll"
          /> 
      </div>
      </div>
  </div>
</template>
<script>
import vueCalendar from '../components/vueCalendar.vue' 
export default {
  components:{
      vueCalendar,
  },
  data(){
      return{
          
          isAllSelect:false,
          isAllClear:false,
      }
  },
  methods:{
      selectDate(item){
          // 先判断传入的是否为Array，Y则证明是全选，N证明是正常选中某一天，获取的是Object
          console.log(item)

          if(item instanceof Array){    // 全选，拦截处理
            this.formData.date_list = item
            this.clearAll()
            return;
          }
          
          if(item.group_id === ''){  // 如果当天没有排班，则跳到排班界面、取消前一个的isActive
            item.isActive === ''    // 返回''则要删除指定元素
            ? this.formData.date_list = this.formData.date_list.filter(v => v !== item)
            : this.formData.date_list.push(item)
          }


          if(item.group_id === '有' && item.isActive !== ''){  // 查看-显示
              this.isChecked = true;
              return;
          }else if(item.group_id === '有' && item.isActive === ''){  // 查看-隐藏
              this.isChecked = false;
          }
      },
      clearAll(){ // 重置全选、全清除
        this.isAllSelect = false 
        this.isAllClear = false 
        //   this.formData.date_list = []
      },
  }
  
}
</script>
