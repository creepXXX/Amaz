<template>
    <div class="ByEmail">
        <div class="title">
            <p class="title-left">
                <span class="iconfont immigration">&#xe600;</span>
                <span class="iconfont next">&#xe60b;</span>
                <span class="immigration" @click="switchover(1)">找回密码</span>
                <span class="iconfont next">&#xe60b;</span>
                <span>通过邮箱</span>
            </p>
            <p class="title-right">
                <span class="iconfont immigration">&#xe60a;</span>
                <span class="iconfont immigration">&#xe66d;</span>
            </p>
        </div>
        <div class="content">
            <el-row class="content-input">
                <el-form>
                    <div class="content-input">
                        <p><span>*</span>姓名:</p><el-input class="input" v-model="input" placeholder="真实姓名" clearable></el-input>
                    </div>
                    <div class="content-input">
                        <p><span>*</span>电子邮箱:</p><el-input class="input" v-model="input" placeholder="电子邮箱即登录账号" clearable></el-input>
                    </div>
                    <div class="content-input">
                        <p><span>*</span>验证码:</p><el-input class="input" v-model="input" placeholder="验证码" clearable></el-input>
                        <span class="code" @click="sendCode" :class="{'codeColor':codeColor}" >{{codeMsg==''?'发送验证码':codeMsg}}</span>
                    </div>
                    <div class="content-input">
                        <p><span>*</span>新登陆密码:</p><el-input class="input" v-model="input" placeholder="设置6至20位登录密码" clearable></el-input>
                    </div>
                    <div class="content-input">
                        <p><span>*</span>确认密码:</p><el-input class="input" v-model="input" placeholder="确认密码必须和登录密码一致" clearable></el-input>
                    </div>

                </el-form>
                <div class="btn">
                    <el-button type="primary" style="width: 120px;">发送邮件</el-button>
                </div>
            </el-row>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'ByEmail',
        components: {},
        data(){
            return {
                timer:null, // 定时器
                countdown:60, //验证码倒计时初始值
                codeMsg:'', //发送验证提示内容
                count:0, //判读是否为初次点击
                codeColor:false,
                input:''
            }
        },
        methods:{
            switchover(type){ //返回
                this.$emit('switchover',type);
            },
            sendCode(){ // 发送验证码
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        if (this.countdown > 0 && this.countdown <= 60) {
                            this.countdown--;
                            if (this.countdown !== 0) { // 开启倒计时
                                this.codeColor = true;
                                this.codeMsg = this.countdown+'秒后可重新发送';
                                this.count = 1;
                            } else {
                                this.codeColor = !this.codeColor;
                                clearInterval(this.timer);
                                if(this.count>0){
                                    this.codeMsg = "重新发送";
                                }else {
                                    this.codeMsg = "获取验证码";
                                }
                                this.countdown = 60;
                                this.timer = null;
                            }
                        }
                    }, 1000)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ByEmail {
        width: 95%;
        height: 450px;
        border: 1px solid rgba(233, 233, 233, 1);
        padding-bottom: 20px;
        margin: 15px auto;
        .title {
            height: 50px;
            border-bottom: 1px solid rgba(233, 233, 233, 1);
            .title-left {
                display: inline-block;
                float: left;
                padding-left: 20px;
                padding-top: 15px;
                font-size: 12px;
                color: rgb(153, 153, 153);
                .immigration:hover {
                    color: #383838;
                }
                .next {
                    margin: 0 10px;
                }
            }
            .title-right {
                display: inline-block;
                float: right;
                padding-top: 15px;
                padding-right: 20px;
                color: rgb(153, 153, 153);
                span:first-child {
                    margin-right: 15px;
                }
                .immigration:hover {
                    color: #383838;
                }
            }
        }
        .content {
            margin: 70px auto;
            .content-input {
                margin-bottom: 10px;
                position: relative;
                p {
                    width: 120px;
                    text-align: right;
                    margin-right: 20px;
                    display: inline-block;
                    span {
                        color: red;
                        margin: 5px;
                    }
                }
                .input {
                    width: 400px;
                    height: 50px;
                }
                .code {
                    font-size: 12px;
                    position: absolute;
                    top: 12px;
                    right: 380px;
                    color: rgb(0, 121, 254);
                    cursor:pointer;
                }
                .codeColor {
                    color: #cccccc;
                    cursor:default;
                }
            }
            .btn {
                margin-right: 140px;
                margin-top: -5px;
            }
        }
    }
</style>