<template>
    <div class="RegisterActive">
        <Head></Head>
        <div class="head-nav">
            <div class="head-nav-top"></div>
            <div class="head-nav-bottom">个人信息激活</div>
        </div>
        <div class="nav-title">
            <p><img src="../../../assets/images/nav-title.png"/><span>{{RegisterSuccess?'恭喜您已成功注册，登录前需完善信息激活账号。':' 激活成功：'}}</span></p>
        </div>
        <div class="content-box" v-if="RegisterSuccess">
            <div class="table-head">个人简要信息</div>
            <el-form>
                <table class="table-content" border="1px">
                    <tr>
                        <td class="content-left"><span>*</span>姓名</td>
                        <td class="content-right">
                            <div class="content-box">
                                <el-input v-model="name" class="input" clearable></el-input>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="content-left"><span>*</span>登陆账号</td>
                        <td class="content-right">
                            <div class="content-box">
                                <el-input v-model="account" class="input" clearable></el-input>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="content-left"><span>*</span>证件类型</td>
                        <td class="content-right">
                            <div class="content-box">
                                <el-select v-model="idType" class="input" placeholder="请选择证件类型" clearable>
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="content-left"><span>*</span>证件号码</td>
                        <td class="content-right">
                            <div class="content-box">
                                <el-input v-model="idNumber" class="input" clearable></el-input>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="content-left"><span>*</span>登陆密码</td>
                        <td class="content-right">
                            <div class="content-box">
                                <el-input v-model="password" class="input" clearable></el-input>
                                <span>密码长度为6-20位，可由数字和字母组成，区分大小写</span>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="content-left"><span>*</span>确认密码</td>
                        <td class="content-right">
                            <div class="content-box">
                                <el-input v-model="confirmPwd" class="input" clearable></el-input>
                                <span>确认密码必须和登录密码一致</span>
                            </div>
                        </td>
                    </tr>

                </table>
            </el-form>
            <div class="content-botton">
                <el-button type="primary" size="medium" @click="RegisterSuccess=!RegisterSuccess">立即激活</el-button>
            </div>
        </div>
        <RegisterSuccess v-if="!RegisterSuccess" :type="type"></RegisterSuccess>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Head from '../Head.vue';//公共头部LOGO
    import RegisterSuccess from './RegisterSuccess.vue';//激活成功
    export default {
        name: 'RegisterActive',
        components: {
            Head,
            RegisterSuccess
        },
        data () {
            return {
                options: [{ //选择器
                    value: '1',
                    label: '身份证'
                }, {
                    value: '2',
                    label: '护照'
                }],
                idType: '',//选中的身份类型
                name:'',//姓名
                account:'',//账号
                idNumber:'',// 证件号码
                password:'',//登陆密码
                confirmPwd:'',//确认密码
                RegisterSuccess:true,//激活页面显示
                type:1,//用于判断激活显示
            }
        },
        methods:{},
        mounted(){
            this.type = this.$route.query.type;
        }
    }
</script>

<style lang="scss" scoped>
    .RegisterActive {
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
        .content-box {
            width: 90%;
            margin: 0 auto;
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
                        .input {
                            width: 290px;
                            height: 33px;
                            line-height: 33px;
                            margin-bottom: 6px;
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
            .content-botton {
                margin-top: 10px;
                margin-right: 670px;
            }
        }
    }
</style>
