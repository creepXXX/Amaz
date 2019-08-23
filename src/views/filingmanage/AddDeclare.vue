<template>
    <div class="AddDeclare-box">
        <div v-if="addDeclare" class="AddDeclare">
            <div class="describe">
                <p class="tag"><span class="iconfont">&#xe724;</span>请选择相应类别进行申请</p>
                <p class="tag-describe"><span>温馨提示：</span>填写申请书前，请确认您的单位信息和个人信息已最新为最新的正确数据。由于申请书中的不可编辑字段（如单位信息、经营数据、已获资助情况）直接读取单位信息或个人信息中的数据，如果不是最新数据，将有可能影响您的申报书审核结果。</p>
            </div>
            <div class="content">
                <el-tabs v-model="activeName" class="tabs">
                    <el-tab-pane label="中央" name="first">
                        <table border="1" class="table">
                            <thead>
                                <th style="width: 261px;">申报指南</th>
                                <th style="width: 121px;">资金类别</th>
                                <th style="width: 320px;">申请起止时间</th>
                                <th style="width: 121px;">业务处室</th>
                                <th style="width: 121px;">PDF文件</th>
                                <th style="width: 213px;">操作</th>
                            </thead>
                            <tbody>
                                <tr class="table-change">
                                    <td colspan="6">
                                        <span class="el-icon-circle-plus-outline" @click="toggle = !toggle" v-if="toggle"></span>
                                        <span class="el-icon-remove-outline " @click="toggle = !toggle" v-if="!toggle"></span>
                                        内贸流通发展资金
                                    </td>
                                </tr>
                                <tr class="table-content" v-if="toggle">
                                    <td>支持楼宇经济高端发展</td>
                                    <td>内贸</td>
                                    <td>2018-07-01 ~ 2018-09-05 18:00</td>
                                    <td style="cursor: pointer" @click="dialogVisible = !dialogVisible">流通处</td>
                                    <td><span class="iconfont" style="font-size: 25px;cursor: pointer">&#xe617;</span></td>
                                    <td><el-button plain size="medium" class="el-icon-edit" @click="addDeclare=!addDeclare">填写申请</el-button><span class="table-handle" style="display: none">已过期</span></td>
                                </tr>
                                <tr class="table-content" v-if="toggle">
                                    <td>支持楼宇经济高端发展</td>
                                    <td>内贸</td>
                                    <td>2018-07-01 ~ 2018-09-05 18:00</td>
                                    <td style="cursor: pointer">流通处</td>
                                    <td><span class="iconfont" style="font-size: 25px;cursor: pointer">&#xe617;</span></td>
                                    <td><el-button plain size="medium" class="el-icon-edit">填写申请</el-button><span class="table-handle" style="display: none">已过期</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </el-tab-pane>
                    <el-tab-pane label="市本级" name="second">
                        <table border="1" class="table">
                            <thead>
                            <th style="width: 261px;">申报指南</th>
                            <th style="width: 121px;">资金类别</th>
                            <th style="width: 320px;">申请起止时间</th>
                            <th style="width: 121px;">业务处室</th>
                            <th style="width: 121px;">PDF文件</th>
                            <th style="width: 213px;">操作</th>
                            </thead>
                            <tbody>
                            <tr class="table-change">
                                <td colspan="6">
                                    <span class="el-icon-circle-plus-outline" @click="toggle = !toggle" v-if="toggle"></span>
                                    <span class="el-icon-remove-outline " @click="toggle = !toggle" v-if="!toggle"></span>
                                    内贸流通发展资金
                                </td>
                            </tr>
                            <tr class="table-content" v-if="toggle">
                                <td>支持楼宇经济高端发展</td>
                                <td>内贸</td>
                                <td>2018-07-01 ~ 2018-09-05 18:00</td>
                                <td style="cursor: pointer" @click="dialogVisible = !dialogVisible">流通处</td>
                                <td><span class="iconfont" style="font-size: 25px;cursor: pointer">&#xe617;</span></td>
                                <td><el-button plain size="medium" class="el-icon-edit">填写申请</el-button><span class="table-handle" style="display: none">已过期</span></td>
                            </tr>
                            <tr class="table-content" v-if="toggle">
                                <td>支持楼宇经济高端发展</td>
                                <td>内贸</td>
                                <td>2018-07-01 ~ 2018-09-05 18:00</td>
                                <td style="cursor: pointer">流通处</td>
                                <td><span class="iconfont" style="font-size: 25px;cursor: pointer">&#xe617;</span></td>
                                <td><el-button plain size="medium" class="el-icon-edit">填写申请</el-button><span class="table-handle" style="display: none">已过期</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </el-tab-pane>
                    <el-tab-pane label="区县（自治区）" name="third">
                        <table border="1" class="table">
                            <thead>
                            <th style="width: 261px;">申报指南</th>
                            <th style="width: 121px;">资金类别</th>
                            <th style="width: 320px;">申请起止时间</th>
                            <th style="width: 121px;">业务处室</th>
                            <th style="width: 121px;">PDF文件</th>
                            <th style="width: 213px;">操作</th>
                            </thead>
                            <tbody>
                            <tr class="table-change">
                                <td colspan="6">
                                    <span class="el-icon-circle-plus-outline" @click="toggle = !toggle" v-if="toggle"></span>
                                    <span class="el-icon-remove-outline " @click="toggle = !toggle" v-if="!toggle"></span>
                                    内贸流通发展资金
                                </td>
                            </tr>
                            <tr class="table-content" v-if="toggle">
                                <td>支持楼宇经济高端发展</td>
                                <td>内贸</td>
                                <td>2018-07-01 ~ 2018-09-05 18:00</td>
                                <td style="cursor: pointer" @click="dialogVisible = !dialogVisible">流通处</td>
                                <td><span class="iconfont" style="font-size: 25px;cursor: pointer">&#xe617;</span></td>
                                <td><el-button plain size="medium" class="el-icon-edit">填写申请</el-button><span class="table-handle" style="display: none">已过期</span></td>
                            </tr>
                            <tr class="table-content" v-if="toggle">
                                <td>支持楼宇经济高端发展</td>
                                <td>内贸</td>
                                <td>2018-07-01 ~ 2018-09-05 18:00</td>
                                <td style="cursor: pointer">流通处</td>
                                <td><span class="iconfont" style="font-size: 25px;cursor: pointer">&#xe617;</span></td>
                                <td><el-button plain size="medium" class="el-icon-edit">填写申请</el-button><span class="table-handle" style="display: none">已过期</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <el-dialog
                    title="业务处室联系信息"
                    align="left"
                    :visible.sync="dialogVisible"
                    width="30%">
                <table class="dialog-table" border="1">
                    <tr>
                        <td>业务处室</td>
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
            </el-dialog>
        </div>
        <AddEditor v-if="!addDeclare" @addEditor="addEditor" :judge="judge"></AddEditor>
    </div>
    </template>

    <script>
     import AddEditor from './AddEditor.vue'

    export default {
        name: 'AddDeclare',
        components: {
            AddEditor
        },
        data(){
            return {
                activeName: 'first', // 区分激活tags
                toggle:true, // 展开/隐藏
                dialogVisible:false, //  弹出框显示
                addDeclare:true, // 子组件显示
                judge:0 // 0为编辑/新增
            }
        },
        methods:{
            addEditor(){ // 新增/编辑显示控制
                this.addDeclare = !this.addDeclare;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .AddDeclare-box {
        padding: 10px 30px 0;
        background-color: #f0f2f5;
        min-height: 100vh;
        color: #666666;
        .AddDeclare{
            .describe {
                height: 110px;
                background-color: #ffffff;
                .tag {
                    text-align: left;
                    font-size: 14px;
                    font-weight: bold;
                    height: 38px;
                    padding: 10px 0 5px 20px;
                }
                .tag-describe {
                    text-align: left;
                    margin-top: -15px;
                    padding:0 25px ;
                    font-size: 12px;
                    color: #666666;
                    line-height: 25px;
                    span {
                        color: #999999;
                    }
                }
            }

            .content {
                margin-top: 10px;
                background-color: #ffffff;
                .table {
                    width: 95%;
                    margin: 0 auto;
                    margin-bottom: 45px;
                    border-collapse: collapse;
                    border: 1px solid rgba(240, 242, 245, 1);
                    tr:nth-of-type(even),th {
                        background-color: #F9F9F9;
                    }
                    tr,th,td {
                        height: 45px;
                        border: 1px solid rgba(240, 242, 245, 1);
                    }
                    .table-change {
                        text-align: left;
                        td {
                            color: #336699;
                            font-weight: bold;
                            font-size: 16px;
                            span {
                                font-size: 25px;
                                margin-right: 10px;
                                vertical-align: middle;
                                cursor: pointer;
                            }
                            padding-left: 30px;
                        }
                    }
                    .table-content {
                        font-size: 12px;
                        color: #666666;
                        .table-handle {
                            text-align: center;
                            font-size: 16px;
                            color: red;
                            &:hover {
                                color: #409eff;
                            }
                        }
                        td:first-child {
                            font-size: 14px;
                        }
                        td:nth-child(4),td:nth-child(5),td:nth-child(6) {
                            color: #409eff;
                        }
                    }
                }
            }
            .dialog-table {
                width: 100%;
                border: 1px solid rgba(240, 242, 245, 1);
                border-collapse: collapse;
                tr {
                    height: 45px;
                    text-align: center;

                }
                tr td:nth-child(1) {
                    background-color: #F9F9F9;
                    width: 120px;
                }
            }
        }
    }
</style>

<style lang="scss">
    .AddDeclare {
        .el-tabs__nav {
            margin-left: 40px;
            padding: 5px 0;
        }
        .el-tabs__item {
            font-weight: bold;
        }
    }
</style>