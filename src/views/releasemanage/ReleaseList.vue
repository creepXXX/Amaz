<template>
    <div class="ReleaseList-box">
        <div class="ReleaseList" v-if="ReleaseList&&ReleaseDetail">
            <div class="nav-search">
                <el-input v-model="formInline.title" placeholder="搜索标题" class="search-input search-position" clearable></el-input>
                <el-select v-model="formInline.type" placeholder="发布类型" class="search-input search-position" clearable>
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="formInline.source" placeholder="来源" class="search-input search-position" clearable>
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                        clearable
                        class="search-input search-position"
                        v-model="newDate"
                        type="date"
                        placeholder="最新时间">
                </el-date-picker>
                <el-button type="primary" icon="el-icon-search" class="search-position" size="medium" >搜索</el-button>
                <el-button icon="el-icon-refresh-right" class="search-position btn-right" size="medium">重置</el-button>
            </div>
            <div class="ReleaseList-table">
                <el-table
                        :data="tableData"
                        border
                        stripe
                        style="width: 97%;margin: 15px auto">
                    <el-table-column
                            width="50px"
                            align="center"
                            prop="number"
                            label="序号">
                    </el-table-column>
                    <el-table-column
                            width="200px"
                            align="center"
                            prop="title"
                            label="标题">
                    </el-table-column>
                    <el-table-column
                            width="80px"
                            align="center"
                            prop="type"
                            label="类型">
                    </el-table-column>
                    <el-table-column
                            width="100px"
                            align="center"
                            prop="source"
                            label="来源">
                    </el-table-column>
                    <el-table-column
                            width="80px"
                            align="center"
                            prop="isuser"
                            label="发布人">
                    </el-table-column>
                    <el-table-column
                            width="220px"
                            align="center"
                            prop="date"
                            label="公示期">
                    </el-table-column>
                    <el-table-column
                            width="80px"
                            align="center"
                            prop="status"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            width="150px"
                            align="center"
                            prop="newDate"
                            label="最新时间">
                    </el-table-column>
                    <el-table-column
                            width="213px"
                            align="center"
                            label="操作">
                        <span class="iconfont" @click="ReleaseDetail=!ReleaseDetail">&#xe683; 详情</span>&#8197;
                        <span class="iconfont" @click="ReleaseList=!ReleaseList">&#xe603; 编辑</span>&#8197;
                        <span class="iconfont" @click="deleteDialog">&#xe68d; 删除</span>
                    </el-table-column>
                </el-table>
                <el-pagination
                        style="margin-bottom: 10px"
                        align="right"
                        background
                        layout="prev, pager, next,sizes"
                        :total="1000">
                </el-pagination>
            </div>
            <el-dialog
                    title="确认提示"
                    align="left"
                    :modal="false"
                    :visible.sync="dialogVisible"
                    width="30%">
                <span class="iconfont" style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
                <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">是否确定删除对应的发布内容</span>
                <p style="padding-left: 65px;font-size: 14px;color: #999999">删除后无法恢复是否删除？</p>
                <span slot="footer" class="dialog-footer">
                <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                    <el-button @click="dialogVisible = false" size="medium">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <AddRelease v-if="!ReleaseList" :spread="spread" @next="nextStep"></AddRelease>
        <ReleaseDetail v-if="!ReleaseDetail" @next="nextStep"></ReleaseDetail>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AddRelease from './AddRelease.vue';
    import ReleaseDetail from './ReleaseDetail.vue';

    export default {
        name: 'ReleaseList',
        components: {
            AddRelease,
            ReleaseDetail
        },
        data(){
            return {
                spread:2,
                ReleaseList:true,
                ReleaseDetail:true,
                dialogVisible:false,
                formInline:{
                    title:'',
                    type:'',
                    source:''
                },
                tableData: [{
                    number: 1,
                    title: '关于申报2018年度中国创新创业大',
                    type: '申报通知',
                    source: '科技创新局',
                    isuser: '李小红',
                    date: '2019-08-25 10:00~2019-09-24 10:00',
                    status: '已保存',
                    newDate: '2019-08-25 10:00',
                },{
                    number: 1,
                    title: '关于申报2018年度中国创新创业大',
                    type: '申报通知',
                    source: '科技创新局',
                    isuser: '李小红',
                    date: '2019-08-25 10:00~2019-09-24 10:00',
                    status: '已保存',
                    newDate: '2019-08-25 10:00',
                },{
                    number: 1,
                    title: '关于申报2018年度中国创新创业大',
                    type: '申报通知',
                    source: '科技创新局',
                    isuser: '李小红',
                    date: '2019-08-25 10:00~2019-09-24 10:00',
                    status: '已保存',
                    newDate: '2019-08-25 10:00',
                },{
                    number: 1,
                    title: '关于申报2018年度中国创新创业大',
                    type: '申报通知',
                    source: '科技创新局',
                    isuser: '李小红',
                    date: '2019-08-25 10:00~2019-09-24 10:00',
                    status: '已保存',
                    newDate: '2019-08-25 10:00',
                }],
                options: [{
                    value: 1,
                    label: '黄金糕'
                }, {
                    value: 2,
                    label: '双皮奶'
                }, {
                    value: 3,
                    label: '蚵仔煎'
                }, {
                    value: 4,
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                newDate:''
            }
        },
        methods:{
            deleteDialog(){ // 弹窗关闭显示
                this.dialogVisible = !this.dialogVisible;
            },
            nextStep(type){ // 监听子组件返回当前页面
                if(type){
                    this.ReleaseDetail = !this.ReleaseDetail;
                }else {
                    this.ReleaseList = !this.ReleaseList;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ReleaseList-box {
        background-color: #f0f2f5;
        min-height: 100vh;
        .ReleaseList{
            .nav-search {
                margin: 0 auto;
                width: 1210px;
                background-color: #ffffff;
                border: 1px solid #e9e9e9;
                height: 95px;
                line-height: 95px;
                .search-position {
                    position: relative;
                    right: 105px;
                    margin-right: 10px;
                }
                .btn-right {
                    margin-left: 0;
                }
                .search-input {
                    width: 180px;
                    height: 85px;
                }
            }
            .ReleaseList-table {
                margin: 10px auto;
                width: 1210px;
                background-color: #ffffff;
                border: 1px solid #e9e9e9;
                .iconfont {
                    display: inline-block;
                    color: #0079EE;
                    margin: 5px auto;
                    font-size: 13px;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }
    }
</style>