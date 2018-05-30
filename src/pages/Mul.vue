<template>
    <div class="block-box">
         <ul>
            <li><span>123445</span></li>
            <li><span>AAA</span></li>
            <li><span>BBB</span></li>
            <li><span>CCC</span></li>
            <li><span>DDD</span></li>
        </ul>
        <ul>
            <li><span>去问问热热热我</span></li>
            <li><span>AAA</span></li>
            <li><span>BBB</span></li>
        </ul>
        <ul>
            <li><span>1。。。。。</span></li>
            <li><span>AAA</span></li>
            <li><span>BBB</span></li>
            <li><span>BBB</span></li>
            <li><span>BBB</span></li>
            <li><span>BBB</span></li>
        </ul>
        <ul>
            <li><span>1！！！</span></li>
            <li><span>AAA</span></li>
            <li><span>日文人</span></li>
            <li><span>法大师傅如u热佛评价</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.block-box{
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    padding-bottom: 40px;
}
.block-box ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 2px 0 52px 0; */
    padding: 0;
    margin: 0;
}

.block-box ul li{
    width: 100px;
    border: 1px solid grey;
    position: relative;
    height: 100px;
    border-radius: 5px;
    list-style: none;
    display: inline-block;
}
 span{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        line-height: 2rem;
    }
</style>
