<template>
    <div class="AgenciesVerify">
        <el-tabs  style="height: 200px;">
            <el-tab-pane label="基本信息">
                <div class="people-message">
                    <div class="table-head">基本信息</div>
                    <el-form>
                        <table class="table-content" border="1px">
                            <tr>
                                <td class="content-left"><span>*</span>单位名称</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="companyName" class="input" clearable></el-input>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="content-left"><span>*</span>统一社会信用代码</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="creditCode" class="input" clearable></el-input>
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
                                <td class="content-left"><span>*</span>单位传真</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="fax" class="input" clearable></el-input>
                                        <span>例如：023-88888888</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="content-left"><span>*</span>单位网址</td>
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
                    <div class="table-head">账号信息<span>（负责为指定的专项资金项目提供专业性的服务及报告）</span></div>
                    <el-form>
                        <table class="table-content" border="1px">
                            <tr>
                                <td class="content-left"><span>*</span>姓名</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="accountName" class="input" clearable></el-input>
                                    </div>
                                </td>
                            </tr>

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
                                <td class="content-left"><span>*</span>联系电话</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="accountMobile" class="input" clearable></el-input>
                                        <span>例如：0275-15454545</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="content-left"><span>*</span>手机</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="accountMobile" class="input" clearable></el-input>
                                        <span>手机号码是系统与您联系的重要途径，请正确输入，例如18888888888</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="content-left">登录账号</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="accountLogin" class="input" disabled placeholder="12331212"></el-input>
                                        <span>手机号码是系统与您联系的重要途径，请正确输入，例如1888888888</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="content-left"><span>*</span>登录密码</td>
                                <td class="content-right">
                                    <div class="content-box">
                                        <el-input v-model="LoginPwd" class="input" clearable></el-input>
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
                <router-link :to="{path:'/AgenciesSuccess',query:{log:1}}">
                    <el-button type="primary" size="medium">提交</el-button>
                </router-link>
                <el-button  class="btn" type="primary" plain size="medium">返回首页</el-button>
            </div>
        </el-tabs>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'AgenciesVerify',
        components: {},
        data(){
            return {
                /*基本信息*/
                companyName:'',//单位名称
                creditCode:'',//信用代码
                dateTime:'',//公司成立年月
                capital:'',//注册资本
                address:'',//注册地址
                postCode:'',//邮编号
                telephone:'',//单位电话
                fax:'',//传真
                webAddress:'',//单位网址
                unitName:'',//被选中单位名
                /*账号信息*/
                accountName:'',//账号-姓名
                accountEmail:'',//账号-邮箱
                accountMobile:'',//账号-联系电话
                accountLogin:'',//登录账号
                LoginPwd:'',//登录密码
                affirmPwd:'',//确认密码
                input:'',
                registerType:[{
                    value: '1',
                    label: '黄金糕'
                }, {
                    value: '2',
                    label: '双皮奶'
                }, {
                    value: '3',
                    label: '蚵仔煎'
                }]//注册类型
            }
        }
    }
</script>

<style lang="scss" scoped>
    .AgenciesVerify {
        width: 90%;
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
            .btn {
                margin-left: 10px;
            }
        }
    }
</style>

<style lang="scss">
    .AgenciesVerify {
        .el-tabs__item {
            font-weight: bold;
        }
    }
</style>