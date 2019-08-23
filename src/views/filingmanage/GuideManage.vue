<template>
    <!--企业管理-->
    <div class="GuideManage">

        <div class="header">
            <el-form :model="formData" ref="formData" inline>
                <el-row :gutter="10" style="display:flex;padding-top: 30px;padding-left: 20px">
                    <el-form-item prop="projectsupport">
                        <el-col  style="width: 180px;">
                            <el-input class="headInput"  type="primary" placeholder="搜索支持方向 " clearable v-model="formData.projectsupport"style="width: 100%;"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="fundingLevel">
                        <el-col  style="width: 180px;">
                            <el-select  placeholder="搜索申报指南" clearable v-model="formData.fundingLevel"style="width: 100%;" >
                                <el-option value="11">11</el-option>
                                <el-option value="22">22</el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="plan">
                        <el-col  style="width: 180px;">
                            <el-select  placeholder="资金级别" v-model="formData.plan" style="width: 100%;" clearable>
                                <el-option value="11">11</el-option>
                                <el-option value="22">22</el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="submitTime">
                        <el-col  style="width: 180px;">
                            <el-date-picker clearable style="width: 100%;" placeholder="业务年度" v-model="formData.submitTime"></el-date-picker>
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
            <div>

                <router-link :to="{path:'/business/personnel/newEditor',query:{}}">
                    <el-button style="margin:30px 0px 20px -1139px" type="primary" size="small" >
                        <span class="el-icon-plus"></span>
                        添加</el-button>
                </router-link>

            </div>
            <el-table
                    align="center"
                    stripe
                    border
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="序号"
                        width="51"
                        align="center" >
                    <template slot-scope="scope">
                        <span>{{scope.row.number}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="支持方向"
                        width="97"
                        align="center" >
                    <template slot-scope="scope">
                        <span>{{scope.row.support}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="申报指南"
                                 width="163"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.guide}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="资金类别"
                                 width="83"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.category}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="资金级别"
                                 width="83"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.rank}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="业务处室"
                                 width="84"
                                 align="center">
                    <template slot-scope="scope">
                        <span style="color: #0079fe;cursor: pointer" @click="dialogOffice=true">{{scope.row.office}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="业务年度"
                                 width="84"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.PDF}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="PDF文件"
                                 width="80"
                                 align="center" >
                    <template slot-scope="scope">
                        <img src="../../assets/images/downloadPDF.png" alt="" style="height:24px;width:20px">

                    </template>
                </el-table-column>
                <el-table-column label="申报开始时间"
                                 width="140"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.startEnd}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="申报结束时间"
                                 width="131"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.startEnd}}</span>

                    </template>
                </el-table-column>
                <el-table-column label="状态"
                                 width="102"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.state}}</span>

                    </template>
                </el-table-column>

                <el-table-column label="操作"
                                 width="121"
                                 align="center">
                    <template slot-scope="scope" >

                        <router-link :to="{path:'/business/personnel/newEditor',query:{Editor:1}}">
                            <span style="color: #3394fe;padding: 0 3px;cursor: pointer">
                                <img src="../../assets/images/compile.png">编辑
                            </span>
                        </router-link>
                        <span style="color: #3394fe;padding: 0 3px;cursor: pointer" @click="dialogVisible=true">
                            <i class="el-icon-delete-solid" ></i>删除
                        </span>
                        <el-dialog
                                title="确认提示"
                                align="left"
                                :modal="false"
                                :visible.sync="dialogVisible"
                                width="30%">
                            <span class="iconfont" style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
                            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">是否确定删除该企业</span>
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
            <el-dialog
                    title="业务处室联系信息"
                    :visible.sync="dialogOffice"
                    class="dialogOffice"
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
        </div>




    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        sex: 'GuideManage',
        components: {},
        data(){

            return{
                dialogOffice:false,
                dialogVisible:false,

                //表单
                formData:{
                    projectsupport:'',//搜索项目名称
                    fundingLevel:'',//资金级别
                    submitTime:'',//提交时间
                    plan:'',//工作进度

                },
                tableData: [
                    {
                        number: '1',
                        support: '市场体系建设',
                        guide: '特色商贸小镇创建项目申报指南',
                        category:'内贸',
                        rank:'市本级',
                        year:'2019',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'2019-04-01 11:45',
                        startEnd:'2019-05-12 11:00',
                        state:'已保存',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },
                    {
                        number: '1',
                        support: 'xxx单位',
                        guide: '54534543534',
                        category:'九龙坡区',
                        rank:'李小红',
                        year:'',
                        office:'市场处',
                        PDF:'李小红',
                        startTime:'12345678901',
                        startEnd:'2019-05-12 11:00',
                        state:'',
                    },

                ]
            }
        },
        methods:{
            resetForm(formsupport) {
                this.$refs[formsupport].resetFields();
            },
        }
    }
</script>
<style lang="scss" scoped>
    .GuideManage{
        width: 100%;
        margin: 0 auto;
        min-height:100vh;
        background-color:#f0f2f5;
        padding-top: 0.1px;
        padding-bottom: 0.1px;
        a{
            text-decoration: none;
            color: #999999;
        }

        .header{
            width: 1260px;
            margin: 21px auto;
            margin-bottom: 7px;
            background-color: white;
            height: 100px;

        }

        .content{
            width: 1260px;
            min-height:400px;
            background-color: white;
            margin: 0 auto;
            margin-bottom: 40px;
            padding-bottom: 0.1px;
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

    }
</style>
<style lang="scss">
    body .el-table th.gutter {
        display: table-cell !important;
    }
    .GuideManage{
        .el-table thead{
            color: #666;
        }
        td{
            font-size: 12px;
        }

        .pagination{
            padding-top: 20px;
        }
        .el-table::before{
            height: 0px;
        }
        .el-table--enable-row-transition .el-table__body td,
        .el-table--border th
        {
            border-left: 1px solid #EBEEF5;
        }
        .dialogOffice{
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
        .el-dialog__wrapper{
            overflow: visible !important;
        }
        .el-table--border {
            border: none;
        }
        .el-table__header{
            border-top: 1px solid #EBEEF5
        }
    }

</style>

