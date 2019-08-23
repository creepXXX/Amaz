<template>
    <div class="CreditFail-box">
        <Head></Head>
        <div class="head-nav">
            <div class="head-nav-top"></div>
            <div class="head-nav-bottom">注册向导</div>
        </div>
        <div class="nav-title">
            <p><img src="../../../assets/images/nav-title.png"/><span>{{RegisterSuccess?'为了贵单位顺利开展项目申报工作，请务必保证注册信息的真实性、准确性：':'注册成功'}}</span></p>
        </div>
        <div class="CreditFail" v-if="RegisterSuccess">
            <el-tabs  style="height: 200px;">
                <el-tab-pane label="基本信息">
                    <div class="people-message">
                        <div class="table-head">单位基本信息</div>
                        <el-form>
                            <table class="table-content" border="1px">
                                <tr>
                                    <td class="content-left"><span>*</span>单位名称</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="companyName" class="input" disabled></el-input>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>统一社会信用代码</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="creditCode" class="input" disabled></el-input>
                                            <span>指单位组织机构代码证上的标识代码</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>注册类型</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-select v-model="unitName" placeholder="企业单位" class="select-input" clearable>
                                                <el-option
                                                        v-for="item in registerType"
                                                        :key="item.value"
                                                        :value="item.label">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>注册资本</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="capital" class="input" clearable></el-input>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>成立年月</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-date-picker
                                                    v-model="dateTime"
                                                    type="date"
                                                    class="dateTime"
                                                    clearable
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                            <span>单位成立的日期，如企业营业执照上注明的注册日期</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>注册地址</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="address" class="input address" clearable></el-input>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>邮政编码</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="postCode" class="input" clearable></el-input>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left"><span>*</span>单位电话</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="telephone" class="input" clearable></el-input>
                                            <span>例如：023-88888888</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left">单位传真</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="fax" class="input" clearable></el-input>
                                            <span>例如：023-88888888</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="content-left">单位网址</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="webAddress" class="input address" clearable></el-input>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </el-form>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="账号信息">
                    <div class="people-message">
                        <div class="table-head">单位管理员信息<span>（管理和审核本单位所有申报项目）</span></div>
                        <el-form>
                            <table class="table-content" border="1px">
                                <tr>
                                    <td class="content-left"><span>*</span>电子邮箱</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="accountEmail" class="input" clearable></el-input>
                                            <span>电子邮箱即您的登录账号，请正确输入，建议使用163、126、QQ邮箱</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="content-left">单位账号</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="LoginPwd" class="input" clearable></el-input>
                                            <span>使用统一社会信用代码的9-17位登录单位账号</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="content-left"><span>*</span>登陆密码</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="affirmPwd" class="input" clearable></el-input>
                                            <span>密码长度为6-20位，可由字母和数字组成，区分大小写</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="content-left"><span>*</span>确认密码</td>
                                    <td class="content-right">
                                        <div class="content-box">
                                            <el-input v-model="affirmPwd" class="input" clearable></el-input>
                                            <span>确认密码必须和登录密码一致</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </el-form>
                    </div>
                </el-tab-pane>
                <div class="content-botton">
                    <el-button type="primary" @click="RegisterSuccess = !RegisterSuccess" size="medium">提交</el-button><el-button type="primary" plain size="medium">返回首页</el-button>
                </div>
            </el-tabs>
        </div>
        <RegisterSuccess v-if="!RegisterSuccess" :type="type" :log="log"></RegisterSuccess>
        <BackTop></BackTop>
    </div>
</template>

<script>
    import Head from "../Head.vue";
    import RegisterSuccess from './RegisterSuccess.vue';
    import BackTop from '../BackTop.vue'
    export default {
        name: 'CreditFail',
        components: {
            Head,
            RegisterSuccess,
            BackTop
        },
        data () {
            return {
                RegisterSuccess:true,//显示注册成功页面
                type:1,//用于区分激活成功显示
                log:1,//按钮
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
                    td {
                        border: 1px solid #8fc4e2;
                    }
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