<template>
    <div class="block-box">
         <ul>
            <h3>管理功能</h3>
            <li><span>项目总览</span></li>
            <li><span>经理总览</span></li>
            <li><span>副经理总览</span></li>
            <li><span>智能报表A</span></li>
            <li><span>智能报表B</span></li>
            <li><span>智能报表C</span></li>
            <li><span>南北院总览</span></li>
            <li><span>南北院下单</span></li>
        </ul>
        <ul>
            <h3>其他功能</h3>
            <li><span>综合下单</span></li>
            <li><span>ektlang</span></li>
            <li><span>公告A</span></li>
            <li><span>公告B</span></li>
            <li><span>公告C</span></li>
            <li><span>宣传与培训</span></li>
        </ul>
        <ul>
            <h3>保洁</h3>
            <li><span>主管发单</span></li>
            <li><span>主管</span></li>
            <li><span>接单</span></li>
            <li><span>弱联网</span></li>
            <li><span>接单设置</span></li>
            <li><span>员工发单</span></li>
        </ul>
        <ul>
            <h3>输送</h3>
            <li><span>主管发单</span></li>
            <li><span>主管</span></li>
            <li><span>接单</span></li>
            <li><span>弱联网</span></li>
            <li><span>接单设置</span></li>
            <li><span>员工发单</span></li>
            <li><span>标本转运</span></li>
            <li><span>扫一扫</span></li>
        </ul>
        <ul>
            <h3>维修</h3>
            <li><span>主管发单</span></li>
            <li><span>主管</span></li>
            <li><span>接单</span></li>
            <li><span>接单设置</span></li>
            <li><span>员工发单</span></li>
        </ul>
        <ul class="last"></ul> <!--避免最后一栏“维修”贴在最右边，加多个ul来间隔开-->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
main::-webkit-scrollbar{
    display: none;
}
.block-box{
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid;
    width: 94%;
    margin: auto;
    margin-bottom: 40px;
    padding: 15px 5px;
}
.block-box::-webkit-scrollbar{
    display: none;
}
.block-box .last{
    border: 1px solid #fff;
    margin: 0;
}
.block-box ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    border: 1px solid;
    margin: 0 10px;
}
.block-box ul h3{
    border-bottom: 1px solid;
    margin: 0;
    padding: 15px;
    width: 100%;
}
.block-box ul li{
    width: 100px;
    border: 1px solid grey;
    position: relative;
    height: 80px;
    border-radius: 5px;
    list-style: none;
    display: inline-block;
    margin: 10px 5px;
}
 span{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        line-height: 5rem;
    }
</style>
