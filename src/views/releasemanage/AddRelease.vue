<template>
    <div class="AddRelease">
        <div class="Headbg"></div>
        <div class="bigBox">
            <div class="title">
                <p class="title-left">
                    <router-link :to="{path:'/',query:{}}"><span class="iconfont immigration">&#xe600;</span></router-link>
                    <span class="iconfont next">&#xe60b;</span>
                    <span class="immigration" style="cursor: pointer" @click="next">发布列表</span>
                    <span class="iconfont next">&#xe60b;</span>
                    <span>{{spread==2?'编辑发布':'新增发布'}}</span>
                </p>

            </div>
            <div class="formContent">
                <el-form  ref="numberValidateForm" label-width="100px" :rules="rules" :model="ruleForm">
                    <el-form-item label="标题：" prop="labelText"  labelWidth="150px" style="width: 990px;">
                        <el-input  v-model="ruleForm.labelText" ></el-input>
                    </el-form-item>
                    <el-form-item label="发布类型：" labelWidth="150px">
                        <el-col :span="11">
                            <el-form-item >
                                <el-select  placeholder="选择类型" v-model="ruleForm.type" style="width: 100%;">
                                    <el-option label="申报通知" value="one"></el-option>
                                    <el-option label="结果公示" value="two"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11" :push="1">
                            <el-form-item >
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>

                    </el-form-item>
                    <el-form-item :label="spread==2?'来源：':'业务处室（来源）：'"  labelWidth="150px">
                        <el-col :span="11">
                            <el-form-item >
                                <el-select  placeholder="选择来源" style="width: 100%;" v-model="ruleForm.source">
                                    <el-option label="申报通知" value="one"></el-option>
                                    <el-option label="结果公示" value="two"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11" :push="1">
                            <el-form-item >
                                <el-input type="age" v-model="ruleForm.source" disabled ></el-input>
                            </el-form-item>
                        </el-col>

                    </el-form-item>
                    <el-form-item label="正文：" style="width: 990px;"labelWidth="150px">
                        <el-input type="textarea" v-model="ruleForm.mainBody" ></el-input>
                    </el-form-item>
                    <el-form-item label="上传附件：" style="width: 990px;"labelWidth="150px">
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action=""
                                :auto-upload="false"
                                :before-upload="beforeAvatarUpload"
                                accept=".pdf,.docx,.doc"
                        >
                            <el-button slot="trigger" size="medium" type="info" plain icon="el-icon-upload">选取文件</el-button>
                            <div slot="tip" class="el-upload__tip">支持格式：.doc .docx .pdf ，单个文件不能超过20MB</div>



                        </el-upload>
                    </el-form-item>

                    <el-form-item class="lastBtn">
                        <el-button  class="pattern" @click="submitUpload" type="primary">发布</el-button>

                        <el-button class="pattern">保存</el-button>
                        
                    </el-form-item>
                    <div style="height: 30px;"></div>
                </el-form>
            </div>
         </div>
        <div class="footerbg"></div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'AddRelease',
        components: {},
        props:{
            spread:Number // 根据spread进行判断编辑或者发布
        },
        data() {
            return {
                ruleForm: {
                    labelText:'',
                    type:'',
                    date:'',
                    source:'',
                    mainBody:''
                },
                rules: {

                    labelText:[
                        { required: true, message: '标题不能为空',trigger: 'blur'},
                     ],
                }
            };
        },
        methods: {
            submitUpload(){ // 上传
                this.$refs.upload.submit();
            },
            beforeAvatarUpload(file) { //检测上传文件类型及文件大小
                let testmsg=file.name.substring(file.name.lastIndexOf('.')+1);
                const extension = testmsg === 'doc';
                const extension2 = testmsg === 'docx';
                const isLt2M = file.size / 1024 / 1024 < 20;
                if(!extension && !extension2) {
                    this.$message({
                        message: '上传文件只能是 doc、docx格式!',
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
            },
            next(){ //返回上一步
                this.$emit("next");
            }
        },
        mounted(){}
    }
</script>
<style lang="scss" scoped>
    .AddRelease{
        width:100%;
        background-color: #f0f2f5;
        .Headbg{
            height: 30px;
            width:100%;
        }
        .bigBox{
            width: 1260px;
            margin: 0 auto;
            background-color:white;
            .title {
                height: 50px;
                border-bottom: 1px solid rgba(233, 233, 233, 1);
                a{
                    text-decoration: none;
                    color: rgb(153, 153, 153);

                }
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

            }
            .formContent{
                width:81.5%;
                margin:0px auto;
                margin-top: 50px;

                .el-textarea__inner{
                    height: 300px !important;
                }
                .lastBtn{
                    margin-left: -650px;
                    .pattern{
                        width: 85px;
                        height: 35px;

                    }
                }
            }
        }
        .footerbg{
            height: 60px;
            width:100%;
        }


    }
</style>
<style lang="scss">
    .formContent{
        .el-textarea__inner{
            height: 300px !important;
        }

         .el-button--info.is-plain:hover{
            background-color: rgba(242,242,242,1);
             color: rgb(102,102,102);
        }

        .el-button--medium{
            margin-left: -730px;
        }
        .el-upload__tip{
            text-align: left;
            font-weight: 400;
            font-size: 14px;
            font-style: normal;
            color: #999999;
        }
        .el-upload-list__item-name{
            text-align: left;
            text-decoration: underline;
            color: #0079FE;
        }
    }

</style>


