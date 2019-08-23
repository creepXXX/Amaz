<template>
    <div class="DeclarantVerify">
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
                    <td class="content-left"><span>*</span>单位名称</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="companyName"  class="input"  :disabled="true" placeholder="单位名称"></el-input>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="content-left"><span>*</span>联系电话</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="phone"  class="input" clearable></el-input>
                            <span>例如：0275-15454545</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="content-left"><span>*</span>手机</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="mobile" class="input" clearable></el-input>
                            <span>手机号码是系统与您联系的重要途径，请正确输入，例如1888888888</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="content-left"><span>*</span>邮箱</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="email" class="input" clearable></el-input>
                            <span>电子邮箱即您的登录账号，请正确输入，建议使用163、126、QQ邮箱</span>
                        </div>
                    </td>
                </tr>
            </table>
            <div class="content-botton">
                <router-link :to="{path:'/AgenciesSuccess',query:{type:type}}">
                    <el-button type="primary" size="medium">提交审核</el-button>
                </router-link>
                <el-button class="btn"  type="primary" plain size="medium">返回首页</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'DeclarantVerify',
        components: {},
        data () {
            return {
                name:'', //姓名
                companyName:'',//单位名称
                phone:'',//单位电话
                mobile:'',//手机
                email:'',//邮箱
                type:2,//用于区分激活显示
                input:'', //输入框
            }
        }
    }
</script>

<style lang="scss" scoped>
    .DeclarantVerify {
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
                    .input {
                        width: 290px;
                        height: 33px;
                        margin-bottom: 6px;
                        line-height: 33px;
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
            margin-top: 20px;
            margin-right: 570px;
            .btn {
                margin-left: 10px;
            }
        }
    }
</style>