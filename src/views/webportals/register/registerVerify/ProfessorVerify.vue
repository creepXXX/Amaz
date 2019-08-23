<template>
    <div class="ProfessorVerify">
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
                    <td class="content-left">单位名称</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="companyName" class="input" clearable></el-input>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="content-left"><span>*</span>办公电话</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="phone" class="input" clearable></el-input>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="content-left"><span>*</span>手机号码</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="mobile" class="input" clearable></el-input>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="content-left"><span>*</span>电子邮箱</td>
                    <td class="content-right">
                        <div class="content-box">
                            <el-input v-model="email" class="input" clearable></el-input>
                            <span>电子邮箱即您的登录账号，请正确输入，建议使用163、126、QQ邮箱</span>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="content-left"><span>*</span>业务处室</td>
                    <td class="content-right">
                        <el-select v-model="value" placeholder="请选择"  clearable style="float: left;margin-left: 35px;width: 290px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </td>
                </tr>

                <tr>
                    <td class="content-left">行业（领域）</td>
                    <td class="content-right">
                        <el-select v-model="value" placeholder="请选择" clearable style="float: left;margin-left: 35px;width: 290px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </td>
                </tr>

                <tr>
                    <td class="content-left">专业</td>
                    <td class="content-right">
                        <el-select v-model="value" placeholder="请选择" clearable style="float: left;margin-left: 35px;width: 290px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </td>
                </tr>

                <tr>
                    <td class="content-left">二级专业</td>
                    <td class="content-right">
                        <el-select v-model="value" placeholder="请选择"  clearable style="float: left;margin-left: 35px;width: 290px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </td>
                </tr>

            </table>
        </el-form>
        <div class="content-botton">
            <router-link :to="{path:'/AgenciesSuccess',query:{type:4}}">
                <el-button type="primary">提交审核</el-button>
            </router-link>
            <el-button class="btn" type="primary" plain>返回首页</el-button>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'ProfessorVerify',
        components: {},
        data () {
            return {
                economy: false ,// 复选框-外经处
                finance:false,//复选框-财务处
                other:false, // 复选框-其他暂定
                name:'', //姓名
                companyName:'',//单位名称
                phone:'',//联系电话
                mobile:'',//手机
                email:'',//邮箱
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ProfessorVerify {
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
            margin-top: 25px;
            margin-right: 570px;
            .btn {
                margin-left: 10px;
            }
        }
    }
</style>