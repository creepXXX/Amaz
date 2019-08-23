<template>
    <div class="PeopleInformation">
        <div class="PeopleInformation-title">
            <span>重庆xxxxx有限公司</span>
            <span class="btns">
                <el-button type="primary" size="small" plain @click="saveOredit = !saveOredit"  v-if="!saveOredit" class="iconfont">&#xe603; 编辑资料</el-button>
                <el-button type="primary" size="small" plain v-if="saveOredit" @click="saveOredit = !saveOredit" class="iconfont">&#xe6c4; 保存</el-button>
                <el-button type="primary" size="small" plain v-if="saveOredit" @click="saveOredit = !saveOredit" class="iconfont">&#xe60a; 返回</el-button>
            </span>

        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" v-if="switcher">
            <el-tab-pane label="基本信息" name="first">
                <el-form>
                    <table class="table-content" border="1px">
                        <tr>
                            <td class="content-left">姓名</td>
                            <td class="content-right">
                                <div class="content-box">
                                    张三
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>性别</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <div v-if="saveOredit">
                                        <el-radio v-model="radio" label="1">男</el-radio>
                                        <el-radio v-model="radio" label="2">女</el-radio>
                                    </div>
                                    <div v-if="!saveOredit">12321</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">单位名称</td>
                            <td class="content-right">
                                <div class="content-box">
                                    重庆市XX有限公司
                                </div>
                            </td>
                            <td class="content-left">出生日期</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-date-picker
                                            v-if="saveOredit"
                                            class="select-input"
                                            clearable
                                            size="small"
                                            v-model="value1"
                                            type="date"
                                            placeholder="选择日期">
                                    </el-date-picker>
                                    <div v-if="!saveOredit">1231312</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>证件类型</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-select v-model="enterprise" class="select-input" clearable size="small" v-if="saveOredit">
                                        <el-option
                                                v-for="item in enterprise"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                    <div v-if="!saveOredit">1231312</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>证件号码</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="capital" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">1231312</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>电子邮箱</td>
                            <td class="content-right">
                                <div class="content-box">
                                    123456@qq.com
                                </div>
                            </td>
                            <td class="content-left">职称</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="unitlPhone" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">1231312</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>联系电话</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="openBank" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">1231312</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>手机</td>
                            <td class="content-right">
                                <div class="content-box">
                                    1592222222222
                                </div>
                            </td>
                        </tr>
                    </table>
                </el-form>
                <el-button type="primary" class="btn">保存</el-button>

            </el-tab-pane>

            <el-tab-pane label="账户管理" name="second">
                <p class="tag">
                    <span class="iconfont">&#xe724;</span>
                    基本信息
                </p>
                <el-form>
                    <table class="table-content" border="1px">
                        <tr>
                            <td class="content-left content-title">电子邮箱</td>
                            <td class="content-right content-detail">
                                <div class="content-box">
                                    123456@qq.com
                                </div>
                            </td>
                            <td class="content-type"><span @click="switcher=!switcher">更换邮箱</span></td>
                        </tr>
                        <tr>
                            <td class="content-left content-title">手机</td>
                            <td class="content-right content-detail">
                                <div class="content-box">
                                    188888888888
                                </div>
                            </td>
                            <td class="content-type"><span @click="switcher=!switcher">更换手机</span></td>
                        </tr>
                    </table>
                </el-form>
                <p class="tag">
                    <span class="iconfont">&#xe724;</span>
                    安全服务
                </p>
                <el-form>
                    <table class="table-content" border="1px">
                        <tr>
                            <td class="content-left content-title">登录密码</td>
                            <td class="content-right content-detail">
                                <div class="content-box">
                                    <span class="other">建议定期更换密码，且设置一个包含数字和字母，并长度在6-10位的密码。</span>
                                </div>
                            </td>
                            <td class="content-type"><span @click="switcher=!switcher">修改</span></td>
                        </tr>
                    </table>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="switcher" v-if="!switcher">
            <div class="title">
                <p class="title-left">
                    <span class="iconfont immigration">&#xe600;</span>
                    <span class="iconfont next">&#xe60b;</span>
                    <span class="immigration" @click="switcher = !switcher">个人信息维护</span>
                    <span class="iconfont next">&#xe60b;</span>
                    <span>修改密码</span>
                </p>
                <p class="title-right">
                    <span class="iconfont immigration" @click="switcher=!switcher">&#xe60a;</span>
                    <span class="iconfont immigration">&#xe66d;</span>
                </p>
            </div>
            <div class="changePwd">
                <el-form>
                    <div class="content-input">
                        <p><span>*</span>旧登陆密码:</p>
                        <el-input class="input" v-model="input" placeholder="输入旧登录密码" clearable></el-input>
                    </div>
                    <div class="content-input">
                        <p><span>*</span>新登陆密码:</p>
                        <el-input class="input" v-model="input" placeholder="设置6至20位登录密码" clearable></el-input>
                    </div>
                    <div class="content-input">
                        <p><span>*</span>确认密码:</p>
                        <el-input class="input" v-model="input" placeholder="确认密码必须和登录密码一致" clearable></el-input>
                    </div>
                </el-form>
                <el-button type="primary" size="medium" style="margin-bottom: 40px">确认</el-button>
            </div>
        </div>
        <div class="footer">
            <p>主办单位：重庆市商务委员会 │ 联系电话：86-23-62663155    </p>
            <p>联系地址：重庆市南岸区南滨路162号2幢 │ 邮编：400061 │ 传真：86-23-62663156</p>
            <p>渝ICP备 11003380号-4 │ 政府网站标识码：5000000090 │ 内容维护： 重庆市商业信息中心</p>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'PeopleInformation',
        components: {},
        data(){
            return {
                activeName:'first',
                switcher:true,
                saveOredit:false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .PeopleInformation {
        padding: 20px 30px 0;
        background-color: #f0f2f5;
        min-height: 100vh;
        color: #666666;
        position: relative;
        .PeopleInformation-title {
            height: 70px;
            line-height: 70px;
            margin-bottom: 10px;
            text-align: left;
            background-color: #ffffff;
            span {
                margin-left: 30px;
                font-weight: bold;
                font-size: 18px;
                color: #666666;
            }
            .btns {
                float: right;
                margin-right: 30px;
            }
        }
        .btn {
            float: left;
            margin: 15px 0 40px 20px;
        }
        .table-content {
            font-size: 14px;
            width: 97%;
            margin: 0 auto;
            border-collapse: collapse;
            border: 1px solid #e9e9e9;
            td {
                border: 1px solid #e9e9e9;
            }
            tr:nth-of-type(odd){
                background-color: #f9f9f9;
            }
            .content-left {
                text-align: right;
                width: 200px;
                height: 50px;
                font-size: 14px;

                padding-right: 20px;
                span {
                    margin: 3px;
                    color: #FF3B30;
                }
            }
            .content-right {
                .content-box {
                    text-align: left;
                    padding-left: 35px;
                    .dateTime,.select-input,.input {
                        width: 290px;
                        margin-right: 30px;
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
                    .other {
                        font-size: 12px;
                        color: #999999;
                    }
                }
            }
            .content-type {
                color:  #0079FE;;
                font-size: 12px;
                text-align: left;
                padding-left: 30px;
                background-color: #ffffff;
                span {
                    cursor: pointer;
                }
            }
            .content-detail {
                width: 600px;
                background-color: #ffffff;
            }
            .content-title {
                width: 110px;
                background-color: #F5F5F5;
            }
        }
        .tag {
            text-align: left;
            font-size: 14px;
            font-weight: bold;
            height: 38px;
            margin: 10px 0 10px 20px;
        }
        .switcher {
            background-color: #ffffff;
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
                        cursor:pointer;
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
                        cursor:pointer;
                    }
                }
            }
            .changePwd {
                margin-top: 50px;
                .content-input {
                    position: relative;
                    margin-bottom: 10px;
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
            }
        }
        .footer{
            height: 100px;
            font-size: 12px;
            color: #cccccc;
            position: absolute;
            bottom: 10px;
            left: 400px;
            p {
                margin-bottom: 5px;
            }
        }
    }
</style>

<style lang="scss">
    .PeopleInformation {
        .el-tabs {
            background-color: #ffffff;
            padding: 10px 20px;
        }
        .el-tabs__item {
            font-size: 13px;
            font-weight: bold;
        }
    }
</style>
