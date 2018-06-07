<template>
    <div class="vc-calendar">
        <!-- 日历 -->
        <div class="vc-nav">
            <div class="vc-nav-box">
                <div class="vc-nav-body">
                    <p>{{obj.year}}</p>
                    <h3>{{obj.month}}月</h3>
                </div>
                <button class="vc-arrow-left" @click="switchMonth('prev')">&lt;</button>
                <button class="vc-arrow-right" @click="switchMonth('next')">&gt;</button>
            </div>
        </div>
        <div class="vc-main">
            <div class="vc-main-box">
                <div class="vc-main-head">
                    <span v-for="(item,index) in days" :key="index">{{item}}</span>
                </div>
                <div class="vc-main-body">
                    <div 
                        class="vc-date-list" 
                        v-for="(item,index) in data" 
                        :key="index"
                        :class="[item.isActive,item.disabled]"
                        @click="showDate(item)">
                        <p>{{item.date}}</p>
                        <p>班次</p>
                        <p>{{item.group_id}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props:{
      isAllSelect:{
          type: Boolean
      },
      isAllClear:{
          type: Boolean
      }
  },
  data(){
      return{
          days:['一','二','三','四','五','六','日'],
          obj:{},
          data:[
            //   {
            //       date:'1', // 5.1
            //       day:'2',  // 周二
            //       year: 2018, // this.obj.year
            //       isActive:'', // 选中样式
            //       disabled: 'vc-date-list-disable', // 非当月禁止点击
            //       group_id: '' // event标记，例如当天是否已经设置班次组，是则group_id不为''
            //   }
          ],
          asData:[] // 全选数组
      }
  },
  watch:{   // 监听是否需要全选当月/全部清除
      'isAllSelect': 'selectAll', 
      'isAllClear': 'clearAll'
  },
  created(){
      let d = new Date()
      this.update(d)
  },
  methods:{
      update(d){
        this.obj = Object.assign({}, this.obj, {
            year: d.getFullYear(),
            month: d.getMonth()+1,
            date: d.getDate(),
            day: d.getDay()
        })
        let firstDay = this.getOneDayInMonth(this.obj.year, this.obj.month, 1)

        if(firstDay === 0) firstDay = 7;

        let totalDays = this.getTotalDaysInMonth(this.obj.year, this.obj.month) - 1;
        console.log(this.obj)

        if(firstDay !== 1){   // 如果当月第一天不在周一，即要向前一个月“借日子”
            // console.log(this.getOneDayInMonth(this.obj.year, this.obj.month, 0))
            // 7 - firstDay 获取要借的天数，再循环getOneDayInMonth()获取总天数，再从最后一天开始push

            let num = this.getTotalDaysInMonth(this.obj.year, this.obj.month - 1)  - firstDay + 1
            console.log(num)
            for(let i = 1; i < firstDay; i++){
                this.data.push({
                    year: this.obj.year,
                    month: this.obj.month,
                    date: num,
                    day: this.getOneDayInMonth(this.obj.year, this.obj.month, num - 1),
                    isActive: '',
                    disabled: 'vc-date-list-disable',
                    group_id: ''
                })
                num++;
            }
            
        }

        for(let i = 0; i < totalDays; i++){
            this.data.push({
                year: this.obj.year,
                month: this.obj.month,
                date: i+1,
                day: this.getOneDayInMonth(this.obj.year, this.obj.month, i+1),
                isActive: '',
                disabled: '',
                group_id: i===4||i===7||i===23||i===28  ? '有' : ''
            })
        }

        let lastDay = this.getOneDayInMonth(this.obj.year, this.obj.month, totalDays)
        console.log(totalDays)
        console.log(lastDay)
        
        for(let i = 0; i < 7 - lastDay; i++){
            this.data.push({
                year: this.obj.year,
                month: this.obj.month,
                date: i+1,
                day: '',
                isActive: '',
                disabled: 'vc-date-list-disable',
                group_id: ''                
            })
        }

        sessionStorage.setItem('date',JSON.stringify(this.obj))
      },
      getTotalDaysInMonth(year, month){
          return new Date(year, month, 0).getDate() + 1;
      },
      getOneDayInMonth(year, month, day){
          return new Date(year, month - 1, day).getDay();
      },
      switchMonth(text){ // 切换月份
          let d;
          this.data = [];
          
          if(text === 'prev') d = new Date(this.obj.year, this.obj.month - 1, 0)
          if(text === 'next') d = new Date(this.obj.year, this.obj.month + 1, 0)

          this.update(d)

          this.$emit('onReset')
          this.$emit('onClick', [])
      },
      showDate(item){
        //   console.log(this.data)

          item.isActive===''
          ? item.isActive = 'vc-date-list-active'
          : item.isActive = ''
          
          console.log(item)
          this.$emit('onClick', item)
      },
      selectAll(){
          this.asData = [] // 每次先清空数组，避免叠加

          if(this.isAllSelect){     // 全选
            this.data.map(v => {    // 遍历当月数组
                if(v.disabled === '' && v.group_id !== '有'){ // 当月且无班次的日期push到asData
                    v.isActive = 'vc-date-list-active'
                    this.asData.push(v)
                }
                return v
            })
            this.$emit('onClick', this.asData)
          }
      },
      clearAll(){
          if(this.isAllClear){ // 全清除: 包含asData清空、调用父组件清空父组件的date_list
            this.data.map(v => {    // 遍历当月数组
                v.isActive = ''
                return v
            })
            this.$emit('onClick', [])
          }
      }
  }
}
</script>
<style>
    @import './calendar.less';
</style>
