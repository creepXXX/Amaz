<template>
    <div class="ApplicationManage">
        <div class="header" v-if="editor" >
            <el-form :model="formData" ref="formData" inline>
                <el-row :gutter="10" style="display:flex;padding-top: 30px;padding-left: 20px">
                    <el-form-item prop="projectName">
                        <el-col  style="width: 180px;">
                            <el-input class="headInput"  type="primary" placeholder="搜索项目名称 " clearable v-model="formData.projectName"style="width: 100%;"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="fundingLevel">
                        <el-col  style="width: 180px;">
                            <el-select  placeholder="资金类别" clearable v-model="formData.fundingLevel"style="width: 100%;" >
                                <el-option value="11">11</el-option>
                                <el-option value="22">22</el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="submitTime">
                        <el-col  style="width: 180px;">
                            <el-date-picker clearable style="width: 100%;" placeholder="提交时间" v-model="formData.submitTime"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="plan">
                        <el-col  style="width: 180px;">
                            <el-select  placeholder="工作进度" v-model="formData.plan" style="width: 100%;" clearable>
                                <el-option value="11">11</el-option>
                                <el-option value="22">22</el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-col  style="width: 200px;">
                            <el-button type="primary" icon="el-icon-search">查询</el-button>
                            <el-button icon="el-icon-refresh-right" @click="resetForm('formData')">重置</el-button>
                        </el-col>
                    </el-form-item>
                </el-row>


            </el-form>
        </div>
        <div class="content" v-if="editor">
            <div style="margin: 23px 0;">
                <el-button size="small" style="margin-left: -1120px" plain
                           @click="submit()">
                    <img src="../../assets/images/Management.png" alt="" style="height: 16px;width: 16px;vertical-align: middle;display: inline-block;margin-top: -3px;padding-top: -5%">
                    批量提交
                </el-button>
            </div>
            <el-table
                    stripe
                    border
                    :data="tableData"
                    @selection-change="handleSelectionChange"
                    style="width:1221px;margin:0 auto"
                    ref="multipleTable">
                <el-table-column
                        type="selection"
                        width="49"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="项目名称"
                        width="183"
                        align="center" >
                    <template slot-scope="scope">
                        <span style="color: #0079fe;cursor: pointer" @click="editors(1)">{{scope.row.projectName}}</span>
                    </template>

                </el-table-column>
                <el-table-column label="资金级别"
                                 width="111"
                                 align="center"
                                 prop="fundingLevel">
                </el-table-column>
                <el-table-column label="年度"
                                 width="69"
                                 align="center"
                                 prop="year">
                </el-table-column>
                <el-table-column label="申报指南"
                                 width="156"
                                 align="center"
                                 prop="fingerPost">
                </el-table-column>
                <el-table-column label="业务处室"
                                 width="101"
                                 align="center">
                    <template slot-scope="scope">
                        <span style="color: #0079fe;cursor: pointer" @click="dialogOffice=true">{{scope.row.office}}</span>
                        <el-dialog
                                title="业务处室联系信息"
                                :visible.sync="dialogOffice"
                                class="DialogOffice"
                                width="560px"
                                top="26vh"
                                :modal="false">
                            <div style="height: 150px;width: 483px;color: #666666;border: 1px solid rgb(228, 228, 228);margin:0 auto;">
                                <div style="width:483px;height:50px;">
                                    <div class="officeDiv1">
                                        <span style="line-height: 50px;">业务处室：</span>
                                    </div>
                                    <div class="officeDiv2">
                                        <span style="line-height:50px">{{scope.row.office}}</span>
                                    </div>
                                </div>
                                <div style="width:483px;height:50px;text-align: right">
                                    <div class="officeDiv1">
                                        <span style="line-height: 50px;">联系人：</span>
                                    </div>
                                    <div class="officeDiv2">
                                        <span style="line-height: 50px;">{{}}</span>
                                    </div>
                                </div>
                                <div style="width:483px;height:50px;text-align: right">
                                    <div class="officeDiv1">
                                        <span style="line-height: 50px;">联系电话：</span>
                                    </div>
                                    <div class="officeDiv2">
                                        <span style="line-height: 50px;">{{}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-dialog>
                    </template>
                </el-table-column>
                <el-table-column label="提交时间"
                                 width="142"
                                 align="center"
                                 prop="submitTime">
                </el-table-column>
                <el-table-column label="工作进度"
                                 width="114"
                                 align="center"
                                 prop="plan">
                </el-table-column>
                <el-table-column label="PDF文件"
                                 width="80"
                                 align="center"
                                 prop="PDFFile">
                    <img src="../../assets/images/downloadPDF.png" alt="" style="height:24px;width:20px">
                </el-table-column>
                <el-table-column label="审核意见"
                                 width="92"
                                 align="center">
                    <template slot-scope="scope">
                        <span @click="dialogExamine = true" style="color: #0079fe;cursor: pointer;">{{scope.row.opinion}}</span>
                    </template>
                </el-table-column>


                <el-table-column label="操作"
                                 width="123"
                                 align="center">
                    <template slot-scope="scope">
                       <span style="color: #0079fe;padding: 0 4px;cursor: pointer" @click="editors(0)"><img src="../../assets/images/compile.png">编辑</span>
                        <span style="color: #0079fe;padding: 0 4px;cursor: pointer" @click="dialogVisible=true"> <i class="el-icon-delete-solid" ></i>删除</span>
                        <el-dialog
                                title="确认提示"
                                align="left"
                                :modal="false"
                                :visible.sync="dialogVisible"
                                width="30%">
                            <span  style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px" class="iconfont">&#xe8c8;</span>
                            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">是否确定删除对应的发布内容</span>
                            <p style="padding-left: 65px;font-size: 14px;color: #999999">删除后无法恢复是否删除？</p >
                            <span slot="footer" class="dialog-footer">
                            <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
                             </span>
                        </el-dialog>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px;margin-bottom: 50px;position:relative; ">
                <el-button style="margin-left: -940px" @click="toggleSelection1(tableData)" >全选</el-button>
                <el-button @click="toggleSelection2(tableData)">反选</el-button>
                <el-dropdown style="margin-left: 10px">
                    <el-button type="primary">
                        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="stickRecord()">置顶记录</el-dropdown-item>
                        <el-dropdown-item @click.native="deleteRecord() ">删除记录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-pagination
                        class="pagination"
                        align="right"
                        background
                        :page-sizes="[10, 20, 30, 40,50]"
                        :page-size="10"
                        layout=" prev, pager, next,sizes"
                        :total="500">
                </el-pagination>
            </div>
        </div>
        <AddEditor v-if="!editor" @addEditor="editors" :judge="judge"></AddEditor>
        <el-dialog
                class="DialogOpinion"
                title="审核意见"
                :visible.sync="dialogExamine"
                width="30%"
                :modal="false">
            <div class="block">
                <el-timeline style="margin-top: 16px">
                    <div  class="bigdiv">
                        <div v-for="(item,index) in activities" :key="index">
                            <el-timeline-item color="#0079fe" style="height: 20px;margin-top: -12px">
                                <div style="position: relative;height: 60px;">
                                    <img src="../../assets/images/date.png" style="width: 94px;height: 75px;position: absolute;left: -13px;top:-28px;">
                                    <span style="position: absolute;left:26px;color: white;font-size: 12px;">{{item.dates.slice(5,10)}}</span>
                                </div>
                            </el-timeline-item>
                            <el-timeline-item
                                    v-for="(itemList,indexs) in item.list"
                                    :key="indexs"
                                    :color="itemList.color">

                                <div class="smalldiv" >
                                    <p>
                                      <span>
                                            {{itemList.name}}&nbsp&nbsp&nbsp
                                            <span
                                              :class="{'bcolor':itemList.audit.search('通过')!=-1,'rcolor':itemList.audit.search('不同意')!=-1||itemList.audit.search('修改')!=-1}">{{itemList.audit}}
                                            </span>
                                        </span>
                                        <span style="color: #999999;font-size: 12px;float: right;margin-right: 20px">
                                          <img src="../../assets/images/clock.png" width="14px" style="vertical-align: -8%"/>
                                            {{itemList.timestamp}}
                                      </span>
                                    </p>
                                    <p style="color: #999999;">{{itemList.content}}</p>
                                    <p style="font-size:12px">来自部门: <span style="color: #999999;">{{itemList.department}}</span></p>

                                </div>

                            </el-timeline-item>
                        </div>
                    </div>
                    <div style="background-color:white;height: 52px;border: 1px solid rgba(228, 228, 228,1);"></div>
                </el-timeline>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import AddEditor from './AddEditor.vue'

    export default {
        name:'ApplicationManage',
        components:{
            AddEditor
        },
        data(){
            return{
                dialogExamine:false,
                dialogVisible:false,
                dialogOffice:false,
                editor:true,
                judge:0, // 0为编辑/新增
                dateTitle:'2018-04-03',
                //表单
                formData:{
                    projectName:'',//搜索项目名称
                    fundingLevel:'',//资金级别
                    submitTime:'',//提交时间
                    plan:'',//工作进度

                },
                //表格
                tableData:[
                    {
                        projectName:'再生资源回收分拣中心项目',//项目名称
                        fundingLevel:'中央',//资金级别
                        year:'2010',//年度
                        fingerPost:'再生资源回收分拣中心',//申报指南
                        office:'市场处',//业务处室
                        qwe:"42343",
                        submitTime:'',//提交时间
                        plan:'申请书填写中',//工作进度
                        PDFFile:'',//PDF文件
                        opinion:'查看',//审核意见
                        operation:'',//操作
                    },
                    {
                        projectName:'再生资源回收分拣中心项目',
                        fundingLevel:'中央',
                        year:'2011',
                        fingerPost:'再生资源回收分拣中心',
                        office:'市场处',
                        submitTime:'',
                        plan:'申请书填写中',
                        PDFFile:'',
                        opinion:'',
                        operation:'',
                    },{
                        projectName:'再生资源回收分拣中心项目',
                        fundingLevel:'中央',
                        year:'2012',
                        fingerPost:'再生资源回收分拣中心',
                        office:'市场处',
                        submitTime:'',
                        plan:'申请书填写中',
                        PDFFile:'',
                        opinion:'',
                        operation:'',
                    },{
                        projectName:'再生资源回收分拣中心项目',
                        fundingLevel:'中央',
                        year:'2013',
                        fingerPost:'再生资源回收分拣中心',
                        office:'市场处',
                        submitTime:'',
                        plan:'申请书填写中',
                        PDFFile:'',
                        opinion:'',
                        operation:'',
                    },{
                        projectName:'再生资源回收分拣中心项目',
                        fundingLevel:'中央',
                        year:'2014',
                        fingerPost:'再生资源回收分拣中心',
                        office:'市场处',
                        submitTime:'',
                        plan:'申请书填写中',
                        PDFFile:'',
                        opinion:'',
                        operation:'',
                    },{
                        projectName:'再生资源回收分拣中心项目',
                        fundingLevel:'中央',
                        year:'2015',
                        fingerPost:'再生资源回收分拣中心',
                        office:'市场处',
                        submitTime:'',
                        plan:'申请书填写中',
                        PDFFile:'',
                        opinion:'',
                        operation:'',
                    },
                ],
                activities: [{dates:'2018-04-03',list:[{
                    content: '支持使用图标',
                    timestamp: '2018-04-3 20:46',
                    size: 'large',
                    color:'#0079fe',
                    department:' 万州区商务部',
                    name:'张三',
                    audit:'区主管部门审核(审核通过)'
                },{
                    content: '支持使用图标',
                    timestamp: '2018-04-3 20:47',
                    size: 'large',
                    color:'#0079fe',
                    department:' 万州区商务部',
                    name:'张三',
                    audit:'区主管部门审核(退回修改)'
                }
                ]},
                    {dates:'2018-04-04',list:[{
                        content: '支持使用图标',
                        timestamp: '2018-04-4 20:46',
                        size: 'large',
                        color:'#0079fe',
                        department:' 万州区商务部',
                        name:'张三',
                        audit:'区主管部门审核(不同意申报)'
                    },{
                        content: '支持使用图标',
                        timestamp: '2018-04-4 20:47',
                        size: 'large',
                        color:'#0079fe',
                        department:' 万州区商务部',
                        name:'张三',
                        audit:'区主管部门审核(审核通过)'
                    },{
                        content: '支持使用图标',
                        timestamp: '2018-04-4 20:48',
                        size: 'large',
                        color:'#0079fe',
                        department:' 万州区商务部',
                        name:'张三',
                        audit:'区主管部门审核(审核通过)'
                    },{
                        content: '支持使用图标',
                        timestamp: '2018-04-4 20:49',
                        size: 'large',
                        color:'#0079fe',
                        department:' 万州区商务部',
                        name:'张三',
                        audit:'区主管部门审核(审核通过)'
                    }
                    ]}
                ]

            }
        },
        methods:{
            editors(type){ // 新增/编辑显示控制
                if(type==1){
                    this.editor = !this.editor;
                    this.judge = 1;
                }else {
                    this.editor = !this.editor;
                    this.judge = 0;
                }

            },
            submit(){//提交上传
                if(this.multipleSelection===undefined){
                    this.$message({
                        showClose:true,
                        message:'请至少选择一个项目进行提交',
                        type:'error',
                    })
                }else if(this.multipleSelection.length>0){
                    this.$message({
                        showClose:true,
                        message:'提交成功',
                        type:'success'
                    })
                }else{
                    this.$message({
                        showClose:true,
                        message:'请至少选择一个项目进行提交',
                        type:'error',
                    })
                }

            },
            //全选
            toggleSelection1(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleAllSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                };
            },
            //反选
            toggleSelection2(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                }
                else {
                    this.$refs.multipleTable.clearSelection();
                }

            },
            handleSelectionChange(val) {
                this.multipleSelection = val;

            },
            //重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            //置顶记录
            stickRecord(){

            },
            //删除记录
            deleteRecord(){

            }
        },
    }

</script>
<style lang="scss" scoped>
    .ApplicationManage {
        width: 100%;
        margin: 0 auto;
        min-height: 100vh;
        background-color: #f0f2f5;
        padding-top: 0.1px;
        padding-bottom: 0.1px;
        .header{
            width: 1260px;
            margin: 20px auto;
            margin-bottom: 10px;
            background-color: white;
            height: 100px;

        }
        a{
            text-decoration: none;
            color: #999999;
        }
        .content{
            width:1260px;
            margin:0 auto;
            padding-top: 0.1px;
            padding-bottom: 0.1px;
            background-color: white;
            margin-bottom: 20px;
            .officeDiv1{
                height: 50px;
                width: 160px;
                background-color:#f2f2f2 ;
                border-bottom: 1.5px solid #e9e9e9;
                display:inline-block;
                text-align: right;
                font-weight: bold;
            }
            .officeDiv2{
                height: 50px;
                width:321px;
                border-bottom: 1.5px solid #e9e9e9;
                display:inline-block;
                text-align: left;
                padding-left: 20px;
            }
        }
    }


</style>
<style lang="scss">
    .ApplicationManage{


        .el-table thead{
            color: #666;
        }
        td{
            font-size: 12px;
        }

        .el-table::before{
            height: 0px;
        }
        .DialogOpinion{
            .bigdiv{
                height: 305px;
                overflow: scroll;
                overflow-x: visible;
                padding-left: 10px;
                padding-right: 30px;
                padding-top: 20px;
                .smalldiv{
                    height: 120px;
                    border: 1px solid #d7e8f4 ;
                    width: 465px;
                    background-color: #f7fbfe;
                    padding-top: 10px;
                    text-align: left;
                    padding-left: 20px;
                    p{
                        line-height: 35px;
                    }
                    .bcolor {
                        color: #3399FF;
                    }
                    .rcolor  {
                        color: red;
                    }
                }
            }
            .el-dialog{
                width:560px !important;
                height: 446px;
                overflow: visible;
            }
            .el-dialog__body{
                padding: 0;
            }
            .el-dialog__header{
                background-color: #f2f2f2;
                padding:14px;
                color: #666666;
                text-align: left;
                .el-dialog__title{
                    font-size: 14px;
                    font-weight: bold;
                    margin-left: 20px;
                }
            }
        }

        .DialogOpinion {
            overflow: visible !important;
        }
        .DialogOffice{
            .el-dialog{
                height:250px;
            }
            .el-dialog__header{
                background-color: #f2f2f2;
                padding:14px;
                color: #666666;
                text-align: left;
                .el-dialog__title{
                    font-size: 14px;
                    font-weight: bold;
                    margin-left: 20px;
                }
            }
            .el-dialog__body{
                padding-top:20px !important;
            }
        }
    }
</style>








