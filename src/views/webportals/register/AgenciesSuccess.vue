<template>
    <div class="CreditFail-box">
        <Head></Head>
        <div class="head-nav">
            <div class="head-nav-top"></div>
            <div class="head-nav-bottom">注册向导</div>
        </div>
        <div class="nav-title">
            <p><img src="../../../assets/images/nav-title.png"/><span>注册成功</span></p>
        </div>
        <RegisterSuccess :type="type"></RegisterSuccess>
    </div>
</template>

<script>
    import Head from "../Head.vue";
    import RegisterSuccess from './RegisterSuccess.vue';
    export default {
        name: 'CreditFail',
        components: {
            Head,
            RegisterSuccess
        },
        data () {
            return {
                type:0//用于区分激活成功显示
            }
        },
        mounted(){
          this.type =  this.$route.query.type;
        }
    }
</script>
<style lang="scss"  scoped>
    .CreditFail-box {
        width: 1346px;
        margin: 20px 0 0 15px;
        .head-nav {
            height: 35px;
            margin-top: 10px;
            .head-nav-top {
                background-color: rgba(10, 40, 102, 1);
                height: 10px ;
            }

            .head-nav-bottom {
                font-weight: 700;
                line-height: 25px;
                height: 25px;
                font-style: normal;
                color: #336699;
                background-color: rgba(220, 234, 246, 1);
                text-align: left;
                padding-left: 10px;
            }
        }
        .nav-title {
            display: flex;
            margin: 15px auto ;
            width: 90%;
            border-bottom: 2px solid #d2e7f3;
            img {
                position: relative;
                top: 2px;
            }
            span {
                display: inline-block;
                font-weight: 700;
                font-style: normal;
                color: #333333;
                margin-left: 10px;
                position: relative;
                bottom: 5px;
            }
        }
        .CreditFail{
            width:90%;
            margin: 0 auto;
            .people-message {
                .table-head {
                    height: 45px;
                    line-height: 45px;
                    font-size: 14px;
                    text-align: left;
                    font-weight: bold;
                    color: #333333;
                    background-color: rgba(219, 231, 243, 1);
                    padding-left: 10px;
                    border: 1px solid #8fc4e2;
                    border-bottom: none;
                    span {
                        color: #FF3B30;
                        font-weight: normal;
                    }
                }
                .table-content {
                    width: 100%;
                    border-collapse: collapse;
                    border: 1px solid #8fc4e2;
                    tr:nth-of-type(even){
                        background-color: #f9f9f9;
                    }
                    .content-left {
                        text-align: right;
                        width: 200px;
                        height: 50px;
                        font-size: 14px;
                        color: #666666;
                        padding-right: 20px;
                        span {
                            margin: 3px;
                            color: #FF3B30;
                        }
                    }
                    .content-right {
                        .content-box {
                            display: flex;
                            padding-left: 35px;
                            .dateTime,.select-input,.input {
                                width: 290px;
                                height: 33px;
                                line-height: 33px;
                                margin-bottom: 6px;
                            }
                            .address {
                                width: 650px;
                            }
                            span {
                                font-size: 14px;
                                color: #999999;
                                line-height: 34px;
                                margin-left: 15px;
                            }
                        }
                    }
                }
            }
            .content-botton {
                margin: 15px 600px 25px 0;
            }
            }
    }
</style>