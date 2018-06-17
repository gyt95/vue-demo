<template>
    <div>
        <p v-for="item in data" :key="item.id">
            {{item.isActive}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data: [],
            obj: {}
        }
    },
    created(){
        this.data = [
            {
                id: 1,
                name: 'apple',
                list: [
                    {
                        id: 1001,
                        mood: 'good!'
                    },
                    {
                        id: 1002,
                        mood: 'a little bad'
                    }
                ]
            },
            {
                id: 2,
                name: 'banana',
                 list: [
                    {
                        id: 1001,
                        mood: 'good!'
                    },
                    {
                        id: 1002,
                        mood: 'a little bad'
                    }
                ]
            }
        ]
        // 此时data初始化完成，但还没挂载到dom上，所以可以使用最普通的xx.isActive来添加属性
        // this.data.forEach(v => {
        //     v.isActive = 'normal'  
        // });
        // console.log(this.data)

        // this.$set为原生js为对象添加新属性的方法，所以无论created还是mounted中都能实现
        // this.data.forEach(v => {
        //     this.$set(v, 'isActive', 'normal')  
        // });
        // console.log(this.data)
    },
    mounted(){
        // 此时指令和数据已经编译成模板，并挂载到dom上，所以这种写法无法实现
        // 只能默认每个对象v都有isActive这个属性，但这就变成了修改属性，而不是新增属性了
        // this.data.forEach(v => {
        //     v.isActive = 'normal'  
        // });
        // console.log(this.data)

        // this.$set可以实现
        this.data.forEach(v => {
            this.$set(v, 'isActive', 'normal')  
        });
        console.log(this.data)
    }

    /**
     * PS：其他测试条件
     * 
     *     1.假如data中已有某个属性的话，mounted中的xx.isActive就能实现，意思一样，变成了修改操作了
     *      
     *     2.尝试给每个对象新增list子数组，并使用上面4种新增属性的办法为每个list数组的子对象添加新属性
     *       得出结论是，新增对象属性与对象的层级深浅无关！
     */
}
</script>

<style>

</style>
