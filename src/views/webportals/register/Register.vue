<template>
    <div class="Register">
        <Head></Head>
        <div class="head-nav">
            <div class="head-nav-top"></div>
            <div class="head-nav-bottom">注册向导</div>
        </div>
        <div class="nav-title">
            <p><img src="../../../assets/images/nav-title.png"/>
                <span>{{!registerIndex?' 请验证单位信息：':!DeclarantShow?'请填写个人简要信息：':!AgenciesShow?'为了贵单位顺利开展项目审计工作，请务必保证注册信息的真实性、准确性：':'请根据您的工作职责，选择相应身份进行注册：'}}</span></p>
        </div>
        <div class="register-content" v-if="registerIndex&&DeclarantShow&&AgenciesShow&&ProfessorShow">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label" class="pane-nav"><img src="../../../assets/images/until.png" class="nav-img"/>申报单位</span>
                    <div class="choose-box">
                    <p class="content-title">您当前选择的注册身份是：申报单位</p>
                    <p class="content-title-head">角色对应职能：</p>
                    <p class="content-text">1、注册单位用户名，维护单位信息，创建和管理本单位的项目申报人；</p>
                    <p class="content-text">2、填写相应资助计划的项目申请书；</p>
                    <p class="content-text">3、对本单位所有申报的项目进行管理和审核；</p>
                    <p class="content-text">4、向重庆市商委相关部门提交本单位所申报的项目；</p>
                    <p class="content-text">5、管理本单位所有获得立项或批准的项目。</p>
                    <p class="content-checked"><el-checkbox v-model="checked">我已经仔细阅读并同意本系统的</el-checkbox><span class="checked-text">单位注册协议条例。</span></p>
                        <div class="content-botton">
                            <el-button type="primary" size="medium" @click="nextStep(1)">下一步</el-button><el-button size="medium" type="primary" plain>返回首页</el-button>
                        </div>
                </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" class="pane-nav"><img src="../../../assets/images/people.png" class="nav-img"/>项目申报人</span>
                    <div class="choose-box">
                        <p class="content-title">您当前选择的注册身份是：项目申报人</p>
                        <p class="content-hint">提示：项目申报人注册需先检查单位是否注册。可在下面的方框中通过本单位名称查询单位是否注册</p>
                        <p class="content-input"><span>请输入单位名称(与单位公章一致)：</span><el-input v-model="input" placeholder="请输入内容" class="input" clearable></el-input></p>
                        <p class="content-title-head">角色对应职能：</p>
                        <p class="content-text">1、维护个人信息；</p>
                        <p class="content-text">2、填写相应资助计划的项目申请书；</p>
                        <p class="content-text">3、对本单位所有申报的项目进行管理和审核；</p>
                        <p class="content-text">4、根据项目资助方式约定的规定执行获得立项或批准的项目。；</p>
                        <p class="content-checked"><el-checkbox v-model="checked">我已经仔细阅读并同意本系统的</el-checkbox><span class="checked-text">申报人注册协议条例。</span></p>
                        <div class="content-botton">
                            <el-button type="primary" @click="nextStep(2)" size="medium">下一步</el-button><el-button type="primary" plain size="medium">返回首页</el-button>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" class="pane-nav"><img src="../../../assets/images/institution.png" class="nav-img"/>专业机构</span>
                    <div class="choose-box">
                        <p class="content-title">您当前选择的注册身份是：专业机构</p>
                        <p class="content-title-head">角色对应职能：</p>
                        <p class="content-text">1、注册机构用户名，维护机构信息；</p>
                        <p class="content-text">2、负责为指定的专项资金项目提供专业性的服务及报告。</p>
                        <p class="content-checked"><el-checkbox v-model="checked">我已经仔细阅读并同意本系统的</el-checkbox><span class="checked-text">申报人注册协议条例。</span></p>
                        <div class="content-botton">
                            <el-button type="primary" @click="nextStep(3)" size="medium">下一步</el-button><el-button type="primary" plain size="medium">返回首页</el-button>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label" class="pane-nav"><img src="../../../assets/images/professor.png" class="nav-img"/>评审专家</span>
                    <div class="choose-box">
                        <p class="content-title">您当前选择的注册身份是：评审专家</p>
                        <p class="content-title-head">角色对应职能：</p>
                        <p class="content-text">1、负责维护个人基本信息；</p>
                        <p class="content-text">2、负责为指定的专项资金项目提供专业的评审意见及结论。</p>
                        <p class="content-checked"><el-checkbox v-model="checked">我已经仔细阅读并同意本系统的</el-checkbox><span class="checked-text">单位的注册协议条例。</span></p>
                        <div class="content-botton">
                            <el-button type="primary" @click="nextStep(4)" size="medium">下一步</el-button><el-button type="primary" plain size="medium">返回首页</el-button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <UnitVerify v-if="!registerIndex"></UnitVerify><!--单位验证-->
        <DeclarantVerify v-if="!DeclarantShow"></DeclarantVerify><!--项目申报人验证-->
        <AgenciesVerify v-if="!AgenciesShow"></AgenciesVerify><!--专业机构验证-->
        <ProfessorVerify v-if="!ProfessorShow"></ProfessorVerify>
        <BackTop></BackTop>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Head from '../Head.vue';//公共头部LOGO
    import AgenciesVerify from './registerVerify/AgenciesVerify.vue';//专业机构验证
    import DeclarantVerify from './registerVerify/DeclarantVerify.vue';//申报人验证页面
    import ProfessorVerify from './registerVerify/ProfessorVerify.vue';//申报专家验证页面
    import UnitVerify from './registerVerify/UnitVerify.vue';//单位验证页面
    import BackTop from '../BackTop.vue'
    export default {
        name: 'Register',
        components: {
            Head,
            UnitVerify,
            DeclarantVerify,
            AgenciesVerify,
            ProfessorVerify,
            BackTop
        },
        data () {
            return {
                checked: true, //复选框
                input:'', // 输入
                registerIndex:true, //默认设置注册首页显示
                DeclarantShow:true, //项目申报人验证显示
                AgenciesShow:true, //专业机构验证显示
                ProfessorShow:true, //申报专家验证显示
            }
        },
        methods:{
            nextStep(type){ //单位验证显示关闭
                if(type==1){
                    this.registerIndex = !this.registerIndex;
                }
                if(type==2){
                    this.DeclarantShow = !this.DeclarantShow;
                }
                if(type==3){
                    this.AgenciesShow = !this.AgenciesShow;
                }
                if(type==4){
                    this.ProfessorShow = !this.ProfessorShow;
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .Register {
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

        .register-content {
            width: 90%;
            margin: 0 auto;
            .pane-nav {
                font-weight: 700;
                font-style: normal;
                font-size: 12px;
                color: rgb(51, 102, 153);
                .nav-img {
                    width: 52px;
                    height: 52px;
                    display: block;
                    margin: 5px auto;
                }
            }

            .choose-box {
                width: 90%;
                padding-left: 50px;
                .content-title {
                    text-align: left;
                    font-weight: 400;
                    font-style: normal;
                    color: rgb(204, 0, 0);
                }
                .content-title-head {
                    margin-top: 5px;
                    margin-bottom: 5px;
                    text-align: left;
                    font-weight: 700;
                    font-style: normal;
                    color: rgb(51, 51, 51);
                }
                .content-text {
                    text-align: left;
                    font-style: normal;
                    color: rgb(51, 51, 51);
                }
                .content-checked {
                    text-align: left;
                    margin-top: 5px;
                    .checked-text {
                        position: relative;
                        right: 30px;
                        line-height: 19px;
                        font-size: 14px;
                        color: #3a8ee6;
                        text-decoration:underline
                    }
                }
                .content-hint {
                    text-align: left;
                    margin-top: 5px;
                    font-style: normal;
                    color: rgb(51, 51, 51);
                }
                .content-input {
                    text-align: left;
                    margin-top: 20px;
                    span {
                        font-weight: 700;
                        font-style: normal;
                        color: #0079FE;
                        text-align: right;
                        line-height: 28px;
                    }
                    .input {
                        width: 400px;
                        height: 40px;
                    }
                }
                .content-botton  {
                    text-align: left;
                    margin-top: 10px;
                }
            }

        }
    }
</style>

<style lang="scss">
    .register-content{
        .el-tabs__nav {
            width: 100% !important;
            .el-tabs__item {
                width: 25% !important;
                height: auto !important;
            }
        }
    }


</style>