<template>
    <div class="ContentList-box">
        <content-head></content-head>
        <div class="list-nav">
            <p class="title-left">
                <span class="iconfont immigration" style="font-size: 18px">&#xe600;</span>
                <span class="iconfont next">&#xe60b;</span>
                <span>申报通知</span>
            </p>
            <p class="title-right">
                <span class="iconfont immigration">&#xe60a;</span>
                <span class="iconfont immigration">&#xe66d;</span>
            </p>
        </div>
        <div class="list-search">
            <div>
                <el-input v-model="input" class="input" placeholder="搜索标题"></el-input>
                <el-select v-model="value" placeholder="发布类型">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="来源">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                        class="input"
                        v-model="value1"
                        type="date"
                        placeholder="最新时间">
                </el-date-picker>
                <el-button type="primary" class="btn" size="medium" icon="el-icon-search">查询</el-button>
                <el-button type="info" plain size="medium" class="btn" icon="el-icon-refresh-right">重置</el-button>
            </div>
        </div>
        <div class="list-table">
            <el-table
                    class="table"
                    border
                    stripe
                    :data="tableData"
                    style="width: 1255px;margin: 0 auto">
                <el-table-column
                        width="50px"
                        align="center"
                        type="index"
                        label="序号">
                </el-table-column>
                <el-table-column
                        width="245px"
                        align="center"
                        label="标题">
                    <template slot-scope="scope">
                        <p>{{scope.row.title.length>25?scope.row.title.substring(0,15)+'...':scope.row.title}}</p>
                    </template>
                </el-table-column>
                <el-table-column
                        width="80px"
                        align="center"
                        label="类型"
                        prop="type">
                </el-table-column>
                <el-table-column
                        width="80px"
                        align="center"
                        label="来源"
                        prop="source">
                </el-table-column>
                <el-table-column
                        width="80px"
                        align="center"
                        prop="publisher"
                        label="发布人">
                </el-table-column>
                <el-table-column
                        width="280px"
                        align="center"
                        prop="publicity"
                        label="公示期">
                </el-table-column>
                <el-table-column
                        width="218px"
                        align="center"
                        prop="time"
                        label="最新时间">
                </el-table-column>
                <el-table-column
                        width="221px"
                        align="center"
                        label="操作">
                    <template slot-scope="scope">
                        <span class="iconfont" @click="jumpDetail">&#xe61b; 详情</span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="pagination"
                    background
                    layout="prev, pager, next,sizes"
                    :total="1000">
            </el-pagination>
        </div>
        <div class="footer">
            <p>主办单位：重庆市商务委员会 │ 联系电话：86-23-62663155    </p>
            <p>联系地址：重庆市南岸区南滨路162号2幢 │ 邮编：400061 │ 传真：86-23-62663156</p>
            <p>渝ICP备 11003380号-4 │ 政府网站标识码：5000000090 │ 内容维护： 重庆市商业信息中心</p>
        </div>
        <BackTop></BackTop>
    </div>
</template>

<script>
    // @ is an alias to /src
    import contentHead from './contentHead.vue'
    import BackTop from '../BackTop.vue'
    export default {
        name: 'ContentList',
        components: {
            contentHead,
            BackTop
        },
        data () {
            return {
                tableData: [{
                    title: '重庆市商务委员会关于做好我市国家电子商务示范基地综合评价和优秀电子商务园区推荐工作的通知',
                    type:'申报通知',
                    source: '外经处',
                    publisher: '李小红',
                    publicity: '2019-08-25 10:00~2019-09-24 10:00',
                    time:'2019-08-25 10:00'
                },{
                    title: '重庆市商务委员会关于做好我市国家电子商务示范基地综合评价和优秀电子商务园区推荐工作的通知',
                    type:'申报通知',
                    source: '外经处',
                    publisher: '李小红',
                    publicity: '2019-08-25 10:00~2019-09-24 10:00',
                    time:'2019-08-25 10:00'
                }]
            }
        },
        methods:{
            jumpDetail(){
                this.$router.push({
                    path:'/content/ContentDetail'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ContentList-box {
        background-color: #f0f2f5;
        min-height: 100vh;
        .list-nav {
            margin-top: 10px;
            height: 50px;
            border: 1px solid rgba(233, 233, 233, 1);
            background-color: #ffffff;
            .title-left {
                margin-left: 90px;
                display: inline-block;
                float: left;
                padding-left: 20px;
                padding-top: 15px;
                font-size: 12px;
                color: rgb(153, 153, 153);
                .immigration:hover {
                    color: #383838;
                    cursor:pointer;
                }
                .next {
                    margin: 0 10px;
                }
            }
            .title-right {
                display: inline-block;
                float: right;
                padding-top: 15px;
                padding-right: 180px;
                color: rgb(153, 153, 153);
                span:first-child {
                    margin-right: 15px;
                }
                .immigration:hover {
                    color: #383838;
                    cursor:pointer;
                }
            }
        }
        .list-search {
            width: 85%;
            height: 95px;
            margin: 10px auto;
            border: 1px solid rgb(233,233,233);
            background-color: #ffffff;
            div {
                float: left;
                line-height: 95px;
                margin-left: 10px;
                .input {
                    margin-left: 15px;
                    width: 180px;
                    height: 35px;
                }
                .btn {
                    margin-left: 10px;
                }
            }

        }
        .list-table {
            width: 85%;
            margin: 10px auto;
            min-height: 350px;
            background-color: #ffffff;
            border: 1px solid rgb(233,233,233);
            border-top: none;
            .iconfont {
                font-size: 13px;
                color: #0079EF;
                font-weight: bold;
                cursor: pointer;
            }
            .table {
                .table-row {
                    color: #666666;
                    &:hover {
                        cursor: pointer;
                        color: #409EFF;
                        text-decoration: underline;
                    }
                }
            }
            .pagination {
                text-align: right;
                margin: 10px 10px 5px 0;
            }
        }

        .footer{
            height: 100px;
            font-size: 12px;
            color: #cccccc;
            margin-top: 50px;
            p {
                margin-bottom: 5px;
            }
        }

    }
</style>
