<template>
    <div class="PwdHome-box">
        <Head></Head>
        <div class="head-nav">
            <div class="head-nav-top"></div>
            <div class="head-nav-bottom">密码找回</div>
        </div>
        <div class="PwdHome" v-if="emailShow&&phoneShow">
            <el-row :gutter="20" justify="center"type="flex">
                <el-col :span="6">
                    <div class="icon" @click="switchover(1)">
                        <img src="../../../assets/images/u3938.png" alt="">
                        <p>通过邮箱</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="icon" @click="switchover(2)">
                        <img src="../../../assets/images/u3932.png" alt="">
                        <p>通过手机</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="icon">
                        <img src="../../../assets/images/u3935.png" alt="">
                        <p>通过技术支持</p>
                    </div>
                </el-col>
            </el-row>
            <div class="footer">
                <p>提示：</p>
                <p>1、通过邮箱获取密码时，系统将发送激活邮件到您的验证邮箱，请根据邮件提示重设密码；</p>
                <p>2、通过手机获取密码时，系统将发送验证码信息到您的验证手机，收到验证码之后在页面填写重设密码；</p>
                <p>3、通过技术支持获取密码时，请提供单位证明材料打印并经单位盖章后，将扫描件发送至11111@irissz.com，并提供有效邮箱，待审批通过后可</p>
                <p>以重设您的密码。</p>

            </div>
        </div>
        <ByEmail v-if="!emailShow" v-on:switchover="switchover"></ByEmail>
        <ByPhone v-if="!phoneShow" v-on:switchover="switchover"></ByPhone>
        <BackTop></BackTop>
    </div>
</template>

<script>

    // @ is an alias to /src
    import Head from '../Head.vue';//公共头部LOGO
    import ByEmail from './ByEmail.vue';//邮箱找回
    import ByPhone from './ByPhone.vue';//手机找回
    import BackTop from '../BackTop.vue'
    export default {
        name: 'PwdHome',
        components: {
            Head,
            ByEmail,
            ByPhone,
            BackTop
        },
        data() {
            return {
                emailShow:true, // 点击邮箱显示切换
                phoneShow:true, // 点击手机显示切换
            }
        },
        methods:{
            switchover(type) {  //关闭显示页面
                if(type==1) {
                    this.emailShow = !this.emailShow;
                }
                if(type==2) {
                    this.phoneShow = !this.phoneShow;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .PwdHome-box {
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
        .PwdHome{
            /*width:1260px;*/
            width: 95%;
            height: 410px;
            border: 1px solid rgba(233, 233, 233, 1);
            margin: 15px auto;
            .el-row {
                margin-bottom: 20px;
                margin-top: 45px;
                &:last-child {
                    margin-bottom: 0;
                }
                .el-col{
                    height: 150px;
                    img{
                        width:70px;
                        height: 70px;
                        padding-top: 20px;
                    }
                    p{
                        font-size: 13px;
                        color: #333333;
                        font-weight: 700;
                        padding-top: 8px;
                    }
                }
            }
            .footer{
                height: 180px;
                width: 80%;
                border-top: 1px solid rgba(233, 233, 233, 1);
                margin: 60px auto;
                p{
                    text-align: left;
                    font-size: 14px;
                    color:darkgray;
                    padding-left: 50px;
                    margin-bottom: 5px;
                }
                p:nth-child(1){
                    font-weight: 700;
                    color: black;
                    margin-top: 10px;
                }
            }
        }
    }

</style>