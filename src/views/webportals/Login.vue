<template>
    <div class="Login">
        <div class="contentHead" v-if="headSwitch">
            <div class="headTop">
                <img src="../../assets/images/logo.png" alt="">
                <span>重庆市商务委专项资金管理平台</span>

            </div>


        </div>
        <div class="big-bg" ref="bigBg">
            <div class="header">
                <div><router-link to="/HomePage"><span class="iconfont"> &#xe600;</span></router-link></div>
                <div>
                    <p>
                        <router-link to="/HomePage"><span class="iconfont">&#xe60a;</span></router-link>
                        <span class="iconfont" @click="Refresh()">&#xe66d;</span>
                    </p>
                </div>
            </div>
            <div class="content">
                <img src="../../assets/images/logo.png"/>
                <span>重庆市商务委</span>
                <span>专项资金管理平台</span>
                <el-input v-model="input" placeholder="请输入账号" class="Registerinput" clearable>
                    <i slot="prefix" class="el-input__icon el-icon-user-solid">
                    </i></el-input>
                <el-input  v-model="passWord" placeholder="请输入密码" class="Registerinput"  clearable type="password">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <el-button type="primary"  style="display: block;margin: 20px auto;width: 320px;">
                    登录
                </el-button>
                <span style="display: block;float: left;padding-left:50px;margin-top:-10px;cursor: pointer">
                    <router-link to="/Register">注册</router-link>
                </span>
                <span style="display: block;float: right;padding-right:50px;margin-top:-10px;cursor: pointer">
                    <router-link to="/PwdHome">忘记密码</router-link>
                </span>
            </div>
            <div class="footer">
                <p>主办单位：重庆市商务委员会 │ 联系电话：86-23-62663155</p>
                <p>联系地址：重庆市南岸区南滨路162号2幢 │ 邮编：400061 │ 传真：86-23-62663156</p>
                <p>渝ICP备 11003380号-4 │ 政府网站标识码：5000000090 │ 内容维护： 重庆市商业信息中心</p>
            </div>





        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Login',
        components: {},
        data(){
            return{
                headSwitch:false,
                input:'',
                passWord:'',
            }
        },
        methods:{
            Refresh(){
                this.$router.go(0);
            },
            optimize() {
                this.$refs.bigBg.style.height=85+"vh";
                this.headSwitch=true;
            }
        },
        mounted() {
            let Brower=null;
            function getBrowserInfo() {//浏览器判断
                var ua = navigator.userAgent.toLocaleLowerCase();
                var browserType = null;
                if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
                     browserType = "IE";
                    var browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
                } else if (ua.match(/firefox/) != null) {
                    browserType = "火狐";
                } else if (ua.match(/chrome/) != null) {
                    var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
                    function _mime(option, value) {
                        var mimeTypes = navigator.mimeTypes;
                        for (var mt in mimeTypes) {
                            if (mimeTypes[mt][option] == value) {
                                return true;
                            }
                        }
                        return false;
                    }
                    if (is360) {
                        browserType = '360';
                    }
                } else if (ua.match(/safari/) != null) {
                    browserType = "Safari";
                }
                Brower=browserType;
            }
            getBrowserInfo();
            if(Brower==='IE'||Brower==='360'){
                this.optimize();
            }
        }
    }
</script>
<style lang="scss" scoped >
    .Login{
        position: relative;
        width: 100%;
        height:100vh;
        overflow: hidden;
        .contentHead{
            background-color: white;
            height: 70px;
            width:100%;
            .headTop{
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
        a{
            text-decoration: none;
        }
        .big-bg{
            width: 100%;
            background-image: url(../../assets/images/registerbg.png);
            height: 820px;
            overflow-x: hidden;
            overflow-y: hidden;
            background-color: rgb(1, 92, 242);
            background-size: 1920px 812px;
            background-repeat: no-repeat;
            background-position:center top;
            .header{
                height: 50px;
                width:100%;
                div:nth-child(1){
                    display: inline-block;
                    float: left;
                    height:50px;
                    line-height:50px;
                    margin-left: 35px;
                    span{
                        font-size: 20px;
                        color: rgba(255, 255, 255, 0.6);
                        &:hover{
                            color: #666;
                        }
                    }
                }
                div:nth-child(2){
                    display: inline-block;
                    float: right;
                    line-height:50px;
                    margin-right: 200px;
                    span:first-child{
                         font-size: 20px;
                         color: rgba(255, 255, 255, 0.6);
                        padding-right: 15px;
                        &:hover{
                            color: #666;
                        }
                    }
                    span:last-child{
                        font-size: 18px;
                        color: rgba(255, 255, 255, 0.6);
                        &:hover{
                            color: #666;
                        }
                    }

                }
            }
        }
        .content{
            width:400px;
            height: 400px;
            background-color: white;
            margin: 40px auto;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
            img{
                width:100px;
                height: 75px;
                padding-top: 15px;
                display: block;
                margin: 0 auto;
            }
            span:first-of-type{
                font-size: 30px;
             }
            span:last-of-type{
                font-size: 20px;
            }
            span{
                display: block;
                margin:0 auto;
                font-weight: 700;
                font-style: normal;
                color: #0079FE;
                line-height: 42px;
            }
            a{
                text-decoration: none;
                font-size: 16px;
                color: #0079FE;
                font-weight: 400;
            }
        }

        .footer{
            margin:0 auto;
            margin-top: 80px;
            /*position: absolute;*/
            bottom:100px;
            width: auto;
            height: 100px;
            text-align: center;
            p{
                text-align: center;
                font-family: 微软雅黑;
                font-weight: 400;
                font-style: normal;
                font-size: 12px;
                color: rgb(204, 204, 204);
                line-height: 24px;
            }
        }
    }

</style>
<style lang="scss">
    .Registerinput{
        width:320px !important;
        height:40px;
        display: block;
        margin:0 auto;
        border-radius: 2px;
        &:hover{
             border-color: #0079FE;
            box-shadow: 0 0 4px #0079FE;
         }
        &:focus{
             border-color:#0079FE;
            box-shadow: 0 0 4px #0079FE !important;
        }
        &:last-of-type{
            margin-top: 16px;
        }
        .el-input__icon{
            font-size: 20px;
        }
    }





</style>