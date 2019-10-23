<template>
  <div>
    <h3>常见的搜索框过渡动画</h3>
    <div class="input-box">
      <input type="text" placeholder="请填写内容" :class="[classname]" @focus="focusClass" @blur="blurClass">
    </div>

    <h3>仿iOS13分段控件切换动画(原理和普通下划线过渡一样)</h3>
    <div class="tab-box">
      <span class="tab-bar" :style="{'transform': 'translateX(' + offsetLeft + 'px)'}"></span>
      <span @click="changeTab(1)">当月</span>
      <span @click="changeTab(2)">本周</span>
      <span @click="changeTab(3)">今天</span>
    </div>

    <div class="total-view-box">
        <div class="list" v-for="item in dataList" :key="item.id">
          <span><animate-integer :value="item.value" :isFloat="item.id == 3 ? true : false"></animate-integer> {{item.unit}}</span>
          <span>{{item.title}}</span>
        </div>
    </div>

    <div class="ctn">
      <transition name="el-zoom-in-center">
        <div class="box" v-show="show">el-zoom-in-center</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div class="box" v-show="show">el-zoom-in-top</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div class="box" v-show="show">el-zoom-in-bottom</div>
      </transition>
    </div>
    <el-button type="primary" class="normal-btn" @click="zoom()">缩放</el-button>

    <!-- 淡入淡出 -->
    <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">
            <div class="box" v-show="show">.el-fade-in-linear</div>
        </div>
    </transition>
    <transition name="el-fade-in">
        <div v-show="show" class="transition-box">
            <div class="box" v-show="show">.el-fade-in</div>
        </div>
    </transition>

    <!-- 展开折叠 -->
    <br><br><br>
    <el-button @click="show3 = !show3">Click Me</el-button>
    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box-3">el-collapse-transition</div>
          <div class="transition-box-3">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>

    <el-button @click="show4 = !show4">Click Modal</el-button>
    <transition name="mask-fade">
      <div class="mask" v-show="show4" @click="show4 = !show4"></div>
      </transition>
      <transition name="dialog-fade">
      <div class="modal" v-show="show4">
        <div class="content">
          <span>写点什么内容吧</span>
        </div>
      </div>
    </transition>

    <transition name="mask-fade">
      <div class="mask" v-show="show4" @click="show4 = !show4"></div>
      </transition>
      <transition name="dialog-fade-right">
      <div class="modal" v-show="show4">
        <div class="content">
          <span>写点什么内容吧</span>
        </div>
      </div>
    </transition>
  </div>
</template>
 <script>
 import animateInteger from '../components/animateInteger'
 export default {
  name: "HelloWorld",
  data() {
    return {
      show:true,
      show3:true,
      show4:false,
      classname:'',
      curr: '1',
      offsetLeft:'8',
      dataList: [
        { id: 1, title: '总数量', value: 0, unit: '' },
        { id: 2, title: '总重量', value: 0, unit: 'kg' },
        { id: 3, title: '总袋数', value: 0.0, unit: '袋' }
      ]
    };
  },
  created(){
    this.initData()
  },
  components:{
    animateInteger
  },
  methods: {
   zoom(){
      this.show = !this.show;
   },
   blurClass(){
     this.classname = 'input-leave'
   },
   focusClass(){
     this.classname = 'input-focus'
   },
   changeTab(num){
     switch(num){ // 这个距离应该是递进的
       case 1: this.offsetLeft = '8'; break;
       case 2: this.offsetLeft = '128'; break;
       case 3: this.offsetLeft = '248'; break;
     }
   },
   initData(){
     this.dataList.forEach(v => {
       switch(v.id){
         case 1: v.value = 408; break;
         case 2: v.value = 30; break;
         case 3: v.value = 2019.7; break;
       }
     })
   }
  },
};
</script>
 <style lang="less" scoped>
h3{
  text-align: left;
}
.input-box{
  // background: #fff;
  width: 110px;
  margin-bottom: 30px;
  input{
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    display: inline-block;
    background: #ccc;
    color: #fff;
    border-radius: 10px;
    padding: 5px;
    outline: 0;
    border: 1px solid #ccc;
  }
  .input-leave{
    width: 150px;
    background: #ccc;
    transition: .5s ease;
  }
  .input-focus{
    width: 300px;
    background: #fff;
    transition: .5s ease;
  }
}
.tab-box{
  background: #ccc;
  position: relative;
  width: 360px;
  height: 40px;
  line-height: 40px;
  // padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  span{
    color: #333;
    // padding: 5px 10px;
    width: 100%;
    z-index: 1; // 使文字层级高于白背景tab
  }
  .tab-bar{
    position: absolute;
    background: #fff;
    border-radius: 10px;
    padding: 5px 10px;
    box-shadow: 0 2px 5px #ccc;
    width: 70px;
    height: 18px;
    left: 8px;
    top: 5px;
    transition: .5s ease;
  }
}
.total-view-box{
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border: 5px solid #000;
  margin: 20px;
  font-size: 18px;
  .list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

 .transition-box-3 {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
 .ctn{
   width: 1000px;
   height: 300px;
 }
.box {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: greenyellow;
  text-align: center;
  line-height: 200px;
  color: #fff;
  margin: 0 20px 20px 0;
}


.mask{
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 margin: auto;
 opacity: 0.5;
 background: #333;
}
.modal{
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 margin: auto;
 width: 400px;
 height: 300px;
 background: #fff;
 z-index: 10;
}
/* 遮罩层过渡动画 */
.mask-fade-enter-active{
  animation: mask .3s;
}
.mask-fade-leave-active{
  animation: mask-out .3s;
}
@keyframes mask{
  0%{
    opacity: 0;
  }
  100%{
    /* opacity: .5; */
  }
}
@keyframes mask-out{
  0%{
    /* opacity: .5; */
  }
  100%{
    opacity: 0;
  }
}

/* dialog过渡动画1 ——— 正上方淡入淡出 */
.dialog-fade-enter-active {
  animation: dialog-fade-in .8s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .8s;
}
/** 规定元素在三维空间中的位移，参数分别为x y z */
/** 如果不使用perspective属性，将看不到z轴演示效果，因为3D场景就不会有景深的Z轴 */
/** 应该做一个z轴的动画，例如一个画板从上而下掉下来，然后前后动了两下，停住 这里知识点应该围绕的是perspective和translate3d() */
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -120px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -120px, 0);
    opacity: 0;
  }
}
/* dialog过渡动画2 ——— 右上角淡入淡出 */
.dialog-fade-right-enter-active {
  animation: dialog-fade-right-in .8s;
}

.dialog-fade-right-leave-active {
  animation: dialog-fade-right-out .8s;
}

@keyframes dialog-fade-right-in {
  0% {
    transform: translate3d(-110px, -120px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-right-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-110px, -120px, 0);
    opacity: 0;
  }
}
</style>