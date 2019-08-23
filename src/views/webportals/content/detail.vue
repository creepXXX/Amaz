<template>
    <div class="ContentDetail">
        <contentHead></contentHead>
        <div class="bars">
            <p class="bars-left">
                <router-link to="/HomePage"><span class="iconfont" style="cursor: pointer">&#xe600;</span></router-link>
                <span class="iconfont next">&#xe60b;</span>
                <router-link :to="{path:'/content/ContentList'}"><span style="cursor: pointer;font-size: 12px">申报通知</span></router-link>
                <span class="iconfont next">&#xe60b;</span>
                <span style="color: rgb(153, 153, 153);">详情页面</span>
            </p>
            <p class="bars-right">
                <span class="iconfont" style="cursor: pointer">&#xe60a;</span>
                <span class="iconfont" style="cursor: pointer" @click="Refresh()">&#xe66d;</span>
            </p>

        </div>
        <div class="content">
            <h3>重庆市商务委员会关于做好我市国家电子商务示范基地综合评价和优秀电子商务园区推荐工作的通知</h3>
            <div class="smallText">
                <span>来源：办公室</span>
                <span>发布时间：2019-04-15 12:00</span>
            </div>
            <div class="line"></div>
            <div class="particulars ">
                <p>各区县（自治县）、两江新区、万盛经开区商务主管部门：</p>
                <p>按照《商务部办公厅关于开展国家电子商务示范基地综合评价工作的通知》
                    （商办电函〔2019〕162号）要求，为积极做好我市国家电子商务
                    示范基地综合评价和优秀电子商务园区推荐工作，现将有关事项通知如下：</p>
                <p>一、积极做好我市国家电子商务示范基地评价前期工作</p>
                <p>按照商务部通知要求，请渝中区、江北区、南岸区商务主管部门积极组织辖区内国家电子商务示范
                    基地（渝中区国家电子商务示范基地、重庆网商产业园、重庆国际电子商务产业园）按照国家《电子
                    商务示范基地综合评价指标体系》相关要求和说明（附件1之附件1），如实填报《国家电子商务示范
                    基地和其他优秀电子商务园区经营服务情况报告表》（附件1之附件3），并提供相关证明材料；按照
                    《国家电子商务示范基地和其他优秀电子商务园区自评报告编制说明》（附件1之附件4），《国家电子
                    商务示范基地综合评价办法》（附件1之附件2）如实编制自评报告。以上材料并于5月24日前通过商务
                    部业务系统统一平台中的“电子商务信息管理分析应用”进行报送（http://mofcom.gov.cn/mofcom/typt.shtml
                    进入统一平台后，国家电子商务示范基地从企业端使用原用户名、密码登陆）。区县商务主管部门并对
                    辖区内国家电子商务示范基地的填报材料真实性进行审核，并向市商务委书面递交基地自评报告纸质材
                    料一式两份，加盖基地和区县商务主管部门公章，于5月24日下班前报送至市商务委（电子商务处），同时电子版发至邮箱。
                </p>
                <p style="text-align:right;padding-right:130px;">重庆市商务委员会</p>
                <p style="text-align:right;padding-right: 130px ">  2019年5月14日</p>
                <div>
                    <p class="accessory">附件：1．<span>商务部办公厅关于开展国家电子商务示范基地综合评价工作的通知.pdf</span></p>
                    <p> 2．<span>市级电子商务示范园区名单</span></p>
                </div>

            </div>
        </div>
        <div class="footer">
            <p>主办单位：重庆市商务委员会 │ 联系电话：86-23-62663155</p>
            <p>联系地址：重庆市南岸区南滨路162号2幢 │ 邮编：400061 │ 传真：86-23-62663156</p>
            <p>渝ICP备 11003380号-4 │ 政府网站标识码：5000000090 │ 内容维护： 重庆市商业信息中心</p>
        </div>
        <BackTop></BackTop>
    </div>
</template>

<script>
    // @ is an alias to /src
    import contentHead from './contentHead.vue';
    import BackTop from '../BackTop.vue'
    export default {
        name: 'ContentDetail',
        components: {
            contentHead,
            BackTop
        },
        data(){
            return{

            }

        },
        methods:{
            Refresh(){
                this.$router.go(0);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ContentDetail{
        background-color: #f2f2f2;
        min-height:100vh;
        .bars {
            margin-top: 10px;
            height: 50px;
            background-color: white;
            .bars-left {
                display: inline-block;
                float: left;
                padding-left: 120px;
                padding-top: 15px;
                font-size: 12px;

                a{
                    color: rgb(153, 153, 153);
                    text-decoration: none;
                    span:nth-child(1){
                        font-size: 18px;

                    }

                }
                span:first-child,
                span:nth-child(2),
                span:nth-child(4)
                {
                    font-size: 18px;
                    color: rgb(153, 153, 153);
                }
                span:nth-child(3),
                span:nth-child(5){
                    padding-top: -10px;
                }

                .next {
                    margin: 0 10px;
                }
            }
            .bars-right {
                display: inline-block;
                float: right;
                padding-top: 15px;
                padding-right: 150px;
                color: rgb(153, 153, 153);
                span:first-child {
                    margin-right: 15px;
                }

            }
        }
        .content{
            width: 1266px;
            margin:10px auto ;
            background-color: white;
            h3{
                color: #666666;
                padding-top: 20px;
                padding-left: 27px;
                text-align: left;

            }
            .smallText{
                margin-top: 10px;
                text-align:left;


                span{
                    font-weight: 400;
                    font-style: normal;
                    font-size: 12px;
                    color: #999999;
                    text-align: left;
                    line-height: 28px;
                    padding-left: 27px;
                }
            }
            .line{
                width:1201px;
                margin: 13px auto;
                margin-bottom: 0;
                height:1.5px;
                background-color: #ececec;
            }

            .particulars{
                width:1210px;
                margin: 0 auto ;
                padding-top: 20px;
                div {
                    p:not(.accessory) {
                        padding-left: 42px;
                    }
                    p:last-child {
                        padding-bottom: 30px;
                    }
                }
                p{
                    font-size: 14px;
                    color: #666666;
                    text-align: left;
                    padding-bottom: 16px;
                    span {
                        text-decoration: underline;
                        cursor: pointer;
                        color: #3a8ee6;
                    }
                    &:nth-child(4){
                        line-height: 20px;
                    }
                }
            }


        }
        .footer{

            margin:0 auto;
            margin-top: 60px;
            bottom:100px;
            width: auto;
            height: 100px;
            text-align: center;
            p{
                text-align: center;
                font-family: 微软雅黑;
                font-weight: 400;
                font-style: normal;
                font-size: 12px;
                color: rgb(204, 204, 204);
                line-height: 24px;
            }

        }
    }




</style>
