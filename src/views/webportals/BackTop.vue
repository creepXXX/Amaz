<template>
    <div class="BackTop">
        <div class="BigDiv">
            <div class="smallDiv">
                <img src="../../assets/images/phone.png" alt="">
            </div>
            <div class="phoneNumber">
                <div ></div>
                <div class="particulars">
                    <P><img src="../../assets/images/report.png" alt=""></P>
                    <P style="color: red;font-size: 14px">023-62661737</P>
                    <P style="font-size: 14px">纪检举报电话</P>
                    <P><img src="../../assets/images/Hotline.png" alt=""></P>
                    <P style="color: red;font-size: 14px">023-12312</P>
                    <P style="font-size: 14px">商务投诉热线</P>
                </div>
            </div>
        </div>
        <div class="BigDiv">
            <div class="smallDiv">
                <img src="../../assets/images/QR.png" alt="">
            </div>
            <div class="QR">
                <div ></div>
                <div class="particulars2">
                    <P style="font-size: 14px;padding-top: 4px">扫描二维码关注我们</P>
                    <P><img src="../../assets/images/Tencent.png" alt=""></P>


                </div>
            </div>
        </div>
        <div class="BigDiv" @click="BackTop()">
            <div class="smallDiv">
                <img src="../../assets/images/arrowTop.png" alt="" width="30px">
            </div>

        </div>

    </div>


</template>
<script>
    export default {
        methods:{
            BackTop(){
                (function smoothscroll(){
                    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                    if (currentScroll > 0) {
                        window.requestAnimationFrame(smoothscroll);
                        window.scrollTo (0,currentScroll - (currentScroll/12));
                    }
                })();
            }

        }
    }
</script>
<style lang="scss" scoped>
    .BackTop{
        width:100px;
        height:188px;
        position: fixed;
        right:10px;
        bottom:30px;
        .BigDiv{
            position: absolute;
            right: 0;
            top:0;
            height:60px;
            width:60px;
            box-sizing: border-box;
            float: right;
            background-color: white;
            &:nth-child(1){
                top:2px;
                &:hover .phoneNumber{
                    display: block;
                    animation:ttt 0.2s  forwards;
                }
                .phoneNumber{
                    position: relative;
                    display: none;
                    left:-180px;
                    top:5px;


                }
                @keyframes ttt {
                    0%{
                        opacity:0;
                    }
                    33%{ /*这里表示3s的66%也就是大约2秒的时候*/
                        opacity:0;
                    }
                    100%{
                        opacity:1;
                    }
                }
                .phoneNumber div:nth-child(1){
                    position: absolute;
                    height:175px;
                    width:175px;
                    background-image: url("../../assets/images/hovercase1.png") ;
                    background-repeat: no-repeat;
                    transform:rotate(-90deg) ;
                    background-size:182px 174px;
                }
                .particulars{
                    top:7px;
                    left:8px;
                    height:175px;
                    width:150px;
                    position: absolute;
                    z-index: 99;
                    p{
                        line-height: 21px;
                    }
                }
            }
            &:nth-child(2){
                top: 64px;
                &:hover .QR{
                    display: block;
                    animation:ttt 0.2s  forwards;

                }
                .QR{
                    position: relative;
                    display: none;
                    left:-180px;
                    top:-59px;

                }

                .QR div:nth-child(1){
                    position: absolute;
                    height:175px;
                    width:175px;
                    background-image: url("../../assets/images/hovercase2.png") ;
                    background-repeat: no-repeat;
                    transform:rotate(-90deg) ;
                    background-size:182px 174px;

                }
                .particulars2{
                    top:5px;
                    left:7.5px;
                    height:175px;
                    width:150px;
                    position: absolute;
                    z-index: 99;
                    p{
                        line-height: 22px;
                        color: #999999;
                    }
                }
            }
            &:nth-child(3){
                top: 126px;
            }

            .smallDiv{
                position: absolute;
                top:0;
                left:0;
                bottom:0;
                right:0;
                margin:auto;
                height:30px;
                width:30px;

            }
            &:last-child{
                 cursor: pointer;
             }
        }

        .QR{
            
        }
    }


</style>



