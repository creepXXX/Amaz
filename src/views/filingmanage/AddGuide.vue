<template>
    <div class="AddGuide" ref="AddGuide">
        <div class="header">
            <h3 style="color:#666666">
                节能技术改造补贴项目申报指南
            </h3>
            <div>
                <span>业务处：市场处</span>
                <span style="padding-left: 25px">业务处联系人：李小红</span>
                <span style="padding-left: 25px">更新时间：2019-04-15 12:00</span>
            </div>
            <div>
                <el-button type="medium" plain><span class=""></span>保存指南</el-button>
                <el-button type="medium" plain><span class=""></span>发布指南</el-button>
                <el-button type="medium" plain @click="dialogVisible=true"><span class=""></span>关闭指南</el-button>
            </div>


        </div>
        <!--关闭指南-->
        <el-dialog
                title="确认提示"
                align="left"
                :modal="false"
                top="25vh"
                :visible.sync="dialogVisible"
                width="30%">
            <span  style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">关闭申报指南同时是否保存填写内容？</span>
            <p style="padding-left: 65px;font-size: 14px;color: #999999">直接关闭则不保存输入内容</p >
            <span slot="footer" class="dialog-footer">
                <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                <el-button @click="dialogVisible = false" size="small">直接关闭</el-button>
                <el-button type="primary" @click="dialogVisible = false" size="small">同时保存</el-button>
             </span>
        </el-dialog>
        <div class="content">
            <el-tabs v-model="activeName" >
                <el-tab-pane label="申报指南" labelWidth="300" name="guide" >
                    <table border="1" width="1200px" class="tableClass" cellspacing="0" >
                        <tr >
                            <td>支持方向</td>
                            <td>
                                <el-select v-model="input" clearable>
                                    <el-option value="12" label="11"></el-option>
                                    <el-option value="233" label="233"></el-option>
                                </el-select>
                            </td>
                            <td>申报指南</td>
                            <td>
                                <el-input v-model="input" clearable></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>资金类别</td>
                            <td>
                                <el-select v-model="input" clearable>
                                    <el-option value="12" label="11"></el-option>
                                    <el-option value="233" label="233"></el-option>
                                </el-select>
                            </td>
                            <td>资金级别</td>
                            <td>
                                <el-select v-model="input" clearable>
                                    <el-option value="12" label="11"></el-option>
                                    <el-option value="233" label="233"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td>是否在门户网站显示</td>
                            <td>
                                <el-radio-group v-model="input">
                                    <el-radio label="是"></el-radio>
                                    <el-radio label="否"></el-radio>
                                </el-radio-group>
                            </td>
                            <td>申报时间</td>
                            <td>
                                <div class="block">
                                    <el-date-picker
                                            v-model="input"
                                            type="datetimerange"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            clearable>
                                    </el-date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>业务年度</td>
                            <td>
                                <div class="block">
                                    <el-date-picker
                                            v-model="input"
                                            type="year"
                                            placeholder="选择年"
                                            clearable>
                                    </el-date-picker>
                                </div>
                            </td>
                            <td>业务处室</td>
                            <td>
                                <el-select v-model="input" clearable>
                                    <el-option label="11" value="11"></el-option>
                                    <el-option label="22" value="22"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td>业务处室联系人</td>
                            <td>
                                <el-select v-model="input" clearable>
                                    <el-option label="11" value="11"></el-option>
                                    <el-option label="22" value="22"></el-option>
                                </el-select>
                            </td>
                            <td>联系电话</td>
                            <td>
                                <el-input v-model="input" clearable></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td>申报指南pdf文件</td>
                            <td colspan="3" style="position: relative;">
                                <el-input v-model="input" ></el-input>
                                <el-upload
                                        class="upload-demo"
                                        ref="upload"
                                        action=""
                                        :auto-upload="false"
                                        :before-upload="beforeAvatarUpload"
                                        accept=".pdf,.docx,.doc"
                                        :limit="1"
                                >
                                    <el-button slot="trigger" size="small" type="info" plain icon="el-icon-upload">
                                        选取文件
                                    </el-button>
                                    <span  class=" textSpan" >支持格式：.doc .docx .pdf ，单个文件不能超过20MB</span>
                                </el-upload>
                            </td>
                        </tr>
                    </table>
                </el-tab-pane>
                <el-tab-pane label="绩效指标" name="target" @click="windowHeight()">
                    <div style="margin-top:13px;height: 40px;">
                        <div style="display: inline;float: left;padding-left: 30px;">
                            <span class="el-icon-s-promotion"></span>
                            <span style="color:#666666;font-size: 14px;font-weight: bold"> 项目预期绩效指标</span>
                        </div>
                        <div style="display: inline;float: right;padding-right: 30px">
                            <el-button size="medium"><span class="el-icon-plus">添加行</span></el-button>
                            <el-button size="medium"> <span class="el-icon-minus">减少行</span></el-button>
                        </div>
                    </div>
                    <div  class="target">
                        <el-table
                                ref="multipleTable"
                                :data="targetData"
                                style="width: 100%"
                                border>
                            <el-table-column
                                    type="selection"
                                    width="58"
                                    align="center">
                            </el-table-column>
                            <el-table-column
                                    label="日期"
                                    width="381"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-select v-model="input" size="medium" clearable>
                                        <el-option label="11" value="11"></el-option>
                                        <el-option label="111" value="111"></el-option>
                                    </el-select>
                                </template>

                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="姓名"
                                    width="380 "
                                    align="center">
                                <template slot-scope="scope">
                                    <el-input v-model="input" size="medium" clearable></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="地址"
                                    width="380"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-input v-model="input" style="width: 186px !important;" size="medium" clearable></el-input>
                                    <el-select v-model="input" style="width: 106px !important;" size="medium" clearable>
                                        <el-option value="11" label="11" ></el-option>
                                        <el-option value="22" label="22"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="附件管理" name="management">
                    <div class="manage">
                        <p><span class="el-icon-s-promotion"> 注意事项</span></p>
                        <p>1）上传模板时，每条记录以一个文件形式上传，如果有多个文件则请先合并为一个文件后再上传；</p>
                        <p>2）每个附件材料的复印件或原件，以彩色扫描或拍照的形式，确保足够清晰、可辨，否则将影响申报单位对模板的识别。</p>
                        <el-button icon="el-icon-upload" type="info" plain size="small" style="width: 80px;position: absolute;left: 1150px;top: 42px;">上传</el-button>
                    </div>
                    <div class="manageTable">
                        <el-table
                                border
                                stripe
                                :data="manageData">
                            <el-table-column
                                    label="序号"
                                    align="center"
                                    prop="number"
                                    width="74px"></el-table-column>
                            <el-table-column
                                    label="附件文件"
                                    align="center"
                                    width="473">
                                <template slot-scope="scope">
                                    <span style="color: #0079fe;text-align: left;padding-left: 10px;text-decoration: underline;display: block">{{scope.row.file}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="是否必备材料"
                                    align="center"
                                    prop="materials"
                                    width="160px">

                            </el-table-column>
                            <el-table-column
                                    label="上传时间"
                                    align="center"
                                    prop="uploadTime"
                                    width="260px">

                            </el-table-column>
                            <el-table-column
                                    label="操作"
                                    align="center"
                                    width="232">
                                <template slot-scope="scope">
                                    <span style="color: #3394fe;padding: 0 3px;cursor: pointer;font-size: 12px" @click="dialogDelete=true">
                                        <i class="el-icon-delete-solid" ></i>删除
                                    </span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-dialog
                                title="确认提示"
                                align="left"
                                :modal="false"
                                top="25vh"
                                :visible.sync="dialogDelete"
                                width="30%">
                            <span  style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
                            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">关闭申报指南同时是否保存填写内容？</span>
                            <p style="padding-left: 65px;font-size: 14px;color: #999999">直接关闭则不保存输入内容</p >
                            <span slot="footer" class="dialog-footer">
                                <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                                <el-button @click="dialogDelete = false" size="small">取消</el-button>
                                <el-button type="primary" @click="dialogDelete = false" size="small">确认</el-button>
                             </span>
                        </el-dialog>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    export default {
        name: 'AddGuide',
        components: {ElButton},
        data(){
            return{

                dialogVisible:false,//关闭指南对话框
                dialogDelete:false,//删除对话框
                activeName:'guide',//标签页默认选中
                input:'',
                targetData:[
                    {},{},
                    {},{},

                ],
                manageData:[
                    {
                        number:'1',
                        file:'上年度的纳税证明',
                        materials:'否',
                        uploadTime:'2019-09-02 11:11:11',
                    },
                    {
                        number:'2',
                        file:'对外贸易经营者备案登记表',
                        materials:'否',
                        uploadTime:'2019-09-02 11:11:11',
                    },
                    {
                        number:'3',
                        file:'互联网经营许可证及行业资质等相关证明材料',
                        materials:'是',
                        uploadTime:'2019-09-02 11:11:11',
                    },


                ]
            }

        },
        methods:{
//            windowHeight(){
//                this.$refs.AddGuide.style.height=900+"px";
//            },
            //pdf文件上传
            beforeAvatarUpload(file) {
                let testmsg=file.name.substring(file.name.lastIndexOf('.')+1);
                const extension = testmsg === 'doc';
                const extension2 = testmsg === 'docx';
                const extension3 = testmsg === 'pdf';

                const isLt2M = file.size / 1024 / 1024 < 20;
                if(!extension && !extension2 && !extension3) {
                    this.$message({
                        message: '上传文件只能是 doc、docx、pdf格式!',
                        type: 'warning'
                    });
                }
                if(!isLt2M) {
                    this.$message({
                        message: '上传文件大小不能超过 20MB!',
                        type: 'warning'
                    });
                }
                return extension || extension2 && isLt2M
            }
        }
    }
</script>
<style lang="scss" scoped>
    .AddGuide{
        background: #f0f2f5;
        padding-top: 10px;
        padding-bottom: 60px;
        min-height: 89.9vh;
        overflow: hidden;
        .header{
            height:170px;
            width: 1260px;
            background-color: white;
            margin:0 auto;
            margin-top: 15px;
            margin-bottom: 10px;
            padding-top: 30px;
            h3{
                text-align: left;
                padding-left: 27px;
            }
            div:nth-child(2){
                text-align: left;
                padding-left: 27px;
                padding-top: 20px;
            }
            div:nth-child(3){
                text-align: left;
                padding-left: 27px;
                padding-top: 25px;
            }
            span{
                color: #999999;
                font-size: 12px;
            }
        }
        .content{
            width:1260px;
            margin:0 auto;
            padding-bottom: 50px;
            background: white;
            .tableClass{
                margin:0 auto;
                margin-top: 10px;
                /*margin-bottom: 100px;*/
                /*height:300px;*/
                border:none;
                border-bottom: 1px solid #e9e9e9;
                border-right: 1px solid #e9e9e9;
                color: #666666;
                font-size: 14px;
                tr{
                    height:50px;
                }
                td{
                    border:none;
                    border-left: 1px solid #e9e9e9;
                    border-top: 1px solid #e9e9e9;
                }
                tr td:nth-child(1),
                tr td:nth-child(3){
                    width: 200px;
                    text-align: right;
                    padding-right: 25px;
                }
                tr td:nth-child(2),
                tr td:nth-child(4){
                    width: 400px;
                    border-color: #EBEEF5;

                }
            }
            .target{
                width: 1200px;
                margin: 0 auto;
                margin-top: 6px;

            }
            .manage{
                position: relative;
                p{
                    text-align: left;
                    font-size: 12px;
                    color: #666666;
                    padding-left:30px ;
                    line-height: 22px;
                    &:nth-child(1){
                        margin-top: 15px;
                        span{
                            font-size: 14px;
                            font-weight: bold !important;
                        }
                    }
                    &:nth-child(2){
                        margin-top: 10px;
                    }
                }

            }
            .manageTable{
                width:1200px;
                margin:0 auto;
                margin-top: 10px;
            }
        }
    }



</style>
<style lang="scss">
    .AddGuide{
        .el-button [class*=el-icon-]+span{
            margin-left: 0;
        }
        .el-tabs__item {
            width: 120px;
            height: 55px;
            line-height: 55px;
            font-weight: bold;
            color: #666666;
        }
        .el-tabs__active-bar{
            height:3px;

        }

        .tableClass{

            .el-input__inner{
                width:300px;
                height:35px;
            }
            .el-input {
                width:auto;
            }
            tr:last-of-type{
                .el-input__inner{
                    position: absolute;
                    left:-450px;
                    top:-14px;
                }
                .el-button--info.is-plain{
                    position: absolute;
                    left:400px;
                    top:8px;
                }
                i{
                    font-size: 16px;
                }
                .textSpan{
                    position: absolute;
                    left:520px;
                    top:15px;
                    font-size: 14px;
                    color:#999999;
                }
            }
            .el-date-editor--datetimerange.el-input__inner{
                width:300px;
            }
            .el-date-editor.el-input{
                width:300px;
                margin:0 auto;
            }
            .el-upload-list{
                position: absolute;
                left:40px;
                top:5px;
                width:308px;
                height:40px;
            }
            .el-upload-list__item{
                width:300px;
                margin-left: 5px;
            }
            .el-upload-list__item:hover{
                background-color: transparent !important;
            }
        }
        .target{
            tbody{
                tr td:last-of-type {
                    .el-input{
                        .el-input__inner{
                            width:186px;
                        }
                    }
                    .el-select {
                        padding-left: 15px;

                        .el-input__inner{
                            width: 106px;
                        }
                    }
                }
                tr td:nth-child(3) .el-input{
                    width:300px;
                }
                tr td:nth-child(4) .el-input{
                    width:106px;
                }
            }
            .el-input__inner{
                width:300px;
            }
        }
    }

</style>