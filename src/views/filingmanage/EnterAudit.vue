<template>
    <div class="EnterAudit">
        <div class="EnterAudit-box">
            <AddEditor :judge="judge"  @addEditor="addEditor"></AddEditor>
        </div>
        <div class="auditResult">
            <div class="audit-radio">
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
                        <el-button type="primary" icon="el-icon-circle-check">提交</el-button>
                        <el-button plain icon="el-icon-close">取消</el-button>
                        <el-button type="info" plain icon="el-icon-tickets" @click="dialogExamine = !dialogExamine">
                            历史审核意见
                        </el-button>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog
                class="DialogOpinion"
                title="审核意见"
                :visible.sync="dialogExamine"
                width="35%"
                :modal="false">
            <div class="block">
                <el-timeline style="margin-top: 16px">
                    <div class="bigdiv">
                        <div v-for="(item,index) in activities" :key="index">
                            <el-timeline-item color="#0079fe" style="height: 20px;margin-top: -12px">
                                <div style="position: relative;height: 60px;">
                                    <img src="../../assets/images/date.png"
                                         style="width: 94px;height: 75px;position: absolute;left: -13px;top:-28px;">
                                    <span style="position: absolute;left:26px;color: white;font-size: 12px;">{{item.dates.slice(5,10)}}</span>
                                </div>
                            </el-timeline-item>
                            <el-timeline-item
                                    v-for="(itemList,indexs) in item.list"
                                    :key="indexs"
                                    :color="itemList.color">

                                <div class="smalldiv">
                                    <p>
                                      <span>
                                            {{itemList.name}}&nbsp&nbsp&nbsp
                                            <span
                                                    :class="{'bcolor':itemList.audit.search('通过')!=-1,'rcolor':itemList.audit.search('不同意')!=-1||itemList.audit.search('修改')!=-1}">{{itemList.audit}}
                                            </span>
                                        </span>
                                        <span style="color: #999999;font-size: 12px;float: right;margin-right: 20px">
                                          <img src="../../assets/images/clock.png" width="14px"
                                               style="vertical-align: -8%"/>
                                            {{itemList.timestamp}}
                                      </span>
                                    </p>
                                    <p style="color: #999999;">{{itemList.content}}</p>
                                    <p style="font-size:12px">来自部门: <span style="color: #999999;">{{itemList.department}}</span>
                                    </p>

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
    // @ is an alias to /src
    import AddEditor from './AddEditor.vue'

    export default {
        name: 'EnterAudit',
        components: {
            AddEditor
        },
        data() {
            return {
                judge: 1,
                radio: 0,
                textarea: '',
                dialogExamine: false,
                dateTitle: '2018-04-03',
                activities: [{
                    dates: '2018-04-03', list: [{
                        content: '支持使用图标',
                        timestamp: '2018-04-3 20:46',
                        size: 'large',
                        color: '#0079fe',
                        department: ' 万州区商务部',
                        name: '张三',
                        audit: '区主管部门审核(审核通过)'
                    }, {
                        content: '支持使用图标',
                        timestamp: '2018-04-3 20:47',
                        size: 'large',
                        color: '#0079fe',
                        department: ' 万州区商务部',
                        name: '张三',
                        audit: '区主管部门审核(退回修改)'
                    }
                    ]
                },
                    {
                        dates: '2018-04-04', list: [{
                            content: '支持使用图标',
                            timestamp: '2018-04-4 20:46',
                            size: 'large',
                            color: '#0079fe',
                            department: ' 万州区商务部',
                            name: '张三',
                            audit: '区主管部门审核(不同意申报)'
                        }, {
                            content: '支持使用图标',
                            timestamp: '2018-04-4 20:47',
                            size: 'large',
                            color: '#0079fe',
                            department: ' 万州区商务部',
                            name: '张三',
                            audit: '区主管部门审核(审核通过)'
                        }, {
                            content: '支持使用图标',
                            timestamp: '2018-04-4 20:48',
                            size: 'large',
                            color: '#0079fe',
                            department: ' 万州区商务部',
                            name: '张三',
                            audit: '区主管部门审核(审核通过)'
                        }, {
                            content: '支持使用图标',
                            timestamp: '2018-04-4 20:49',
                            size: 'large',
                            color: '#0079fe',
                            department: ' 万州区商务部',
                            name: '张三',
                            audit: '区主管部门审核(审核通过)'
                        }
                        ]
                    }
                ]
            }
        },
        methods:{
            addEditor(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .EnterAudit {
        padding: 10px 30px 0;
        background-color: #f0f2f5;
        min-height: 100vh;
        color: #666666;

        .EnterAudit-box {
            overflow: auto;
            height: 485px;
        }

        .auditResult {
            height: 340px;
            margin-top: 15px;
            padding: 40px 30px;
            background-color: #ffffff;

            .audit-radio {
                text-align: left;

                span {
                    margin-right: 20px;
                    color: #666666;
                    font-size: 16px;
                }

                .describe {
                    margin-top: 20px;

                    .btns {
                        margin-top: 20px;
                        text-align: center;
                    }
                }
            }
        }

        .bigdiv {
            height: 305px;
            overflow: scroll;
            overflow-x: visible;
            padding-left: 10px;
            padding-right: 30px;
            padding-top: 20px;

            .smalldiv {
                height: 120px;
                border: 1px solid #d7e8f4;
                background-color: #f7fbfe;
                padding-top: 10px;
                text-align: left;
                padding-left: 20px;

                p {
                    line-height: 35px;
                }
            }
        }
    }
</style>

<style lang="scss">
    .EnterAudit {
        .el-radio {
            color: #999999;
        }

        .DialogOpinion {
            .el-dialog {

                height: 446px;
                overflow: visible;
            }

            .el-dialog__body {
                padding: 0;
            }

            .el-dialog__header {
                background-color: #f2f2f2;
                padding: 14px;
                color: #666666;
                text-align: left;

                .el-dialog__title {
                    font-size: 14px;
                    font-weight: bold;
                    margin-left: 20px;
                }
            }
        }

        .DialogOpinion {
            overflow: visible !important;
        }
    }
</style>
