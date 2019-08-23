<template>
    <div class="BusinessAudit">
        <div class="header" v-if="editor&&enterAuder" >
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
                        <el-col>
                            <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
                            <el-button icon="el-icon-refresh-right" @click="resetForm('formData')" size="small">重置</el-button>
                            <span class="iconfont search" @click="hightSearch = !hightSearch">&#xe649;高级搜索</span>
                        </el-col>
                    </el-form-item>
                </el-row>
            </el-form>
        </div>
        <div class="content" v-if="editor&&enterAuder">
            <div class="btns">
                <el-button size="small" plain @click="auditSubmit()" class="iconfont"> &#xe603; 批量审核</el-button>
                <el-button size="small" plain class="iconfont"> &#xe603; 评审专家</el-button>
                <el-button size="small" plain class="iconfont"> &#xe603; 审计机构</el-button>
                <el-button size="small" plain class="iconfont" style="float: right" @click="dialogList = !dialogList"> &#xec6b; 列表</el-button>
            </div>
            <el-table
                    class="table"
                    :data="tableData"
                    stripe
                    border
                    @selection-change="handleSelectionChange"
                    style="width:97%;margin:0 auto"
                    ref="multipleTable">
                <el-table-column
                        width="40px"
                        type="selection"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="单位名称"
                        width="80px"
                        align="center" >
                    <template slot-scope="scope">
                        <div class="table-td">{{scope.row.unit}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="area"
                         label="所属区县"
                         width="81px"
                         align="center">
                </el-table-column>
                <el-table-column
                        prop="number"
                        label="申请书编号"
                        width="93px"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="项目名称"
                        width="105px"
                        align="center">
                    <template slot-scope="scope">
                        <div class="table-td" style="cursor: pointer;" @click="editors(0)">{{scope.row.project}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="负责人"
                        width="65px"
                        align="center">
                    <template slot-scope="scope">
                        <div class="table-td" style="cursor: pointer;" @click="dialogPeople = !dialogPeople">{{scope.row.principal}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="rank"
                        label="资金级别"
                        width="103px"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="year"
                        label="年度"
                        width="57px"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="fingerpost"
                        label="申报指南"
                        width="90px"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="业务处室"
                        width="79px"
                        align="center">
                    <template slot-scope="scope">
                        <div class="table-td" style="cursor: pointer;" @click="dialogRelation = !dialogRelation">{{scope.row.offic}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="提交时间"
                        width="90px"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="schedule"
                        label="工作进度"
                        width="88px"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="PDF文件"
                        width="78px"
                        align="center">
                    <template slot-scope="scope">
                        <span class="iconfont table-td">&#xe604;</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="审核意见"
                        width="78px"
                        align="center">
                    <template slot-scope="scope">
                        <div class="table-td" style="cursor: pointer;" @click="dialogExamine = !dialogExamine">查看</div>
                    </template>
                </el-table-column>

                <el-table-column
                        label="操作"
                        width="94px"
                        align="center">
                    <template slot-scope="scope">
                        <span class="iconfont table-td" style="font-size: 13px;cursor: pointer;" @click="editors(1)">&#xe72d;进入审核</span>
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
        <!--负责人-->
        <el-dialog
                :modal="false"
                class="dialogRelation"
                title="业务处室联系信息"
                :visible.sync="dialogPeople"
                width="460px">
           <div class="table-box">
               <table class="peopleTable" border="1">
                   <tr>
                       <td>姓名：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>性别：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>英文名：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>出生日期：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>证件类型：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>证件号码：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>单位名称：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>职称：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>联系电话：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>手机：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>电子邮箱：</td>
                       <td>生产服务业科</td>
                   </tr>
                   <tr>
                       <td>通信地址：</td>
                       <td>生产服务业科</td>
                   </tr>
               </table>
           </div>
        </el-dialog>
        <!--业务处室-->
        <el-dialog
                class="dialogRelation"
                title="业务处室联系信息"
                :visible.sync="dialogRelation"
                width="460px">
            <div class="table-box">
                <table class="peopleTable" border="1">
                    <tr>
                        <td>业务处室：</td>
                        <td>生产服务业科</td>
                    </tr>
                    <tr>
                        <td>联系人：</td>
                        <td>张三</td>
                    </tr>
                    <tr>
                        <td>联系电话：</td>
                        <td>0215-4816164</td>
                    </tr>
                </table>
            </div>

        </el-dialog>
        <!--审核意见-->
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
        <!--高级搜索-->
        <el-dialog
                class="heighSearch"
                title="高级搜索"
                :visible.sync="hightSearch"
                width="34%">
            <div class="heighSearch-input">
                <el-input v-model="input"  placeholder="搜索项目名称" size="medium" class="input"></el-input>
                <el-select v-model="value" placeholder="资金级别" ize="medium" class="input">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-input v-model="input"  placeholder="搜索单位名称" size="medium" class="input"></el-input>
                <el-select v-model="value" placeholder="单位所属区县" ize="medium" class="input">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-input v-model="input"  placeholder="搜索申报指南" size="medium" class="input"></el-input>
                <el-select v-model="value" placeholder="业务处室" ize="medium" class="input">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker v-model="value1" placeholder="提交时间" size="medium" class="input" type="date"></el-date-picker>
                <el-select v-model="value" placeholder="工作进度" ize="medium" class="input">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="btns">
                <el-button size="medium">重置</el-button>
                <el-button type="primary" size="medium">搜索</el-button>
            </div>
        </el-dialog>
        <!--批量审核-->
        <el-dialog
                class="batchReview"
                title="批量审核"
                :visible.sync="batchReview"
                width="35%">
            <div class="reviewBox">
                    <span>审核结果:</span>
                    <el-radio-group v-model="radio">
                        <el-radio :label="3">审核通过</el-radio>
                        <el-radio :label="6">退回修改</el-radio>
                        <el-radio :label="9">不同意申报</el-radio>
                    </el-radio-group>
                    <div class="describe">
                        <el-input
                                maxlength="300"
                                show-word-limit
                                type="textarea"
                                :rows="7"
                                placeholder="请输入审核意见..."
                                v-model="textarea">
                        </el-input>
                        <div class="btns">
                            <el-button plain icon="el-icon-close" size="small">取消</el-button>
                            <el-button type="primary" icon="el-icon-circle-check" size="small">提交</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
        <!--列表-->
        <el-dialog
                class="dialogList"
                :visible.sync="dialogList"
                width="35%">
            <div slot="title">
                <p style="font-weight: bold">自定义显示列项</p>
                <p style="font-size: 12px;color: #666666;margin-top: 5px">列项显示不得少于5项，最多支持自定义10个列项，灰色选中列不支持隐藏和排序</p>
            </div>
            <div style="height: 400px;overflow: auto">
                <el-table
                        :data="tableTrag"
                        stripe
                        border
                        style="width: 100%">
                    <el-table-column
                            label="显示"
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="列名">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            width="120"
                            label="拖动调整顺序">
                        <template>
                            <span class="el-icon-s-fold"></span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="btns">
                <span>恢复默认</span>
                <p>
                    <el-button plain size="small">取消</el-button>
                    <el-button type="primary" plain size="small">确认</el-button>
                </p>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'BusinessAudit',
        components:{},
        data(){
            return{
                dialogPeople:false,
                dialogRelation:false,
                dialogExamine:false,
                dialogVisible:false,
                dialogOffice:false,
                hightSearch:false,
                batchReview:false,
                dialogList:false,
                editor:true,
                enterAuder:true,
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
                        unit:'xxx单位',
                        area:'九龙坡区',
                        number:'00001',
                        project:'整车进口项目',
                        principal:'张三',
                        rank:'市本级',
                        year:'2019',
                        fingerpost:'整车进口',
                        offic:'市场处',
                        date:'2019-04-01 11:45',
                        schedule:'待承担单位审核',
                    },{
                        unit:'xxx单位',
                        area:'九龙坡区',
                        number:'00001',
                        project:'整车进口项目',
                        principal:'张三',
                        rank:'市本级',
                        year:'2019',
                        fingerpost:'整车进口',
                        offic:'市场处',
                        date:'2019-04-01 11:45',
                        schedule:'待承担单位审核',
                    },{
                        unit:'xxx单位',
                        area:'九龙坡区',
                        number:'00001',
                        project:'整车进口项目',
                        principal:'张三',
                        rank:'市本级',
                        year:'2019',
                        fingerpost:'整车进口',
                        offic:'市场处',
                        date:'2019-04-01 11:45',
                        schedule:'待承担单位审核',
                    }
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
                ],
                tableTrag:[
                    {id:1,name:'单位名称'},
                    {id:1,name:'所属区县'},
                    {id:1,name:'申请书编号'},
                    {id:1,name:'项目名称'},
                    {id:1,name:'负责人'},
                    {id:1,name:'资金级别'},
                    {id:1,name:'年度'},
                    {id:1,name:'申报指南'},
                    {id:1,name:'业务处室'},
                    {id:1,name:'提交时间'},
                    {id:1,name:'工作进度'},
                    {id:1,name:'PDF文件'},
                    {id:1,name:'审核意见'},
                    {id:1,name:'操作'}
                ]

            }
        },
        methods:{
            editors(type){ // 项目名称/进入审核判断
                let paths = '';
                if(type==0){
                    paths = '/AddEditor';
                }else {
                    paths = '/EnterAudit';
                }
            this.$router.push({
                path: paths,
                query:type==0?{judgeBack:1}:'',
            });

            },
            auditSubmit(){//批量审核
                if(this.multipleSelection===undefined){
                    this.$message({
                        showClose:true,
                        message:'请至少选择一个项目进行审核',
                        type:'error',
                    })
                }else if(this.multipleSelection.length>0){
                    this.batchReview = !this.batchReview;
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

            },

        },
        mounted(){
            this.shutBox = this.$store.state.shut;
        }
    }

</script>
<style lang="scss" scoped>
    .BusinessAudit {
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
            .search {
                margin-left: 10px;
                color: #0079FE;
                cursor: pointer;
                font-size: 14px;
                font-weight: bold;
                &:hover {
                    color: #409eff;
                }
            }
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
            .btns {
                margin: 20px;
                text-align: left;
                .iconfont {
                    font-size: 14px;
                }
            }
            .table {
                .iconfont {
                    font-size: 25px;
                }
                .table-td {
                    color: #0079FE;
                }
            }

        }
        .heighSearch {
            .heighSearch-input {
                text-align: left;
                padding: 10px;
                .input {
                    padding: 5px;
                    width: 240px;
                }
            }
            .btns {
                border-top: 1.5px solid #f2f2f2;
                text-align: right;
                margin-top: 20px;
                padding: 15px 20px 20px 0;
            }
        }
        .dialogList {
            .btns {
                border-top: 1.5px solid #f2f2f2;
                padding-top: 15px;
                text-align: left;
                padding-bottom: 15px;
                span {
                    color: #0079FE;
                    padding-left: 30px;
                    font-size: 13px;
                    cursor: pointer;
                }
                p {
                    width: 430px;
                    display: inline-block;
                    text-align: right;
                }
            }
        }
        .batchReview {
            .reviewBox {
                text-align: left;
                margin: 10px 30px;
                padding-bottom: 15px;
                span {
                    margin-right: 20px;
                    color: #666666;
                    font-size: 16px;
                }
                .describe {
                    margin: 15px 0 10px 10px;
                    width: 450px;
                    p {
                        text-align: right;
                    }
                    .btns {
                        text-align: right;
                        padding-top: 10px;
                    }
                }
            }
        }
        .dialogRelation {
            .table-box {
                width: 460px;
                height: 180px;
                overflow: auto;
                .peopleTable {
                    margin: 20px auto;
                    width: 360px;
                    border-collapse: collapse;
                    tr {
                        border: 1.5px solid #e9e9e9;
                        height: 45px;
                    }
                    tr td:first-child {
                        background-color:#f2f2f2 ;
                        text-align: right;
                        padding-right: 10px;
                        font-weight: bold;
                        width: 130px;
                    }
                    tr td:nth-of-type(2) {
                        text-align: left;
                        padding-left: 30px;
                    }
                }
            }
        }
    }


</style>
<style lang="scss">
    .BusinessAudit{
        .dialogRelation {
            .el-dialog__body  {
                padding-bottom: 20px;
            }
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
        .el-table thead{
            color: #666;
        }
       .table {
           td{
               font-size: 12px;
           }
           .is-center {
               padding:3px 0;
               height: 45px;
           }
       }

        .DialogOpinion{
            .bigdiv{
                height: 340px;
                overflow: scroll;
                overflow-x: visible;
                padding-left: 20px;
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
        }

        .DialogOpinion {
            overflow: visible !important;
        }
    }
</style>