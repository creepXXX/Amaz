<template>
    <div class="newEditor">
        <div class="title">
            <p class="title-left">
                <span class="iconfont immigration" style="cursor: pointer">&#xe600;</span>
                <span class="iconfont next">&#xe60b;</span>
                <span class="immigration" @click="nextStep" style="cursor: pointer">人员管理</span>
                <span class="iconfont next">&#xe60b;</span>
                <span>{{editor==1?"编辑申报人员":"新增人员"}}</span>
            </p>
            <p class="title-right">
                <span class="iconfont immigration"  style="cursor: pointer" @click="nextStep">&#xe60a;</span>
                <span class="iconfont immigration" @click="Refresh()" style="cursor: pointer">&#xe66d;</span>
            </p>
        </div>

        <div class="content">
            <el-form   >
                <el-form-item label="姓名："  labelWidth="180px" style="margin: 45px auto 20px auto;">
                    <el-input  clearable placeholder="真实姓名"  v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="性别：" labelWidth="180px">
                    <el-select style="width:100%" placeholder="选择性别" v-model="sex">
                        <el-option  label="男" value="11"></el-option>
                        <el-option  label="女" value="22"></el-option>
                    </el-select>

                </el-form-item>
                <el-form-item label="出生日期："  labelWidth="180px" v-if="editor==1" >
                    <el-date-picker style="width: 100%;" v-model="birthDate"></el-date-picker>
                </el-form-item>
                <el-form-item label="所属组织："  labelWidth="180px" v-if="editor==2" >
                    <el-select style="width:100%" placeholder="选择所属业务处室" v-model="title">
                        <el-option  label="在职" value="11"></el-option>
                        <el-option label="离职" value="21"></el-option>

                    </el-select>

                </el-form-item>
                <el-form-item :label="editor==1?'电子邮箱：':'电子邮箱（登录账号）：'"  labelWidth="180px">
                    <el-input  clearable placeholder="电子邮箱即登录账号" v-model="email"></el-input>


                </el-form-item>
                <el-form-item label=" 联系电话："  labelWidth="180px" >
                    <el-input  clearable placeholder="输入联系电话" v-model="phoneNumber"></el-input>


                </el-form-item>

                <el-form-item label="手机："  labelWidth="180px">
                    <el-input  clearable placeholder="输入手机" v-model="phone"></el-input>


                </el-form-item>
                <el-form-item label="职称："  labelWidth="180px" v-if="editor==1" >
                    <el-input clearable  v-model="title"></el-input>
                </el-form-item>
                <el-form-item label="登录密码："  labelWidth="180px" v-if="editor==2">
                    <el-input  clearable placeholder="设置6至20位登录密码" v-model="loginPass"></el-input>

                </el-form-item>
                <el-form-item label="确认密码："  labelWidth="180px" v-if="editor==2">
                    <el-input  clearable placeholder="确认密码必须和登录密码一致" v-model="affirm" ></el-input>


                </el-form-item>

                <el-form-item label="状态："  labelWidth="180px" v-if="editor==2">
                    <el-select style="width:100%" placeholder="" v-model="state">
                        <el-option label="在职" value="11" ></el-option>
                        <el-option label="离职" value="22"></el-option>

                    </el-select>


                </el-form-item>
                <el-form-item label="岗位："  labelWidth="180px" v-if="editor==2">
                    <el-select style="width:100%" placeholder="选择岗位" v-model="station">
                        <el-option label="在职" value="11"></el-option>
                        <el-option label="离职" value="22"></el-option>

                    </el-select>

                </el-form-item>
                <el-form-item label="权限角色："  labelWidth="180px" v-if="editor==2">
                    <el-select style="width:100%" placeholder="选择权限角色" v-model="role">
                        <el-option label="在职" value="11"></el-option>
                        <el-option label="离职" value="22"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="lastBtn">
                    <el-button  class="pattern" @click="submitUpload" type="primary">保存</el-button>
                    <el-button class="pattern">取消</el-button>
                </el-form-item>
                <div style="height: 30px;"></div>
            </el-form>
        </div>
    </div>

</template>
<script>
    export default {
        name:'newEditor',
        props:{
            editor:Number
        },
        data(){
            return{
                num:null,
                pageTitle:'',
                name:'张三',
                sex:'女',
                birthDate:'',
                title:'',
                email:this.num==1?'333@.com':'1111',
                phoneNumber:'1324235323',
                phone:'012-324234',
                loginPass:'',
                affirm:'',
                state:'',
                station:'',
                role:'',
            }

        },
        methods:{
            Refresh(){
                this.$router.go(0)
            },
            submitUpload(){
                this.$message({
                    type:"success",
                    message:"保存成功"
                })
            },
            nextStep(){
                this.$emit('nextStep')
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
    .newEditor{
        width: 100%;
        min-height:100vh;
        background-color:#f0f2f5;
        padding-top: 0.1px;
        padding-bottom: 0.1px;
        a{
            text-decoration: none;
            color: #999999;
        }
        .title {
            width:1260px;
            height: 50px;
            margin:0 auto;
            margin-top: 20px;
            background-color: white;
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
        .content{
            width: 1260px;
            background-color: white;
            margin:0 auto;
            margin-bottom: 40px;
            padding-top: 0.1px;
            .lastBtn{
                margin-left: 304px !important;
                .pattern{
                    width: 85px;
                    height: 35px;

                }
            }

        }
    }

</style>
<style lang="scss">
    .newEditor{
        .el-form-item{
            width: 530px;
            margin-left: 300px !important;

        }
    }


</style>




