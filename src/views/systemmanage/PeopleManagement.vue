<template>
    <div class="personnel">
        <div class="personnel-table" v-if="newEditor">
        <div class="header">
            <el-form>
                <el-form-item >
                    <el-row :gutter="10" style="margin-top: 30px;margin-left: 20px">
                        <el-col :span="4" style="width: 190px;">
                            <el-input class="headInput"  type="primary" placeholder="搜索姓名" v-model="inputValue.unit" clearable></el-input>
                        </el-col>
                        <el-col :span="4" style="width: 190px;">
                            <el-input class="headInput" placeholder="搜索电子邮箱" v-model="inputValue.credit"clearable></el-input>
                        </el-col>
                        <el-col :span="4" style="width: 180px;">
                            <el-select  placeholder="是否激活" v-model="inputValue.county">
                                <el-option value="11">11</el-option>
                                <el-option value="22">22</el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="5" style="margin-left: -20px">
                            <el-button type="primary" icon="el-icon-search">查询</el-button>
                            <el-button icon="el-icon-refresh-right">重置</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
        <div class="content">
            <div>
                    <el-button style="margin:30px 0 20px -1034px" type="primary" size="small"  @click="addEditor(2)">
                        <img src="../../assets/images/person.png" alt="" style="height: 16px;width: 17px;vertical-align: middle;display: inline-block;margin-top: -1px;padding: 2px">
                        添加
                    </el-button>
                <el-button size="small"@click="emailVisible=true" style="margin-left: 10px">
                    <img src="../../assets/images/email.png" alt="" style="height: 22px;width: 18px;vertical-align: middle;display: inline-block;margin-top: -3px;">激活邮件
                </el-button>
                <el-dialog
                        title="确认提示"
                        align="left"
                        :modal="false"
                        :visible.sync="emailVisible"
                        modal
                        width="30%">
                    <span class="iconfont" style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
                    <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">是否确认向所选择的人员发送激活邮件？</span>
                    <p style="padding-left: 65px;font-size: 14px;color: #999999">仅能向未激活人员发送激活邮件</p >
                    <span slot="footer" class="dialog-footer">
                            <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                                <el-button @click="emailVisible = false" size="small">取 消</el-button>
                                <el-button type="primary" @click="emailVisible = false" size="small">确 定</el-button>
                            </span>
                </el-dialog>
            </div>
            <el-table
                    align="center"
                    stripe
                    border
                    :data="tableData"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                    ref="multipleTable">
                <el-table-column
                        type="selection"
                        width="35"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="姓名"
                        width="59"
                        align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="性别"
                                 width="52"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.sex}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="出生日期"
                                 width="84"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.birthDate}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="电子邮箱"
                                 width="135"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.email}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="手机"
                                 width="95"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.phoneNumber}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="联系电话"
                                 width="95"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.phone}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="证件类型"
                                 width="95"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.idType}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="证件号码"
                                 width="150"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.idNumber}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="职称"
                                 width="66"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.title}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="是否激活"
                                 width="81"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.activate}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="最近登录时间"
                                 width="125"
                                 align="center">
                    <template slot-scope="scope">
                        <span>{{scope.row.recently}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作"
                                 width="148"
                                 align="center">
                    <template slot-scope="scope" >
                        <!--Editor:1-->
                        <span style="color: #3394fe;padding: 0 8px;cursor: pointer" @click="addEditor(1)"><img src="../../assets/images/compile.png">编辑</span>
                        <span style="color: #3394fe;padding: 0 8px;cursor: pointer" @click="dialogVisible=true">
                            <i class="el-icon-delete-solid" ></i>删除
                        </span>
                        <el-dialog
                                title="确认提示"
                                align="left"
                                :modal="false"
                                :visible.sync="dialogVisible"
                                modal
                                width="30%">
                            <span class="iconfont" style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
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
                <el-button style="margin-left: -1068px" @click="toggleSelection1(tableData)" >全选</el-button>
                <el-button @click="toggleSelection2(tableData)">反选</el-button>
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
        <newEditor v-if="!newEditor" :editor="editor" @nextStep="addEditor"></newEditor>
    </div>
</template>

<script>
    // @ is an alias to /src
    import newEditor from './newEditor.vue';

    export default {
        sex: 'personnel',
        components: {
            newEditor
        },
        data(){

            return{
                editor:1,// 子组件显示内容判断，1为编辑
                newEditor:true,//新增编辑显示
                emailVisible:false,
                dialogVisible:false,
                inputValue:{
                    unit:'',
                    credit:'',
                    county:'',
                    time:''
                },
                tableData: [
                    {
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },
                    {
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },{
                        name: '张飞',
                        sex: '女',
                        birthDate:'1995-10-10',
                        email:'12345678@qq.com',
                        phoneNumber:'15911111111',
                        phone:'023-8448484',
                        idType:'身份证',
                        idNumber:'500104195995944949',
                        title:'工程师',
                        activate:'是',
                        recently:'2019-02-15 11:22',
                    },

                ]
            }
        },
        methods:{
            //刷新页面
            Refresh(){
                this.$router.go(0)
            },
            //全选
            toggleSelection1(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleAllSelection(row);
                    });
                    console.log(rows);
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            //反选
            toggleSelection2(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                    console.log(rows);
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            addEditor(type){ //判断添加、编辑及子组件返回显示
                this.newEditor = !this.newEditor;
                if(type==1){
                    this.editor = 1;
                }else {
                    this.editor = 2;
                }

            },
        }
    }
</script>
<style lang="scss" scoped>
    .personnel{
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
        .title {
            width:1260px;
            height: 50px;
            margin:0 auto;
            margin-top: 20px;
            background-color: white;
            border-bottom: 1px solid rgba(233, 233, 233, 1);
            .title-left {
                display: inline-block;
                float: left;
                padding-left: 20px;
                padding-top: 15px;
                font-size: 12px;
                color: rgb(153, 153, 153);
                .immigration:hover {
                    color: #383838;
                }
                .next {
                    margin: 0 10px;
                }
            }
            .title-right {
                display: inline-block;
                float: right;
                padding-top: 15px;
                padding-right: 20px;
                color: rgb(153, 153, 153);
                span:first-child {
                    margin-right: 15px;
                }
                .immigration:hover {
                    color: #383838;
                }
            }
        }
        .header{
            width: 1260px;
            margin: 1px auto;
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


    }
</style>
<style lang="scss">
    body .el-table th.gutter {
        display: table-cell !important;
    }
    .personnel{
        .el-table thead{
            color: #666;
        }
        td{
            font-size: 12px;
        }
        .el-table{

        }
        .pagination{
            position: absolute;
            top:-5px;
            right:0;
        }
        .el-table::before{
            height: 0px;
        }
        .el-table--enable-row-transition .el-table__body td{
            border-left: 1px solid #EBEEF5;
        }
    }

</style>



