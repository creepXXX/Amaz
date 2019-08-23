<template>
    <div class="head">
        <img src="../../assets/images/logo.png"/>
        <span class="logo-text">重庆市商务委专项资金管理平台</span>
        <div class="head-right">
            <span>常见问题 | </span><span>回到首页</span>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'Head'
    }
</script>

<style lang="scss" scoped>
    .head {
        display: flex;
    img {
        width: 48px;
        height: 40px;
        margin-left: 10px;
    }

    .logo-text {
        font-weight: 700;
        font-style: normal;
        font-size: 32px;
        color: rgb(10, 40, 102);
        margin-left: 20px;
    }

    .head-right {
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #CCCCCC;
        line-height: 12px;
        margin-top: 10px;
        position: relative;
        left: 700px;
    }

    }
</style>