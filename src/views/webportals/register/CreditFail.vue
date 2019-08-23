<template>
    <div class="CreditFail-box">
        <Head></Head>
        <div class="head-nav">
            <div class="head-nav-top"></div>
            <div class="head-nav-bottom">注册向导</div>
        </div>
        <div class="CreditFail">
            <div class="CreditFail1">
                <p><img src="../../../assets/images/u1508.png"><span>失败提示:</span></p>
            </div>
            <div  class="CreditFail2">
                <p>很抱歉，企业“重庆xxxxx公司”注册失败</p>
                <p>失败原因： 企业“重庆市社会公共信息资源共享平台”的征信评级低</p>
                <div class="btn">
                    <router-link :to="{path:'/Register'}">
                        <el-button type="primary" size="medium">重新注册</el-button>
                    </router-link>
                    <el-button type="primary" plain size="medium">返回首页</el-button>
                </div>
            </div>
        </div>
        <BackTop></BackTop>
    </div>
</template>

<script>
import Head from "../Head.vue"
import BackTop from '../BackTop.vue'
    export default {
        name: 'CreditFail',
        components: {
            Head,
            BackTop
        },
        data () {
            return {

            }
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
        .CreditFail{
            width:100%;
            margin-top: 25px;
            .CreditFail1{
                width: 1217px;
                height: 31px;
                margin: 0 auto;
                font-weight: bold;
                border-bottom: 1.5px solid #d4e8f4;
                p {
                    text-align: left;
                    margin-left: 10px;
                    img{
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }
                    span{
                        color: #CC0000;
                        padding-left:15px;
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
            }

            .CreditFail2{
                width: 1216px;
                height: 200px;
                margin: 10px auto;
                border: 1px solid rgba(143, 196, 226, 1);
                background-color: #f3fbff;

                p:nth-child(1){
                    color: rgb(204, 0, 0);
                    font-size: 18px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }

                p:nth-child(2){
                    font-size: 14px;
                    padding-top: 10px;
                    padding-bottom: 20px;
                }

                p{
                    text-align: left;
                    padding-left: 70px;
                }
                .btn{
                    margin-top: 27px;
                    float: left;
                    margin-left: 70px;
                }

            }
        }

    }
</style>