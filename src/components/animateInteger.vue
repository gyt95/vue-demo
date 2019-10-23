<template>
  <span>
      {{ tweenValue }}
  </span>
</template>

<script>
export default {
    props:{
        value:{
            type: Number
        }
    },
    data(){
        return{
            tweenValue: 0
        }
    },
    watch:{
        value: function(newValue, oldValue){
            this.tween(oldValue, newValue)
        }
    },
    mounted(){
        this.tween(0, this.value)
    },
    methods:{
        tween(startVal, endVal){
            var vm = this;

            function animate(){
                if(TWEEN.update()){ // 还处于更新状态时，则继续调用函数(?)
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.Tween({ tweenValue: startVal }) // create a tween 创建一个实例
            .to({ tweenValue: endVal }, 500)  // tell the tween we want to animate the tweenValue property over 500 milliseconds 希望从startVal到endVal动画时长为为500ms
            .onUpdate(function(){   // 这个函数在每次tween更新时都会被调用
                vm.tweenValue = this.tweenValue.toFixed(0)
            })
            .start()  // 开始动画

            animate()
        }
    }
}
</script>

<style>

</style>