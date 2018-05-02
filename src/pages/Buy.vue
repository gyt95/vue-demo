<template>
  <div>
      buy—测试通用组件
          <card-nav
                :item="data"
                @save="saveTitle"
                @edit="editTitle"
                @delete="deleteGroup"
                @cancel="cancel"
          />
           <br><br>
          <card-item
                :data="list"
                :btnName="'删除'"
          />
            <br><br>
          <card-list
                :item="data"
                :data="list"
                :btnName="'添加'"
          />
      
  </div>
</template>
<script>
import cardItem from '../components/cardItem.vue'
import cardNav from '../components/cardNav.vue'
import cardList from '../components/cardList.vue'
export default {
  components:{
      cardItem,
      cardNav,
      cardList
  },
  data(){
      return{
           groupData:[
                {
                    id:1,
                    name:'班组1',
                    isEdit:false, // 是否编辑班组名
                    tmp:'',       // 保存旧班组名
                    lis:[
                        {
                            id:1,
                            name:'乔ABC',
                            phone:'15820245352',
                            staff:''
                        },
                        {
                            id:2,
                            name:'乔DEF',
                            phone:'15820245352',
                            staff:''
                        },
                        {
                            id:3,
                            name:'乔',
                            phone:'15820245352',
                            staff:''
                        },
                    ]
                }
           ],
          data:{
            id:1,
            name:'班组1',
            isEdit:false, // 是否编辑班组名
            tmp:''       // 保存旧班组名   
          },
          list:[
                {
                    id:1,
                    name:'乔ABC',
                    phone:'15820245352',
                    staff:''
                },
                {
                    id:2,
                    name:'乔DEF',
                    phone:'15820245352',
                    staff:''
                },
                {
                    id:3,
                    name:'乔',
                    phone:'15820245352',
                    staff:''
                },
            ]
      }
  },
  methods:{
      deleteGroup(item){
          //
      },
      saveTitle(item){   // 保存新班组名
          if(item.name==='')  item.name = item.tmp;
          item.isEdit = false;
      },
      editTitle(item){   // 编辑班组名
          item.tmp = item.name;
          item.isEdit = true;
      },
      cancel(item){      // 取消改名
          item.name = item.tmp;
          item.isEdit = false;
      }
  }
}
</script>
