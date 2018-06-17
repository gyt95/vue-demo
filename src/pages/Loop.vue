<template>
    <div>
        <!-- 测试forEach遍历的性能问题。结论：数据越多越庞大，非嵌套遍历的优势越明显 -->
        <button @click="useNesting">嵌套forEach遍历</button>
        <button @click="useOther">非嵌套遍历</button>
    </div>
</template>

<script>
import Mock from 'mockjs'
export default {
    data(){
        return{
            allData: [],
            targetData: []
        }
    },
    created(){
        this.allData = Mock.mock({
            "data|10000": [
                {
                    "id|+1": 101,
                    "title": "标题!!!!"
                }
            ]
        })
        this.targetData = Mock.mock({
            "data|300": [
                {
                    "id|+1": Math.floor(Math.random()*300), // 取整必须用Math.floor()
                    "title": "标题!!!!"
                }
            ]
        })
        // console.log(this.targetData)
    },
    methods:{
        useNesting(){
            let flag = 0
            
            let st = new Date().getTime()
            console.log(st)
            this.allData.data.forEach(v => {
                flag++
                this.targetData.data.forEach(v2 => {
                    if(v2.id == v.id){}
                    flag++
                })
            });
            let et = new Date().getTime()
            console.log(et)
            console.log(flag+'次') 
            console.log('..............')
            // 嵌套的话，总共遍历了15000次，耗时约6ms
        },
        useOther(){
            let flag = 0,
                obj = {};
            
            let st = new Date().getTime()
            console.log(st)
            this.targetData.data.forEach(v2 => {
                obj[v2.id] = true
                flag++
            })
            // console.log(obj)

            this.allData.data.forEach(v => {
                if(obj[v.id] == true){}
                flag++
            });
            let et = new Date().getTime()
            console.log(et)
            console.log(flag+'次')   
            console.log('..............')
            // 不嵌套的话，总共只遍历了3004次。耗时约4ms
        }
    }
}
</script>

<style>

</style>
