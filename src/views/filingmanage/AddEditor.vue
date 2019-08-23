<template>
    <div class="AddEditor-box">
        <div class="AddEditor-title">
            <p class="idCode">编号：43435454545</p>
            <h3>节能技术改造补贴-项目申请书（2019年）</h3>
            <p class="subhead">
                <span>申报单位：<span>深圳市xxxx技有限公司</span></span>
                <span>项目负责人：<span>李小红</span></span>
                <span>更新时间：<span>2019-04-15 12:00</span></span>
            </p>
            <el-row class="btns">
                <el-button plain size="medium" @click="saveApplication" v-if="judge==0"><span class="iconfont">&#xe6c4;</span>保存申请书</el-button>
                <el-button plain size="medium" @click="dialogVisible = !dialogVisible"><span class="iconfont">&#xe604;</span>下载PDF</el-button>
                <el-button plain size="medium" @click="submitDialog = !submitDialog" v-if="judge==0"><span class="iconfont">&#xe611;</span>提交申请书</el-button>
                <el-button plain size="medium" @click="confirmation = !confirmation"><span class="iconfont">&#xe623;</span>关闭申请书</el-button>
            </el-row>
        </div>
        <div class="AddEditor-nav">
            <el-steps :active="active" finish-status="success"  simple>
                <el-step title="项目信息" icon="el-icon-s-flag"></el-step>
                <el-step title="单位信息" icon="el-icon-s-check"></el-step>
                <el-step title="信用承诺书" icon="el-icon-reading"></el-step>
                <el-step title="附件清单" icon="el-icon-s-order"></el-step>
            </el-steps>
        </div>

        <div class="content">
            <el-row>
                <!--项目信息-->
                <el-col v-if="active == 0">
                    <p class="tag"><span class="iconfont">&#xe724;</span> 项目基本情况（单位：万元）</p>
                    <table border="1" class="table-content">
                        <tr>
                            <td class="combine"><span v-if="judge==0">*</span>项目名称</td>
                            <td  colspan="3">
                                <div v-if="judge!=0" style="text-align: left;padding: 0 30px">{{msg}}</div>
                                <el-input v-model="companyName" clearable size="small" class="lang-input" v-if="judge==0"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td class="combine"><span v-if="judge==0">*</span>项目类别</td>
                            <td colspan="3">
                                <div>
                                    <div v-if="judge!=0" style="text-align: left;padding: 0 30px">{{msg}}</div>
                                    <el-input v-model="companyName" clearable size="small" class="lang-input" v-if="judge==0"></el-input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="combine">申报单位</td>
                            <td>
                                <div>
                                    重庆xxxxx有限公司
                                </div>
                            </td>
                            <td class="combine"><span v-if="judge==0">*</span>项目所在地</td>
                            <td style="width: 240px">
                                <div>
                                    <div v-if="judge!=0">{{msg}}</div>
                                    <el-select v-model="companyName" class="select-input" clearable size="small" v-if="judge==0">
                                        <el-option
                                                v-for="(item,index) in companyName"
                                                :key="index"
                                                :label="index"
                                                :value="index">
                                        </el-option>
                                    </el-select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="combine"><span v-if="judge==0">*</span>项目内容</td>
                            <td colspan="3" height="100px">
                                <div class="content-show" v-if="judge!=0">{{msg}}</div>
                                <div  v-if="judge==0">
                                    <el-input
                                            style="width: 870px;"
                                            type="textarea"
                                            placeholder="请输入内容"
                                            v-model="companyName">
                                    </el-input>
                                </div>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td rowspan="7"><span v-if="judge==0">*</span>项目预期绩效指标</td>
                            <td rowspan="2">产出指标</td>
                            <td>如：营业面积</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13"   v-if="judge==0"></el-input>
                               <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td >如：商品种类</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13" v-if="judge==0"></el-input>
                                <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td rowspan="4">效益指标</td>
                            <td>如：税收</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13" v-if="judge==0"></el-input>
                                <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td>如：就业人数</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13" v-if="judge==0"></el-input>
                                <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td>如：社零完成额</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13" v-if="judge==0"></el-input>
                                <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td>如：进出口额</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13" v-if="judge==0"></el-input>
                                <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td>满意度指标</td>
                            <td>如：顾客满意度</td>
                            <td class="input-box">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" maxlength="13" v-if="judge==0"></el-input>
                                <span class="input-compare" :class="{'compareNum':compareNum>companyName}">({{compareNum}})</span>
                                <span>人民币</span>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td rowspan="2"> <span v-if="judge==0">*</span>项目投资（万元）</td>
                            <td>自有资金</td>
                            <td class="input-box" colspan="2">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input medium-input" size="small" v-if="judge==0"></el-input>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td>其他资金</td>
                            <td class="input-box" colspan="2">
                                <div class="td-show" v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input medium-input" size="small" v-if="judge==0"></el-input>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td rowspan="2"><span v-if="judge==0">*</span>已获财政支持金额（万元）</td>
                            <td>中央</td>
                            <td>市</td>
                            <td>市区县（自治县)</td>
                        </tr>
                        <tr class="combine combine-input">
                            <td class="input-box input-account">
                                <div v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" v-if="judge==0"></el-input>
                            </td>
                            <td class="input-box input-account">
                                <div v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" v-if="judge==0"></el-input>
                            </td>
                            <td class="input-box input-account">
                                <div v-if="judge!=0">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input" size="small" v-if="judge==0"></el-input>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td><span v-if="judge==0">*</span>本次申请资金（万元）</td>
                            <td class="input-box" colspan="3">
                                <div v-if="judge!=0" style="text-align: left;">{{msg}}</div>
                                <el-input v-model="companyName" placeholder="请输入内容" class="input lang-input" style="position: relative;right: 35px" size="small" v-if="judge==0"></el-input>
                            </td>
                        </tr>
                        <tr class="combine">
                            <td><span v-if="judge==0">*</span>项目实施起止年月</td>
                            <td class="input-box" colspan="3" style="text-align: left">
                                <div v-if="judge!=0">{{msg}}</div>
                                <el-date-picker
                                        v-if="judge==0"
                                        style="margin-left: 15px;"
                                        v-model="companyName"
                                        type="monthrange"
                                        range-separator="至"
                                        start-placeholder="开始月份"
                                        end-placeholder="结束月份">
                                </el-date-picker>
                            </td>
                        </tr>
                    </table>
                    <p class="tag"><span class="iconfont">&#xe724;</span> 项目负责人信息</p>
                    <table class="table-content" border="1px">
                        <tr  class="combine">
                            <td class="combine-text">姓名</td>
                            <td>
                                <div>
                                    张三
                                </div>
                            </td>
                            <td class="combine-text">性别</td>
                            <td>
                                <div>
                                    女
                                </div>
                            </td>
                        </tr>
                        <tr  class="combine">
                            <td class="combine-text">电子邮箱</td>
                            <td>
                                <div>
                                    123456@qq.com
                                </div>
                            </td>
                            <td class="combine-text">联系电话</td>
                            <td>
                                <div>
                                    023-4144646
                                </div>
                            </td>
                        </tr>
                        <tr  class="combine">
                            <td class="combine-text">手机</td>
                            <td>
                                <div>
                                    15988888888
                                </div>
                            </td>
                            <td class="combine-text">证件类型</td>
                            <td>
                                <div>
                                    身份证
                                </div>
                            </td>
                        </tr>
                        <tr  class="combine">
                            <td class="combine-text">证件号码</td>
                            <td>
                                <div>
                                    500015146416464
                                </div>
                            </td>
                            <td class="combine-text">职称</td>
                            <td>
                                <div>
                                    工程师
                                </div>
                            </td>
                        </tr>
                    </table>
                </el-col>
                <!--单位信息-->
                <el-col v-if="active == 1">
                    <p class="tag"><span class="iconfont">&#xe724;</span>单位基本情况</p>
                    <table class="table-content" border="1px">
                        <tr>
                            <td class="content-left">单位名称</td>
                            <td class="content-right">
                                <div class="content-box">
                                    重庆xxxxx有限公司
                                </div>
                            </td>
                            <td class="content-left">统一社会信用代码</td>
                            <td class="content-right">
                                <div class="content-box">
                                    1212121221
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">注册类型</td>
                            <td class="content-right">
                                <div class="content-box">
                                    企业单位
                                </div>
                            </td>
                            <td class="content-left">成立年月</td>
                            <td class="content-right">
                                <div class="content-box">
                                    YYYY-MM-DD
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">注册地址</td>
                            <td class="content-right">
                                <div class="content-box">
                                    重庆重庆重庆重庆重庆重庆重庆重庆重庆
                                </div>
                            </td>
                            <td class="content-left">所属区县</td>
                            <td class="content-right">
                                <div class="content-box">
                                    九龙坡区
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">注册资本</td>
                            <td class="content-right">
                                <div class="content-box">
                                    壹佰万元整
                                </div>
                            </td>
                            <td class="content-left">单位电话</td>
                            <td class="content-right">
                                <div class="content-box">
                                    023-88787787
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">开户银行</td>
                            <td class="content-right">
                                <div class="content-box">
                                    中国银行
                                </div>
                            </td>
                            <td class="content-left">银行信用等级</td>
                            <td class="content-right">
                                <div class="content-box">
                                    满级
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">开户户名</td>
                            <td class="content-right">
                                <div class="content-box">
                                    中国银行渝中支行
                                </div>
                            </td>
                            <td class="content-left">银行账号</td>
                            <td class="content-right">
                                <div class="content-box">
                                    121213131414
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">电子邮箱</td>
                            <td class="content-right">
                                <div class="content-box">
                                    12131313@qq.com
                                </div>
                            </td>
                            <td class="content-left">邮箱编码</td>
                            <td class="content-right">
                                <div class="content-box">
                                    232323
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">单位网址</td>
                            <td class="content-right">
                                <div class="content-box">
                                    baidu.com
                                </div>
                            </td>
                            <td class="content-left">单位传真</td>
                            <td class="content-right">
                                <div class="content-box">
                                    baidu.com
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">经营范围</td>
                            <td class="content-right" colspan="3" height="100px">
                                <div class="content-box content-text">
                                    经验范围
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">单位简介</td>
                            <td class="content-right" colspan="3" height="100px">
                                <div class="content-box content-text">
                                    单位简介
                                </div>
                            </td>
                        </tr>
                    </table>
                    <p class="tag"><span class="iconfont">&#xe724;</span>单位联系人信息</p>
                    <table class="table-content" border="1px">
                        <tr class="content-title">
                            <td>人员类型</td>
                            <td>姓名</td>
                            <td>学历</td>
                            <td>手机</td>
                            <td>联系电话</td>
                            <td>证件类型</td>
                            <td>证件号</td>
                            <td>职称</td>
                        </tr>
                        <tr class="content-input">
                            <td>法人代表</td>
                            <td>张三</td>
                            <td>本科</td>
                            <td>18888888888</td>
                            <td>023-888888</td>
                            <td>护照</td>
                            <td>15151515151</td>
                            <td>工程师</td>
                        </tr>
                        <tr class="content-input">
                            <td>联系人</td>
                            <td>李四</td>
                            <td>本科</td>
                            <td>18888888888</td>
                            <td>023-888888</td>
                            <td>护照</td>
                            <td>15151515151</td>
                            <td>工程师</td>
                        </tr>
                    </table>
                    <p class="tag"><span class="iconfont">&#xe724;</span>员工人数</p>
                    <table  class="table-content" border="1px">
                        <tr class="people-table">
                            <td>员工人数（人）</td>
                            <td colspan="3">21</td>
                        </tr>
                        <tr class="people-table">
                            <td>参加社保人数（人）</td>
                            <td>33</td>
                            <td>留学归国人数（人）</td>
                            <td>44</td>
                        </tr>
                        <tr class="people-table">
                            <td>外籍专家人数（人）</td>
                            <td>63</td>
                            <td>新增高校毕业人数（人）</td>
                            <td>25</td>
                        </tr>
                        <tr class="people-table">
                            <td>直接从事研发人员数（人）</td>
                            <td>12</td>
                            <td>占员工总数比例（%）</td>
                            <td>21%</td>
                        </tr>
                        <tr class="people-table">
                            <td>本科以上研发人员数（人）</td>
                            <td>32</td>
                            <td>占员工总数比例（%）</td>
                            <td>21%</td>
                        </tr>
                    </table>
                    <p class="tag">
                        <span class="iconfont">&#xe724;</span>近三年经营情况
                    </p>

                    <table class="table-content" border="1">
                        <thead>
                            <tr class="content-title">
                                <th>序号</th>
                                <th>年份</th>
                                <th>收入（万元）</th>
                                <th>利润（万元）</th>
                                <th>税金（万元）</th>
                                <th>资产负债率（%）</th>
                                <th>备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="content-input" v-for="(item,index) in tableYear" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{item.year}}</td>
                                <td>{{item.income}}</td>
                                <td>{{item.profit}}</td>
                                <td>{{item.taxes}}</td>
                                <td>{{item.liabilities}}</td>
                                <td rowspan="3"  v-if="index==0" width="146px"> <!--循环后备注框会出现多次，根据index进行判断-->
                                    <div style="width: 146px;height: 126px;margin: 10px auto;overflow: auto;word-wrap:break-word;"  v-if="judge!=0">{{msg}}</div>
                                    <el-input
                                            v-if="judge==0"
                                            style="width: 160px"
                                            type="textarea"
                                            :rows="5"
                                            placeholder="请输入内容"
                                            v-model="input">
                                    </el-input>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="tag">
                        <span class="iconfont">&#xe724;</span> 资质证书名称及编号
                    </p>
                    <el-table
                            stripe
                            border
                            :data="aptitudeTable"
                            style="width: 95%;margin: -5px auto">
                        <el-table-column
                                align="center"
                                width="120px"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="certificate"
                                label="资质证书名称">
                        </el-table-column>
                        <el-table-column
                                width="497px"
                                align="center"
                                prop="serialNumber"
                                label="编号">
                        </el-table-column>
                    </el-table>
                </el-col>
                <!--信仰承诺书-->
                <el-col v-if="active == 2">
                    <p class="tag"><span class="iconfont">&#xe724;</span>专项资金项目申报信用承诺书</p>
                    <table class="table-content" border="1px">
                        <tr>
                            <td class="content-left">项目申报单位</td>
                            <td class="content-right">
                                <div class="content-box">重庆xxxxx有限公司</div>
                            </td>
                            <td class="content-left">统一社会信用代码</td>
                            <td class="content-right">
                                <div class="content-box">1212121221</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">法定代表人</td>
                            <td class="content-right">
                                <div class="content-box">
                                    张三
                                </div>
                            </td>
                            <td class="content-left">法人身份证号码</td>
                            <td class="content-right">
                                <div class="content-box">3131313133</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">项目名称</td>
                            <td class="content-right">
                                <div class="content-box">xxxxxx项目</div>
                            </td>
                            <td class="content-left">申报依据</td>
                            <td class="content-right">
                                <div class="content-box" v-if="judge!=0">{{msg}}</div>
                                <div class="content-box" v-if="judge==0">
                                    <el-input v-model="input" clearable size="small"></el-input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">项目总投资额</td>
                            <td class="content-right">
                                <div class="content-box">424.0000万元</div>
                            </td>
                            <td class="content-left">申请财政资金</td>
                            <td class="content-right">
                                <div class="content-box">424.0000万元</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">项目责任人</td>
                            <td class="content-right">
                                <div class="content-box">李四</div>
                            </td>
                            <td class="content-left">联系电话</td>
                            <td class="content-right">
                                <div class="content-box">1559343434</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span v-if="judge==0">*</span>项目所在地</td>
                            <td class="content-right">
                                <div class="content-box" v-if="judge!=0">{{msg}}</div>
                                <div class="content-box">
                                    <el-select v-model="input" placeholder="请选择" v-if="judge==0">
                                        <el-option
                                                v-for="(item,index) in fundTable"
                                                :key="index"
                                                :value="index">
                                        </el-option>
                                    </el-select>
                                </div>
                            </td>
                            <td></td><td></td>

                        </tr>
                    </table>
                    <p class="tag"><span class="iconfont">&#xe724;</span>申报项目已获得财政资金补助情况</p>
                    <el-table
                            border
                            stripe
                            :data="fundTable"
                            style="width: 95%;margin: -5px auto">
                        <el-table-column
                                width="55px"
                                align="center"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                width="55px"
                                align="center"
                                prop="years"
                                label="年度">
                        </el-table-column>

                        <el-table-column
                                align="center"
                                prop="projectName"
                                label="项目名称">
                        </el-table-column>
                        <el-table-column
                                width="140px"
                                align="center"
                                prop="branchName"
                                label="拨付补助资金业务部门名称">
                        </el-table-column>
                        <el-table-column
                                width="140px"
                                align="center"
                                prop="sectorName"
                                label=" 拨付补助资金财政部门名称">
                        </el-table-column>
                        <el-table-column label="政府扶持资金（万元）" align="center" width="363.2px">
                            <el-table-column
                                    width="89.6px"
                                    align="center"
                                    prop="subsidy"
                                    label="补助金额">
                            </el-table-column>
                            <el-table-column
                                    width="69.6px"
                                    align="center"
                                    prop="central"
                                    label="中央">
                            </el-table-column>
                            <el-table-column
                                    width="69.6px"
                                    align="center"
                                    prop="county"
                                    label=" 市级">
                            </el-table-column>
                            <el-table-column
                                    width="134.6px"
                                    align="center"
                                    prop="city"
                                    label="区县(自治县)级">
                            </el-table-column>
                        </el-table-column>
                        <el-table-column
                                width="312px"
                                align="center"
                                prop="schedule"
                                label="项目进度">
                        </el-table-column>
                    </el-table>
                    <div class="detail">
                        <p>项目申报单位承诺：</p>
                        <p>1.本单位近三年信用状况良好，无严重失信行为。</p>
                        <p>2.申报的所有材料均依据相关项目申报要求，据实提供。</p>
                        <p>3.专项资金获批后将按规定使用。</p>
                        <p>4.如违背以上承诺，愿意承担相关责任，并在规定时限内退回补助资金。</p>
                    </div>
                </el-col>
                <!--附件清单-->
                <div v-if="active == 3">
                    <p class="tag"><span class="iconfont">&#xe724;</span>注意事项</p>
                    <div class="tag-detail">
                        <p class="tag-top">1）下表附件，请按照附件文件的要求，每条记录以一个文件形式上传，如果有多个文件则请先合并为一个文件后再上传；</p>
                        <p class="tag-top">2）每个附件材料的复印件或原件，以彩色扫描或拍照的形式，确保足够清晰、可辨，否则将影响单位信息的审核，直至专项资金的审批拨付；</p>
                        <p class="tag-top">3）递交纸质材料时，提供系统打印的申请书纸质文件，连同以上附件材料（一式两份，A4规格，正反面打印，附有目录及页面，胶装成册），签字盖章后报送主管部门指定受理地点；</p>
                        <p class="tag-top">4）递交纸质材料时，受理部门校验以上附件材料的原件</p>
                    </div>
                        <el-table
                                class="business-table"
                                stripe
                                border
                                :data="accessoryTable"
                                style="width: 95%;margin: -5px auto">
                            <el-table-column
                                    width="50px"
                                    align="center"
                                    type="index"
                                    label="序号">
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop="file"
                                    label="附件文件">
                                <template slot-scope="scope">
                                    <div>{{scope.row.file.length>25?scope.row.file.substring(0,15)+'...':scope.row.file}}</div>
                                </template>

                            </el-table-column>
                            <el-table-column
                                    width="125px"
                                    align="center"
                                    prop="isNO"
                                    label="是否必备材料">
                            </el-table-column>
                            <el-table-column
                                    width="260px"
                                    align="center"
                                    label="查看">
                                <template slot-scope="scope">
                                    <div style="text-decoration: underline;color: #0079FE;cursor: pointer">{{scope.row.checkFile}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    :width="judge==1?'498.4px':'276px'"
                                    align="center"
                                    prop="time"
                                    label="上传时间">
                            </el-table-column>
                            <el-table-column
                                width="165.6px"
                                v-if="judge==0"
                                align="center"
                                label="操作">
                            <span class="iconfont">&#xe666; <span>上传</span></span>&#8197;
                            <span class="iconfont">&#xe68d; <span>删除</span></span>
                        </el-table-column>

                        </el-table>
                </div>

                <div style="float: left;margin: 20px 0 50px 30px">
                    <el-button  type="primary" size="medium" v-if="active>0" @click="lastStep">向后<span class="el-icon-arrow-left"></span></el-button>
                    <el-button  type="primary" size="medium" @click="nextStep" v-if="active !=3">向前<span class="el-icon-arrow-right"></span></el-button>
                </div>
            </el-row>

        </div>

        <el-dialog
                title="信息提示"
                align="left"
                :visible.sync="dialogVisible"
                width="30%">
            <span class="iconfont" style="font-size: 32px;color: #FF3B30;margin-left: 20px;height: 32px">&#xe613;</span>
            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">申请书未完善无法下载PDF文件！</span>
            <p style="padding-left: 65px;font-size: 14px;color: #999999">请先完善申请书内容</p >
            <span slot="footer" class="dialog-footer">
                <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                  <el-button type="primary" @click="dialogVisible = false" size="small">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
                title="警示提示"
                align="left"
                :visible.sync="submitDialog"
                width="30%">
            <span class="iconfont" style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe72d;</span>
            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">绩效指标未达到规定目标值</span>
            <p style="padding-left: 65px;font-size: 14px;color: #999999">是否继续提交申请书</p >
            <span slot="footer">
                <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                 <el-button  @click="submitDialog = false" size="small">取 消</el-button>
                 <el-button type="primary" @click="submit" size="small">继 续 提 交</el-button>
            </span>
        </el-dialog>

        <el-dialog
                title="选择区县部门"
                align="left"
                :modal="false"
                :visible.sync="submitChange"
                width="30%">
                <p class="el-icon-remove-outline submitChange">公司名称</p>
            <el-checkbox-group v-model="checkList" class="submitChange">
                <ul>
                    <li><el-checkbox label="总裁办"></el-checkbox></li>
                    <li><el-checkbox label="技术部"></el-checkbox></li>
                    <li><el-checkbox label="销售部"></el-checkbox></li>
                    <li><el-checkbox label="人事部"></el-checkbox></li>
                    <li><el-checkbox label="财务部"></el-checkbox></li>
                    <li><el-checkbox label="市场部"></el-checkbox></li>
                </ul>
            </el-checkbox-group>
            <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
            <div style="margin: 3px 5px 0 300px">
                <el-button size="small" @click="submitChange = !submitChange">取 消</el-button>
                <el-button type="primary" size="small" @click="submitChange = !submitChange">提 交</el-button>
            </div>
        </el-dialog>

        <el-dialog
                title="确认提示"
                align="left"
                :visible.sync="confirmation"
                width="30%">
            <span class="iconfont" style="font-size: 32px;color: #FE9400;margin-left: 20px;height: 32px">&#xe8c8;</span>
            <span style="color: #666666;font-size: 17px;vertical-align: 25%;margin-left: 10px">关闭申请书同时是否保存申请书？</span>
            <p style="padding-left: 65px;font-size: 14px;color: #999999">直接关闭则不保存输入内容？</p >
            <span slot="footer">
                <div style="height: 1px;background-color: #e4e4e4;margin-bottom: 10px"></div>
                 <el-button  @click="addDeclare" size="small">直 接 关 闭</el-button>
                 <el-button type="primary" @click="confirmation = !confirmation" size="small">同 时 保 存</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name:'AddEditor',
        props:{
            judge:Number,
            // judgeBack:Number,
        },
        data(){
            return {
                judgeBack:0,
                msg:'show',// 显示信息 暂时
                compareNum:785, // 输入框内初始数字大小
                input:0,    // input输入框绑定
                active:0, // 步骤条默认
                dialogVisible:false, // dialog弹出框
                submitDialog:false, // dialog弹出框
                submitChange:false, // dialog弹出框
                confirmation:false, // dialog弹出框
                checkList: ['选中且禁用','复选框 A'], //弹出框复选框
                companyName: '', // 显示信息 暂时
                tableYear:[{
                    year:2019,//
                    income:33,//
                    profit:55,//
                    taxes:66,//
                    liabilities:77,//
                },{
                    year:2019,//
                    income:33,//
                    profit:55,//
                    taxes:66,//
                    liabilities:77,//
                },{
                    year:2019,//
                    income:33,//
                    profit:55,//
                    taxes:66,//
                    liabilities:77,//
                }], // 经营情况表
                aptitudeTable:[{
                    certificate:'名称名称',//
                    serialNumber:'31313141441',//
                },{
                    certificate:'名称名称',//
                    serialNumber:'31313141441',//
                }], //证书名称表
                fundTable:[{
                    years:2019,
                    projectName:'名称名称',
                    branchName:'财政部',
                    sectorName:'财政部',
                    subsidy:'68.00',
                    central:'68.00',
                    county:'68.00',
                    city:'68.00',
                    schedule:'在建'
                },{
                    years:2019,
                    projectName:'名称名称',
                    branchName:'财政部',
                    sectorName:'财政部',
                    subsidy:'68.00',
                    central:'68.00',
                    county:'68.00',
                    city:'68.00',
                    schedule:'在建'
                }], //申报项目已获得财政资金补助情况表
                // 注意事项表
                accessoryTable:[{
                    file:'企业营业执照、组织机构代码证、税务登记证（正、副本）复印件（加盖鲜章）或社会统一信用代码',
                    isNO:'是',
                    checkFile:'社会统一信用代码.pdf    ',
                    time:'2019-09-02 11:11:11'
                },{
                    file:'企业营业执照、组织机构代码证、税务登记证（正、副本）复印件（加盖鲜章）或社会统一信用代码',
                    isNO:'',
                    checkFile:'社会统一信用代码.pdf    ',
                    time:'2019-09-02 11:11:11'
                },{
                    file:'企业营业执照、组织机构代码证、税务登记证（正、副本）复印件（加盖鲜章）或社会统一信用代码',
                    isNO:'',
                    checkFile:'社会统一信用代码.pdf    ',
                    time:'2019-09-02 11:11:11'
                },{
                    file:'企业营业执照、组织机构代码证、税务登记证（正、副本）复印件（加盖鲜章）或社会统一信用代码',
                    isNO:'',
                    checkFile:'社会统一信用代码.pdf    ',
                    time:'2019-09-02 11:11:11'
                }]
            }
        },
        methods:{
            nextStep(){ //向前
                if (this.active++ >2) this.active = 0;
            },
            lastStep (){//向后
                if (this.active-- <1) this.active = 0;
            },
            submit() {  // 提交申请书显示
                this.submitDialog = !this.submitDialog;
                this.submitChange = !this.submitChange;
            },
            addDeclare(){ //关闭申请书
                this.confirmation = !this.confirmation;
                this.$emit("addEditor");
                if(this.judgeBack){
                    this.$router.go(-1);
                }
            },
            saveApplication(){ //保存申请书
                this.$message({
                    showClose: true,
                    message: '保存成功',
                    type: 'success'
                });
            }
        },
        mounted() {
            // this.judgeBack = this.$route.query.judgeBack;
        }
    }
</script>

<style lang="scss" scoped>
    .AddEditor-box {
        .AddEditor-title {
            background-color: #ffffff;
            height: 150px;
            .idCode {
                font-size: 12px;
                text-align: right;
                padding: 15px;
                padding-bottom: 0;

            }
            h3 {
                text-align: left;
                padding-left: 30px;

            }
            .subhead {
                text-align: left;
                padding: 10px 30px;
                font-size: 12px;
                color: #999999;
                span {
                    margin-right: 20px;
                }
            }
            .btns {
                text-align: left;
                margin: 5px 30px;
            }

        }
        .AddEditor-nav {
            margin-top: 10px;
            background-color: #ffffff;
        }
        .content {
            background-color: #ffffff;
            margin-top: 10px;
            .tag {
                text-align: left;
                font-size: 14px;
                font-weight: bold;
                height: 38px;
                margin: 20px 0 10px 30px;
            }
            .tag-detail{
                margin-top: -15px; ;
                margin-bottom: 10px;
                .tag-top {
                    text-align: left;
                    font-size: 12px;
                    margin-left: 30px;
                    padding-bottom: 5px;
                }
            }
            .table-content {
                font-size: 14px;
                width: 95%;
                margin: 0 auto;
                border-collapse: collapse;
                border: 1px solid #e9e9e9;
                color: #666666;
                td,th {
                    border: 1px solid #e9e9e9;
                    width: 200px;
                }
                tr:nth-of-type(odd){
                    background-color: #f9f9f9;
                }
                .combine {
                    text-align: center;

                    height: 50px;
                    font-size: 14px;
                    .content-show {
                        width: 940px;
                        height: 70px;
                        margin: 0 auto;
                        overflow: auto
                    }
                    span {
                        margin: 3px;
                        color: #FF3B30;
                    }
                    .input-box {
                        width: 340px;
                        text-align: center;
                       padding-left: 20px;
                        position: relative;
                        .input-compare {
                            position: absolute;
                            top:15px;
                            right: 110px;
                            color: #999999;
                        }
                        .td-show {
                            text-align: right;
                            width: 170px;
                            padding-top: 5px;
                            position: relative;
                            left: 30px;
                        }
                        .compareNum {
                            color: #b01a45;
                        }
                        .input {
                            width: 180px;
                        }
                        .lang-input {
                            width: 900px;
                        }
                        .medium-input {
                            width: 600px;
                        }
                        span {
                            position: absolute;
                            right: 20px;
                            top: 13px;
                            color: #666666;
                        }
                    }
                    .input-account {
                        text-align: center;
                    }
                    .combine-text {
                        text-align: right;
                        padding-right: 20px;
                    }
                    .combine-text+td {
                        text-align: left;
                        padding-left: 20px;
                    }
                }
                .lang-input {
                    width: 900px;
                }
                .select-input {
                    width: 300px;
                }
                .content-left {
                    text-align: right;
                    width: 200px;
                    height: 50px;
                    font-size: 14px;

                    padding-right: 20px;
                    span {
                        margin: 3px;
                        color: #FF3B30;
                    }
                }
                .content-right {
                    .content-box {
                        text-align: left;
                        padding: 0 15px;
                        .dateTime,.select-input,.input {
                            width: 290px;
                            margin-right: 30px;
                        }
                        .address {
                            width: 650px;
                        }
                        span {
                            font-size: 14px;
                            color: #999999;
                            line-height: 34px;
                            margin-left: 15px;
                        }
                    }
                }
                .content-title {
                    font-weight: bold;
                    font-size: 14px;
                    height: 45px;
                    td span{
                        color: red;
                        font-weight: bold;
                        margin-right: 3px;
                    }
                    .input {
                        height: 30px;
                    }
                    td:nth-child(1){
                        width: 100px;
                    }
                    td:nth-child(4){
                        width: 146px;
                    }
                    td:nth-child(5){
                        width: 146px;
                    }
                    td:nth-child(7){
                        width: 246px;
                    }
                }
                .content-input {
                    td {
                        height: 45px;
                        &:nth-child(7) .input {
                            width: 230px;
                        }
                    }
                }
                .people-table {
                    height: 50px;
                    font-size: 14px;
                    td:nth-of-type(even) {
                        text-align: left;
                        padding-left: 40px;
                    }
                }
            }
            .business-table {
                .iconfont {
                    display: inline-block;
                    color: #0079EE;
                    margin: 5px auto;
                    font-size: 18px;
                    cursor: pointer;
                    span {
                        font-size: 12px;
                        vertical-align: 10%;
                    }
                }
            }
            .detail {
                text-align: left;
                padding: 15px 30px 0;
                color: #999999;
                font-size: 14px;
                p {
                    padding-bottom: 5px;
                }
                p:not(:first-child) {
                    margin-left: 15px;
                }
            }
        }
        .submitChange {
            color: #999999;
           margin-left: 50px;
            li {
                padding: 5px;
                padding-left: 30px;
            }
        }
    }
</style>

<style lang="scss">
    .AddEditor-box {
        .el-steps {
            background-color: #ffffff;
        }
        .el-dialog__body {
            padding: 0 10px;
            padding-bottom: 10px;

        }
        li .el-checkbox {
            color: #999999;
        }
        .business-table {
            .is-center {
                padding: 5px 0;
            }
            tr {
                height: 45px;
            }
        }
        .AddEditor-nav {
            .el-step {
                -ms-flex: 1 // 解决ie10不兼容display：flex 问题
            }
            .el-step__title.is-success {
                font-weight: bold;
                color: #409eff;
            }
            .el-step__head.is-success {
                color: #409eff;
            }
        }
    }
</style>