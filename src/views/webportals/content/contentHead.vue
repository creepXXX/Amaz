<template>
    <div class="contentHead">
        <div class="content">
            <img src="../../../assets/images/logo.png" alt="">
            <span>重庆市商务委专项资金管理平台</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ContentDetail',
        components: {
        }
    }
</script>
<!--内容部分公共头部-->
<style lang="scss" scoped>
    .contentHead{
        background-color: white;
        height: 70px;
        width:100%;
        .content{
            display: flex;
            width:1346px;
            margin: 0 auto;
            img{
            width:48px;
            height: 40px;
            vertical-align: middle;
            padding-right: 10px;
            padding-left: 20px;
            padding-top: 15px;

            }
            span{
                display: inline-block;
                font-weight: 700;
                font-style: normal;
                font-size: 32px;
                color: #0A2866;
                line-height: 70px;
            }
        }
    }
</style>










