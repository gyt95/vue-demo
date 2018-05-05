<template>
  <div>
      Parent
      <button @click="change()">全选</button>
      <button @click="clear()">全清除</button>
      <button @click="modify()">修改name</button>
      <Child 
        :isFlag="flag"
        :arrData="arr"
        :objData="obj"
        @onClick="modify2"
      />
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    Child
  },
  data() {
    return {
      flag: false,
      arr: [
        {
          id: 1,
          name: 'aaa',
          lis:[
              {
                id:1,
                birth:1995,
              },
              {
                id:2,
                birth:1990,
              }
          ]
        },
        {
          id: 2,
          name: 'bbb',
          lis:[
              {
                id:1,
                birth:2001,
              },
              {
                id:2,
                birth:2005,
              }
          ]
        }
      ],
      obj:{
          id:1,
          name:'ken',
          age:18
      }
    };
  },
  mounted() {
    this.run();
  },
  methods: {
      modify2(item){
          item.city = '上海'
      },
    modify() {
        this.arr.map(v => {
            v.lis.map(v2 => {
                if(v2.id === 2){
                    v2 = Object.assign(v2, {
                        isCorrect:true
                    })
                }else{
                    v2 = Object.assign(v2, {
                        isCorrect:false
                    })
                }
            })
        })
    // vue若直接对已有数组的每个对象增加新属性，子组件的视图是不能及时更新的
      this.arr[0].name = 'kkk';
      this.arr.map((v,i) => {
        // v = Object.assign({}, v, {status:'ok'})不行   

        //   v = Object.assign(v, {
        //       status:'ok'
        //   })
        if(v.id===1) this.$set(v, 'status', 'good!')
      })

    // 不可行例子
    this.arr.map(v => {
        return v.city = 'gz'
    })

    // 而vue是允许当父组件直接对一个对象动态增加新属性时，子组件能及时更新视图的
    //   this.obj.staff = 'police'
    //   this.obj.name = 'ggggg'


    /**  结论：为啥我之前项目中又不行呢？？？ */
    },
    change() {
      this.flag = true;
    },
    clear() {
      this.flag = false;
    },
    run() {
      console.log("每次更新我都被调用?");
    }
  }
};
</script>
