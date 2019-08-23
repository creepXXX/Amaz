<template>
    <div class="UnitAudit">
        <div class="header">
            <el-form :model="formData" ref="formData" inline>
                <el-row :gutter="10" style="display:flex;padding-top: 30px;padding-left: 20px">
                    <el-form-item prop="projectName">
                        <el-col  style="width: 180px;">
                            <el-input class="headInput"  type="primary" placeholder="搜索项目名称" clearable v-model="formData.projectName" style="width: 100%;"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="fundingLevel">
                        <el-col  style="width: 180px;">
                            <el-select  placeholder="资金类别" clearable v-model="formData.fundingLevel" style="width: 100%;" >
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
        <div class="content">
            <el-dialog
                    class="Dialog DialogAudit"
                    style="height: 385px;"
                    title="审核意见"
                    :visible.sync="dialogAudit"
                    width="30%"
                    :modal="false">
                <div class="block">
                    <div  class="bigdiv" style="height: 256px;">
                        <div class="dialogForm" >
                            <el-form :model="dialogForm">
                                <el-form-item label="审核结果：" labelWidth="100px">
                                    <el-radio-group v-model="dialogForm.result" >
                                        <el-radio label="不同意申报"></el-radio>
                                        <el-radio label="退回修改"></el-radio>
                                        <el-radio label="审核通过"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label=" 跟进内容：" labelWidth="100px" >
                                    <el-input type="textarea" v-model="dialogForm.reason" :maxlength="300"  placeholder="请输入理由..." show-word-limit>
                                    </el-input>
                                </el-form-item>

                            </el-form>
                        </div>
                    </div>
                    <div style="background-color:white;height: 45px;
                            border: 1px solid rgba(228, 228, 228,1);text-align: right;
                            padding-top: 10px;padding-right: 35px">
                        <el-button @click="dialogAudit = false" size="medium">取消</el-button>
                        <el-button type="primary" @click="submitAudit()" size="medium">提交</el-button>
                    </div>
                </div>
            </el-dialog>
            <div style="margin: 23px 0;height: 28px;">
                <el-button size="small" style="float: left;margin-left: 20px" plain
                           @click="writeAudit()">
                    <img src="../../assets/images/Management.png" alt="" style="height: 16px;width: 16px;vertical-align: middle;display: inline-block;margin-top: -3px;padding-top: -5%">
                    批量审核
                </el-button>
                <el-button size="small" style="float: right;margin-right: 20px;" plain
                           @click="dialogList=true ">
                    <span class="el-icon-s-order" style="font-size: 14px;color: #999999;"></span>
                    列表
                </el-button>

            </div>
            <el-dialog
                    class="Dialog DialogAudit"
                    title="自定义显示列项"
                    style="height: 385px;"
                    :visible.sync="dialogList"
                    width="30%"
                    :modal="false">
                <span style="position:absolute;font-size:12px;color:#999999;left:34px;top:32px;z-index:9999999">列项显示不得少于5项，最多支持自定义10个列项，灰色选中列不支持隐藏和排序</span>
                <div class="block">
                    <div  class="bigdiv" style="height: 271px;width:100%;padding: 0;">
                        <el-table
                                :data="customData"
                                border>
                            <el-table-column
                                    label="显示"
                                    width="100px"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-checkbox ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="列名"
                                    width="324px">
                                <template slot-scope="scope">
                                    {{scope.row.columnName}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="拖动调整顺序"
                                    width="120px"
                                    align="center">
                                <template slot-scope="scope">
                                    <div class="color-list">
                                        <div
                                                class="color-item"
                                                v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
                                                :key="color.text"
                                        >{{color.text}}</div>
                                    </div>
                                    <img src="../../../src/assets/images/drag.png" alt="" width="15px">
                                </template>
                            </el-table-column>



                        </el-table>

                    </div>
                    <div style="background-color:white;height:49px;
                            border: 1px solid rgba(228, 228, 228,1);text-align: right;
                            padding-right: 35px;padding-top:11px">
                        <div style="display:inline-block;float:left;margin-top:6px;margin-left:40px;cursor:pointer"><span style="color:#0079fe;font-size:12px">恢复默认</span></div>
                        <el-button @click="dialogList = false" size="medium">取消</el-button>
                        <el-button type="primary" @click="dialogList = false" size="medium">提交</el-button>
                    </div>
                </div>
            </el-dialog>

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
                        label="申请书编号"
                        width="92"
                        align="center"
                        prop="number">
                </el-table-column>
                <el-table-column label="项目名称"
                                 width="142"
                                 align="center">
                    <template slot-scope="scope">
                        <span style="color: #0079fe;cursor: pointer">{{scope.row.projectName}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="负责人"
                                 width="74"
                                 align="center">
                    <template slot-scope="scope">
                        <span style="color: #0079fe;cursor: pointer" @click="dialogPrincipal=true">{{scope.row.principal}}</span>

                    </template>

                </el-table-column>
                <el-table-column label="资金类别"
                                 width="111"
                                 align="center"
                                 prop="fundingLevel">
                </el-table-column>
                <el-table-column label="年度"
                                 width="74"
                                 align="center"
                                 prop="year">
                </el-table-column>
                <el-table-column label="申报指南"
                                 width="110"
                                 align="center"
                                 prop="fingerPost">
                </el-table-column>

                <el-table-column label="业务处室"
                                 width="86"
                                 align="center">
                    <template slot-scope="scope">
                        <span style="color: #0079fe;cursor: pointer" @click="dialogOffice=true">{{scope.row.office}}</span>

                    </template>
                </el-table-column>
                <el-table-column
                        label="提交时间"
                        width="88"
                        align="center"
                        prop="submitTime">

                </el-table-column>
                <el-table-column
                        label="工作进度"
                        align="center"
                        width="116"
                        prop="plan">

                </el-table-column>
                <el-table-column label="PDF文件"
                                 width="80"
                                 align="center"
                                 prop="PDFFile">
                    <img src="../../assets/images/downloadPDF.png" alt="" style="height:24px;width:20px">
                </el-table-column>
                <el-table-column label="审核意见"
                                 width="82.5"
                                 align="center">
                    <template slot-scope="scope">
                        <span @click="dialogExamine = true" style="color: #0079fe;cursor: pointer;">{{scope.row.opinion}}</span>

                    </template>
                </el-table-column>


                <el-table-column label="操作"
                                 width="116"
                                 align="center">
                    <template slot-scope="scope">
                        <router-link :to="{path:'/UnitAudit/EnterAudit',query:{}}">
                            <span style="color: #0079fe;font-size: 12px;text-align: center">
                                <img src="../../../src/assets/images/help.png" style=" width:12px;vertical-align: middle">进入审核
                            </span>
                        </router-link>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog
                    title="负责人详情"
                    :visible.sync="dialogPrincipal"
                    class="dialogPrincipal"
                    width="560px"
                    top="14vh"
                    :modal="false">
                <div class='PrincipalBigdiv'>
                    <div class="message">
                        <div style="width:483px;height:50px;display: inline;">
                            <div class="officeDiv1" style="border-top: 1px solid rgb(228, 228, 228);">
                                <span style="line-height: 50px;">姓名：</span>
                            </div>
                            <div class="officeDiv2" style="border-top: 1px solid rgb(228, 228, 228);">
                                <span style="line-height:50px">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">性别：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">英文名：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">出生日期：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">证件类型：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">证件号码：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">单位名称：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">职称：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1">
                                <span style="line-height: 50px;">联系电话：</span>
                            </div>
                            <div class="officeDiv2">
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                        <div style="width:483px;height:50px;text-align: right;display: inline;">
                            <div class="officeDiv1" >
                                <span style="line-height: 50px;">手机：</span>
                            </div>
                            <div class="officeDiv2" >
                                <span style="line-height: 50px;">{{}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="background-color:white;height: 56px;border: 1px solid rgba(228, 228, 228,1);"></div>
            </el-dialog>


            <el-dialog
                    title="业务处室联系信息"
                    :visible.sync="dialogOffice"
                    class="DialogOffice"
                    width="560px"
                    top="26vh"
                    :modal="false">
                <div style="height: 150px;width: 503px;color: #666666;border: 1.2px solid rgb(228, 228, 228);margin:0 auto;">
                    <div style="width:504px;height:50px;">
                        <div class="officeDiv1">
                            <span style="line-height: 50px;">业务处室：</span>
                        </div>
                        <div class="officeDiv2">
                            <span style="line-height:50px">{{}}</span>
                        </div>
                    </div>
                    <div style="width:507px;height:50px;text-align: right;display: flex">
                        <div class="officeDiv1">
                            <span style="line-height: 50px;">联系人：</span>
                        </div>
                        <div class="officeDiv2">
                            <span style="line-height: 50px;">{{}}</span>
                        </div>
                    </div>
                    <div style="width:507px;height:50px;text-align: right;display: flex">
                        <div class="officeDiv1">
                            <span style="line-height: 50px;">联系电话：</span>
                        </div>
                        <div class="officeDiv2" style="height: 50px;">
                            <span style="line-height: 50px;">{{}}</span>
                        </div>
                    </div>
                </div>
            </el-dialog>

            <el-dialog
                    class="Dialog "
                    title="审核意见"
                    :visible.sync="dialogExamine"
                    width="30%"
                    :modal="false">
                <div class="block">
                    <el-timeline >
                        <div  class="bigdiv" >
                            <div v-for="item in activities" style="padding-top: 18px">
                                <el-timeline-item color="#0079fe"style="height: 20px;margin-top: -12px">
                                    <div style="position: relative;height: 60px;">
                                        <img src="../../assets/images/date.png" alt="" style="width: 94px;height: 75px;position: absolute;left: -13px;top:-28px;">
                                        <span style="position: absolute;left:26px;color: white;font-size: 12px;">{{dateTitle.slice(5,10)}}</span>
                                    </div>
                                </el-timeline-item>
                                <el-timeline-item
                                        v-for="(activity, index) in activities"
                                        :key="index"
                                        :color="activity.color"
                                        v-show="dateTitle.slice(5,10)==activity.timestamp.slice(5,10)">

                                    <div class="smalldiv" >
                                        <p>
                                                        <span>
                                                            {{activity.name}}
                                                            <span style="color: #f20000;">{{activity.audit}}</span>
                                                        </span>
                                            <span style="color: #999999;font-size: 12px;float: right;margin-right: 20px">
                                                            <img src="../../assets/images/clock.png" width="14px" style="vertical-align: -8%"/>
                                                            {{activity.timestamp}}
                                                        </span>
                                        </p>
                                        <p style="color: #999999;">{{activity.content}}</p>
                                        <p style="font-size:12px">来自部门: <span style="color: #999999;">{{activity.department}}</span></p>

                                    </div>

                                </el-timeline-item>
                            </div>
                        </div>
                        <div style="background-color:white;height: 54px;border: 1px solid rgba(228, 228, 228,1);"></div>
                    </el-timeline>
                </div>
            </el-dialog>

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
    </div>
</template>
<script>
    export default {
        name:'UnitAudit',
        data(){
            return{
                dialogPrincipal:false,//负责人对话框
                dialogAudit:false,//批量审核对话框
                dialogList:false,//列表对话框
                dialogExamine:false,//审核意见对话框
                dialogOffice:false,//业务处室对话框
                dateTitle:'2018-04-03',
                titleDown:`
                    <span style="font-size:12px;color:#999999;">列项显示不得少于5项，最多支持自定义10个列项，灰色选中列不支持隐藏和排序</span>
                `,
                customData:[
                    {
                        columnName:'客户名称',
                    },
                    {
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },{
                        columnName:'客户名称',
                    },

                ],

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
                        number:'000001',//申请书编号
                        projectName:'再生资源回收分拣中心项目',//项目名称
                        principal:'张三',//负责人
                        fundingLevel:'市本级',//资金级别
                        year:'2010',//年度
                        fingerPost:'再生资源回收分拣中心',//申报指南
                        office:'市场处',//业务处室
                        submitTime:'2019-04-01 11:45',//提交时间
                        plan:'待承担单位审核',//工作进度
                        PDFFile:'',//PDF文件
                        opinion:'查看',//审核意见

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

                    },
                ],
                activities: [{
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    color:'#0079fe',
                    department:' 万州区商务部',
                    name:'张三',
                    audit:'区主管部门审核(审核通过)',
                }, {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0079fe',
                    department:' 万州区商务部',
                    name:'张三',
                    audit:'区主管部门审核(审核通过)',
                }, {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large',
                    color: '#0079fe',
                    department:' 万州区商务部',
                    name:'张三',
                    audit:'区主管部门审核(审核通过)',

                }, {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46',
                    color: '#0079fe',
                    department:' 万州区商务部',
                    name:'张三',
                    audit:'区主管部门审核(审核通过)',

                }],
                dialogForm:{
                    result:'',
                    reason:'',
                }

            }
        },
        methods:{
            writeAudit(){

                if(this.multipleSelection===undefined){
                    this.$message({
                        showClose:true,
                        message:'请至少选择一个项目进行审核',
                        type:'error',
                    });
                    this.dialogAudit=false;

                }else if(this.multipleSelection.length>0){
                    this.dialogAudit=true;
                }else{
                    this.$message({
                        showClose:true,
                        message:'请至少选择一个项目进行审核',
                        type:'error',
                    });
                    this.dialogAudit=false;
                }
            },
            submitAudit(){//提交审核
                this.dialogAudit=false;
                this.$message({
                    showClose:true,
                    message:'提交成功',
                    type:'success'
                })
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
    .UnitAudit {
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
            .bigdiv{
                height: 318px;
                overflow: scroll;
                overflow-x: visible;
                padding-left: 10px;
                padding-right: 30px;
                padding-top: 20px;
            }

            .smalldiv{
                height: 120px;
                border: 1px solid #d7e8f4 ;
                width: 482px;
                background-color: #f7fbfe;
                padding-top: 10px;
                text-align: left;
                padding-left: 20px;
                p{
                    line-height: 35px;
                }
            }
            .officeDiv1{
                height: 50px;
                width: 117px;
                background-color:#f2f2f2 ;
                border-bottom: 1px solid #e9e9e9;
                display:inline-block;
                text-align: right;
                font-weight: bold;

            }
            .officeDiv2{
                height: 50px;
                width:366px;
                border-bottom: 1px solid #e9e9e9;
                border-right: 1px solid #e9e9e9;
                display:inline-block;
                text-align: left;
                padding-left: 20px;

            }
            .dialogForm{
                margin:0 auto;
                width:490px;
                height:240px;
            }
            .PrincipalBigdiv{
                height: 340px;
                width: 560px;
                overflow: scroll;
                overflow-x: visible;
            }
            .message{
                width: 516px;
                color: #666666;
                /*border: 1px solid rgb(228, 228, 228);*/
                margin:0 auto;
                padding-top: 30px;
                padding-bottom: 30px;

            }
        }
    }
</style>
<style lang="scss">
    .UnitAudit{
        .el-table thead{
            color: #666;
        }
        td{
            font-size: 12px;
        }

        .el-table::before{
            height: 0px;
        }
        .Dialog{
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

        .el-dialog__wrapper{
            overflow: visible !important;
        }
        .DialogAudit{
            .el-dialog{
                height:385px !important;

            }
            .el-form-item__content{
                text-align: left;
            }
            .el-textarea__inner{
                height:160px;
            }
            .el-input__count{
                margin-right: 20px;
            }
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
        .dialogPrincipal{
            .el-dialog{
                height:450px;
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
                padding:0 !important;
            }
        }
        .DialogAudit{
            .el-dialog__header{
                padding: 0px;
                height: 46px;
                padding-left: 14px;
                padding-top: 6px
            }
            .el-dialog__title{

                padding-top: -26px;
            }
            .el-table td,.el-table th{
                padding: 9px 0;
            }
            .el-table td .cell{
                font-weight: bold;
            }
        }




    }



</style>








