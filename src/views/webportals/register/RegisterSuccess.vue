<template>
    <div class="RegisterSuccess">
        <div class="content-box">
            <div  class="content">
                <p>
                    {{type==1||btnlog==1?'恭喜您注册单位成功!':type==2?'恭喜您注册成功，账号正在待审中！':'恭喜您注册专家成功，账号正在待审中！'}}
                </p>
                <p><span>{{ type==4?'专家账号':'用户名'}}：</span>21313123312</p>
                <p>提示:</p>
                <p>{{type==1?'请牢记您的账户和密码，尽快登录验证您的单位邮箱，完善您的单位信息。'
                    : type==2?'请牢记您的账户和密码，账号审核通过后，将发送激活邮件到您的邮箱。':type==4?'请牢记您的账户和密码，账号审核通过后，将发送激活邮件到您的邮箱。'
                        :'请牢记您的账户和密码，尽快登录验证您的单位邮箱，完善您的单位信息。'}}</p>
                <el-button type="primary" class="btn" size="medium" v-if="log==1||btnlog==1">去登陆</el-button>
                <el-button type="primary"  class="btn" size="medium" v-else>返回首页</el-button>
            </div>
        </div>
        <BackTop></BackTop>
    </div>
</template>

<script>
    import Head from "../Head.vue"
    import BackTop from '../BackTop.vue'
    export default {
        name: 'RegisterSuccess',
        props:{
            type:Number,
            log:Number,
        },
        components: {
            Head,
            BackTop
        },
        data () {
            return {
                btnlog:0,
            }
        },
        methods:{

        },
        mounted(){
            this.btnlog = this.$route.query.log;
        }
    }
</script>
<style lang="scss"  scoped>
    .RegisterSuccess {
        width: 100%;
        .content-box{
            width:100%;
            margin-top: 25px;
            text-align: left;
            .content-title{
                width: 1217px;
                height: 31px;
                margin: 0 auto;
                font-weight: bold;
                border-bottom: 1.5px solid #d4e8f4;
                p {

                    text-align: left;
                    margin-left: 10px;
                    img{
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }
                    span{
                        padding-left:15px;
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
            }
            .content{
                width: 90%;
                border: 1px solid rgba(143, 196, 226, 1);
                background-color: #f3fbff;
                margin: 10px auto;
                p {
                    padding-left: 40px;
                    padding-bottom: 10px;
                }
                p:first-child {
                    padding-top: 40px;
                    padding-bottom: 40px;
                    color: rgb(204, 0, 0);
                    font-size: 18px;
                }
                p:nth-child(3){
                    font-weight: bold;
                }
                .btn {
                    margin: 10px 0 20px 40px;
                }
            }

        }

    }
</style>