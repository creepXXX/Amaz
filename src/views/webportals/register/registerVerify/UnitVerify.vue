<template>
    <div class="UnitVerify">
        <el-form>
            <div class="title-text">统一社会信用代码共18位，由登记管理部门代码、机构类别代码、登记管理机关行政区划码、主体标识码（组织机构代码）、校验码五个部分组成。全国范围内唯一的、终身不变的法定标识、若填写错误，将会影响您单位的项目申报工作</div>
            <p class="content-input content-top">
                <span class="label-head">*</span>
                <span class="label-text">单位名称</span>
                <el-input v-model="companyName" class="input" clearable></el-input>
            </p>
            <p class="content-input">
                <span class="label-head">*</span>
                <span class="label-text">统一社会信用代码</span>
                <el-input v-model="creditCode"  class="input" clearable></el-input>
            </p>
            <p class="content-hint">提示：</p>
            <p class="content-text">1、如单位已注册，无需重复注册，请使用单位管理员账号登录</p>
            <p class="content-text">2、如单位名称变更，无需重复注册，请登录系统后通过单位名称变更功能完成；</p>
            <p class="content-text">3、输入单位名称后点击下一步，如单位已注册，则显示单位注册及联系信息；如单位尚未注册，则会显示注册信息页面。</p>
            <div class="content-botton">
                <el-button type="primary" @click="nextStep(1)" size="medium">下一步</el-button>
                <el-button type="primary" plain size="medium">返回首页</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'UnitVerify',
        components: {},
        data () {
            return {
                companyName:'',
                creditCode:''// 信用代码
            }
        },
        methods:{
            nextStep(type){
                if(type==1){ //type为1表示征信通过
                    this.$router.push({
                        path:'/CreditPass'
                    })
                }else {
                    this.$router.push({
                        path:'/CreditFail'
                    })
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .UnitVerify {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #8fc4e2;
        background-color: rgba(243, 251, 255, 1);
        .title-text {
            margin-top: 20px;
            margin-left: 30px;
            font-weight: 400;
            font-size: 14px;
            text-align: left;
            width: 850px;
            color: #d43637;
        }
        .content-input {
            text-align: left;
            margin-left: 30px;
            margin-top: 10px;
            .label-head {
                color: red;
            }
            .label-text {
                margin:5px;
                font-size: 14px;
                color: #666666;
            }
            .input {
                width: 400px;
                height: 40px;
            }
        }
        .content-top {
            margin-left: 86px;
            margin-bottom: 20px;
        }
        .content-hint {
            margin-top: 20px;
            margin-left: 30px;
            text-align: left;
            font-weight: 700;
            color: rgb(51, 51, 51);
        }
        .content-text {
            margin-left: 30px;
            text-align: left;
            font-size: 14px;
            color: rgb(51, 51, 51);
        }
        .content-botton {
            margin: 30px;
            text-align: left;
        }
    }
</style>