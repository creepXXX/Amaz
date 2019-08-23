<template>
    <div class="UnitInformation-box">
        <div class="UnitInformation-title">
            <span>重庆xxxxx有限公司</span>
            <span class="btns">
                <el-button type="primary" size="mini" plain @click="saveOredit = !saveOredit"  v-if="!saveOredit" class="iconfont">&#xe603; 编辑资料</el-button>
                <el-button type="primary" size="mini" plain v-if="saveOredit" @click="saveOredit = !saveOredit" class="iconfont">&#xe6c4; 保存</el-button>
                <el-button type="primary" size="mini" plain v-if="saveOredit" @click="saveOredit = !saveOredit" class="iconfont">&#xe60a; 返回</el-button>
            </span>

        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="单位基本信息" name="first">
                <el-form>
                    <table class="table-content" border="1px">
                        <tr>
                            <td class="content-left">单位名称</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="companyName" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">1111111111111111</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>统一社会信用代码</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="creditCode" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">1111111111111111</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>注册类型</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-select v-model="registerType"  class="select-input" clearable size="small" v-if="saveOredit">
                                        <el-option
                                                v-for="item in registerType"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                    <div v-if="!saveOredit">111111111111</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>成立年月</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="setUpYear" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">12321312</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>注册地址</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-select v-model="enterprise" class="select-input" clearable size="small" v-if="saveOredit">
                                        <el-option
                                                v-for="item in enterprise"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                    <div v-if="!saveOredit">00000</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>所属区县</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-select v-model="county" class="select-input" clearable size="small" v-if="saveOredit">
                                        <el-option
                                                v-for="item in county"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <div v-if="!saveOredit">111111</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>注册资本</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="capital" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">22222222222</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>单位电话</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="unitlPhone" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">1222222222222</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>开户银行</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="openBank" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">41124122</div>
                                </div>
                            </td>
                            <td class="content-left">银行信用等级</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="creditLevel" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">qqqqqqqq</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>开户户名</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="accountName" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">ddddddddd</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>银行账号</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="bankAccount" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">21313123213</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">电子邮箱</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="email" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">2222222222</div>
                                </div>
                            </td>
                            <td class="content-left"><span>*</span>邮箱编码</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="emailCode" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">2222222222</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left">单位网址</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="unitURL" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">2222222222</div>
                                </div>
                            </td>
                            <td class="content-left">单位传真</td>
                            <td class="content-right">
                                <div class="content-box">
                                    <el-input v-model="unitFax" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                    <div v-if="!saveOredit">2222222222</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>经营范围</td>
                            <td class="content-right" colspan="3" height="100px">
                                <div class="content-box content-text">
                                    <el-input
                                            v-if="saveOredit"
                                            style="width: 870px;"
                                            type="textarea"
                                            placeholder="请输入内容"
                                            maxlength="100"
                                            show-word-limit
                                            v-model="emailCode">
                                    </el-input>
                                    <div v-if="!saveOredit">2222222222</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-left"><span>*</span>单位简介</td>
                            <td class="content-right" colspan="3" height="100px">
                                <div class="content-box content-text">
                                    <el-input
                                            v-if="saveOredit"
                                            style="width: 870px;"
                                            type="textarea"
                                            placeholder="请输入内容"
                                            maxlength="100"
                                            show-word-limit
                                            v-model=" unitAbout">
                                    </el-input>
                                    <div v-if="!saveOredit">2222222222</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </el-form>
                <el-button type="primary" class="btn">保存</el-button>
            </el-tab-pane>

            <el-tab-pane label="人员基本信息" name="second">
                <el-form>
                    <table class="table-content" border="1px">
                        <tr class="content-title">
                            <td>人员类型</td>
                            <td><span>*</span>姓名</td>
                            <td><span>*</span>学历</td>
                            <td><span>*</span>手机</td>
                            <td><span>*</span>联系电话</td>
                            <td><span>*</span>证件类型</td>
                            <td><span>*</span>证件号</td>
                            <td>职称</td>
                        </tr>
                        <tr class="content-input">
                            <td>法人代表</td>
                            <td>
                                <el-input v-model="legalName"  class="input" style="width: 110px" clearable size="small"  v-if="saveOredit"></el-input>
                                <div  v-if="!saveOredit">122222</div>
                            </td>
                            <td>
                                <el-select v-model="legalEdc" placeholder="请选择" size="small"  class="input" v-if="saveOredit">
                                    <el-option
                                            v-for="item in legalEdc"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit">11111</div>
                            </td>
                            <td>
                                <el-input v-model="legalPhone" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">1111111</div>
                            </td>
                            <td>
                                <el-input v-model="legalCall"  class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">213213</div>
                            </td>
                            <td>
                                <el-select v-model="legalType" placeholder="请选择" size="small"  class="input" v-if="saveOredit">
                                    <el-option
                                            v-for="item in legalType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit">1111</div>
                            </td>
                            <td>
                                <el-input v-model="legalCard" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">5555</div>
                            </td>
                            <td>
                                <el-input v-model="legalJob" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">111</div>
                            </td>
                        </tr>
                        <tr class="content-input">
                            <td>联系人</td>
                            <td>
                                <el-input v-model="linkmanName" class="input" style="width: 110px" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">11123</div>
                            </td>
                            <td>
                                <el-select v-model="linkmanEdc" placeholder="请选择" size="small"  class="input" v-if="saveOredit">
                                    <el-option
                                            v-for="item in linkmanEdc"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit">11</div>
                            </td>
                            <td>
                                <el-input v-model="linkmanPhone" class="input" clearable size="small" v-if="saveOredit">23</el-input>
                                <div v-if="!saveOredit">222</div>
                            </td>
                            <td>
                                <el-input v-model="linkmanCall" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">444</div>
                            </td>
                            <td>
                                <el-select v-model="linkmanType" placeholder="请选择" size="small"  class="input" v-if="saveOredit">
                                    <el-option
                                            v-for="item in linkmanType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit">1312331</div>
                            </td>
                            <td>
                                <el-input v-model="linkmanCard" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">23</div>
                            </td>
                            <td>
                                <el-input v-model="linkmanJob" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit">412</div>
                            </td>
                        </tr>
                    </table>
                </el-form>
                <p class="tag"><span class="iconfont">&#xe724;</span>单位人数</p>
                <el-form>
                    <table  class="table-content" border="1px">
                        <tr class="people-table">
                            <td><span>*</span>员工人数（人）</td>
                            <td colspan="3">
                                <el-input v-model="staffNum"  class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" style="margin-left: 30px">12321312</div>
                            </td>
                        </tr>
                        <tr class="people-table">
                            <td>参加社保人数（人）</td>
                            <td>
                                <el-input v-model="joinNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>留学归国人数（人）</td>
                            <td>
                                <el-input v-model="abroadNum"  class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="people-table">
                            <td>外籍专家人数（人）</td>
                            <td>
                                <el-input v-model="expertNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>新增高校毕业人数（人）</td>
                            <td>
                                <el-input v-model="graduateNum"  class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="people-table">
                            <td>直接从事研发人员数（人）</td>
                            <td>
                                <el-input  v-model="exploitNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>占员工总数比例（%）</td>
                            <td>
                                <el-input v-model="staffScale"  class="input" clearable size="small"  v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="people-table">
                            <td>本科以上研发人员数（人）</td>
                            <td>
                                <el-input v-model="bachelorNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>占员工总数比例（%）</td>
                            <td>
                                <el-input v-model="bachelorSCale"  class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                    </table>
                </el-form>
                <p class="tag"><span class="iconfont">&#xe724;</span>人员分类</p>
                <el-form>
                    <table  class="table-content" border="1px">
                        <tr class="classify">
                            <td colspan="2">按工作性质分</td>
                            <td colspan="2">按学历分</td>
                            <td colspan="2">按技术职称分</td>
                        </tr>
                        <tr class="classify">
                            <td>行政管理人员（人）</td>
                            <td>
                                <el-input v-model="regulateNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>博士学历（人）</td>
                            <td>
                                <el-input v-model="doctorateNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>

                            <td>高级职称（人）</td>
                            <td>
                                <el-input v-model="highJobNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="classify">
                            <td>市场营销人员（人）</td>
                            <td>
                                <el-input v-model="marketingNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>硕士学历（人）</td>
                            <td>
                                <el-input v-model="masterNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>中级职称（人）</td>
                            <td>
                                <el-input v-model="middleJobNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="classify">
                            <td>研发设计人员（人）</td>
                            <td>
                                <el-input v-model="designNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>本科学历（人）</td>
                            <td>
                                <el-input v-model="bacheNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>初级职称（人）</td>
                            <td>
                                <el-input v-model="primaryJobNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="classify">
                            <td>加工制造人员（人）</td>
                            <td>
                                <el-input v-model="processNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>专科学历（人）</td>
                            <td>
                                <el-input v-model="SpecialistNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>其他人数（人）</td>
                            <td>
                                <el-input v-model="otherNum" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                        </tr>
                        <tr class="classify">
                            <td>其他人数（人）</td>
                            <td>
                                <el-input v-model="otherPeople" class="input" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td>其他人数（人）</td>
                            <td>
                                <el-input v-model="restNum" class="input" clearable size="small"  v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </el-form>
                <el-button type="primary" class="btn">保存</el-button>
            </el-tab-pane>

            <el-tab-pane label="主要经营情况" name="third">
                <p class="tag">
                    <span class="iconfont">&#xe724;</span>
                    年度经营情况
                    <span style="float: right;margin-right: 30px" v-if="saveOredit">
                        <el-button plain size="small" icon="el-icon-plus" style="font-weight: bold">添加行</el-button>
                        <el-button plain size="small" icon="el-icon-minus" style="font-weight: bold">减少行</el-button>
                    </span>
                </p>
                <el-form>
                    <el-table
                            stripe
                            class="business-table"
                            border
                            :data="tableYear"
                            style="width: 95%;margin: -5px auto">
                        <el-table-column
                                align="center"
                                type="selection">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="50px"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="150px"
                                label="年份">
                            <template slot-scope="scope">
                                <el-date-picker
                                        v-if="saveOredit"
                                        style="width: 110px"
                                        size="mini"
                                        v-model="scope.row.year"
                                        type="year">
                                </el-date-picker>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>

                        <el-table-column
                                align="center"
                                :render-header="renderHeader"
                                label="收入（万元）">
                            <template slot-scope="scope">
                                <el-input  v-model="scope.row.income" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                :render-header="renderHeader"
                                align="center"
                                label="利润（万元）">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.profit" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                :render-header="renderHeader"
                                align="center"
                                label="税金（万元）">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.taxes" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                :render-header="renderHeader"
                                align="center"
                                label="资产负债率（%）">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.liabilities" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form>
                <p class="tag">
                    <span class="iconfont">&#xe724;</span>
                    主要产品/服务经验情况<span style="color: red;margin-left: 10px;font-weight: normal">（温馨提示：填列占主营业务前十位的产品/服务）</span>
                    <span style="float: right;margin-right: 30px" v-if="saveOredit">
                        <el-button plain size="small" icon="el-icon-plus" style="font-weight: bold">添加行</el-button>
                        <el-button plain size="small" icon="el-icon-minus" style="font-weight: bold">减少行</el-button>
                    </span>
                </p>
                <el-form>
                    <el-table
                            stripe
                            class="business-table"
                            border
                            :data="productTable"
                            style="width: 95%;margin: -5px auto">
                        <el-table-column
                                align="center"
                                type="selection">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="50px"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="260px"
                                label="主要产品/服务名称">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.productName" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="是否具有自主知识产权">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.property"  clearable size="small" placeholder="请选择" v-if="saveOredit">
                                    <el-option
                                            v-for="item in scope.row.property"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="产品类型">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.productType"  clearable size="small" placeholder="请选择" v-if="saveOredit">
                                    <el-option
                                            v-for="item in scope.row.productType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="产品销售收入总额（万元）">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.productIncome" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="占企业销售收入比例（%）">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.incomeScale" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form>
                <p class="tag">
                    <span class="iconfont">&#xe724;</span>
                    资质证书名称及编号
                    <span style="float: right;margin-right: 30px" v-if="saveOredit">
                        <el-button plain size="small" icon="el-icon-plus" style="font-weight: bold">添加行</el-button>
                        <el-button plain size="small" icon="el-icon-minus" style="font-weight: bold">减少行</el-button>
                    </span>
                </p>
                <el-form>
                    <el-table
                            stripe
                            border
                            :data="aptitudeTable"
                            style="width: 95%;margin: -5px auto">
                        <el-table-column
                                width="120px"
                                align="center"
                                type="selection">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="120px"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="620px"
                                label="资质证书名称">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.certificate" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="编号">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.serialNumber" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">1212</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form>
                <el-button type="primary" class="btn">保存</el-button>
            </el-tab-pane>

            <el-tab-pane label="资金资助情况" name="fourth">
                <p class="tag" style="margin-left: 0">
                    <span class="iconfont">&#xe724;</span>
                    申报项目已获得财政资金补助情况
                    <span style="color: red;margin-left: 10px;font-weight: normal">（温馨提示：按资助时间先后顺序填列，申报时需检查最近三年资助情况）</span>
                    <span style="float: right;margin-right: 0" v-if="saveOredit">
                        <el-button plain size="small" icon="el-icon-plus" style="font-weight: bold">添加行</el-button>
                        <el-button plain size="small" icon="el-icon-minus" style="font-weight: bold">减少行</el-button>
                    </span>
                </p>
                <el-form>
                    <el-table
                            class="fund-table"
                            border
                            stripe
                            :data="fundTable"
                            style="width: 100%;margin: -5px auto">
                        <el-table-column
                                width="50px"
                                align="center"
                                type="selection">
                        </el-table-column>
                        <el-table-column
                                width="50px"
                                align="center"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                width="120px"
                                :render-header="renderHeader"
                                align="center"
                                label="年度">
                            <template slot-scope="scope">
                                <el-date-picker
                                        v-if="saveOredit"
                                        style="width: 90px"
                                        clearable
                                        size="small"
                                        v-model="scope.row.years"
                                        type="year">
                                </el-date-picker>
                                <div v-if="!saveOredit" class="content">23122</div>
                            </template>
                        </el-table-column>

                        <el-table-column
                                width="160px"
                                :render-header="renderHeader"
                                align="center"
                                label="项目名称">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.projectName " clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">23122</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                width="157px"
                                :render-header="renderHeader"
                                align="center"
                                label="拨付补助资金业务部门名称">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.branchName" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">23122</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                width="157px"
                                :render-header="renderHeader"
                                align="center"
                                label=" 拨付补助资金财政部门名称">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.sectorName" clearable size="small" v-if="saveOredit"></el-input>
                                <div v-if="!saveOredit" class="content">23122</div>
                            </template>
                        </el-table-column>
                        <el-table-column label="政府扶持资金（万元）" align="center">
                                <el-table-column
                                        width="80px"
                                        align="center"
                                        prop="subsidy"
                                        label="补助金额">
                                </el-table-column>
                                <el-table-column
                                        width="120px"
                                        :render-header="renderHeader"
                                        align="center"
                                        label="中央">
                                    <template slot-scope="scope">
                                        <el-input v-model="scope.row.central "clearable size="small" v-if="saveOredit"></el-input>
                                        <div v-if="!saveOredit" class="content">23122</div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        width="115px"
                                        :render-header="renderHeader"
                                        align="center"
                                        label=" 市级">
                                    <template slot-scope="scope">
                                        <el-input v-model="scope.row.city" clearable size="small"  v-if="saveOredit"></el-input>
                                        <div v-if="!saveOredit" class="content">23122</div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        width="145px"
                                        :render-header="renderHeader"
                                        align="center"
                                        label="区县(自治县)级">
                                    <template slot-scope="scope">
                                        <el-input v-model="scope.row.county" clearable size="small" v-if="saveOredit"></el-input>
                                        <div v-if="!saveOredit" class="content">23122</div>
                                    </template>
                                </el-table-column>
                            </el-table-column>
                        <el-table-column
                                :render-header="renderHeader"
                                align="center"
                                label="项目进度">
                            <template slot-scope="scope">
                                <el-select v-model="scope.row.schedule" placeholder="请选择" clearable size="small" v-if="saveOredit">
                                    <el-option
                                            v-for="item in scope.row.schedule"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                                <div v-if="!saveOredit" class="content">23122</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form>
                <el-button type="primary" class="btn" style="margin-left: 0">保存</el-button>
            </el-tab-pane>

            <el-tab-pane label="附件清单" name="five">
                <p class="tag"><span class="iconfont">&#xe724;</span>注意事项</p>
                <div class="tag-detail">
                    <p class="tag-top">1）下表附件，请按照附件文件的要求，每条记录以一个文件形式上传，如果有多个文件则请先合并为一个文件后再上传；</p>
                    <p class="tag-top">2）每个附件材料的复印件或原件，以彩色扫描或拍照的形式，确保足够清晰、可辨，否则将影响单位信息的审核，直至专项资金的 审批拨付。</p>
                </div>
                <el-form>
                    <el-table
                            class="business-table"
                            stripe
                            border
                            :data="accessoryTable"
                            style="width: 95%;margin: -5px auto">
                        <el-table-column
                                align="center"
                                width="50px"
                                type="index"
                                label="序号">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                width="380"
                                label="附件文件">
                            <template slot-scope="scope">
                                <div>{{scope.row.file.length>25?scope.row.file.substring(0,15)+'...':scope.row.file}}</div>
                            </template>
                        </el-table-column>

                        <el-table-column
                                align="center"
                                prop="isNO"
                                label="是否必备材料">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="查看">
                            <template slot-scope="scope">
                                <div style="text-decoration: underline;color: #0079FE">{{scope.row.checkFile}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="time"
                                label="上传时间">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                label="操作">
                            <span class="iconfont">&#xe666; <span>上传</span></span>&#8197;
                            <span class="iconfont">&#xe68d; <span>删除</span></span>
                        </el-table-column>
                    </el-table>
                </el-form>
                <el-button type="primary" class="btn" >保存</el-button>
            </el-tab-pane>

        </el-tabs>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'UnitInformation',
        components: {},
        data() {
            return {
                saveOredit:false, // 判断查看或编辑 false 默认显示为查看
                activeName:'first',
                companyName:'',// 单位名称
                creditCode:'',// 信用代码
                registerType:'',// 注册类型
                setUpYear:'',// 成立年月
                enterprise:'',//
                county:'',//
                capital:'',//
                unitlPhone:'',//
                openBank:'',//
                creditLevel:'',//
                accountName:'',//
                bankAccount:'',//
                email:'',//
                emailCode:'',//
                unitURL:'',//
                unitFax:'',//
                manageRange:'',//
                unitAbout:'',//
                legalName:'',//
                legalEdc:'',//
                legalPhone:'',//
                legalCall:'',//
                legalType:'',//
                legalCard:'',//
                legalJob:'',//
                linkmanName:'',//
                linkmanEdc:'',//
                linkmanPhone:'',//
                linkmanCall:'',//
                linkmanType:'',//
                linkmanCard:'',//
                linkmanJob:'',//
                staffNum:'',//
                joinNum:'',//
                abroadNum:'',//
                expertNum:'',//
                graduateNum:'',//
                exploitNum:'',//
                staffScale:'',//
                bachelorNum:'',//
                bachelorSCale:'',//
                regulateNum:'',//
                doctorateNum:'',//
                highJobNum:'',//
                marketingNum:'',//
                masterNum:'',//
                middleJobNum:'',//
                designNum:'',//
                bacheNum:'',//
                primaryJobNum:'',//
                processNum:'',//
                SpecialistNum:'',//
                otherNum:'',//
                otherPeople:'',//
                restNum:'',//
                tableYear:[{
                    year:'',//
                    income:'',//
                    profit:'',//
                    taxes:'',//
                    liabilities:'',//
                },{
                    year:'',//
                    income:'',//
                    profit:'',//
                    taxes:'',//
                    liabilities:'',//
                },{
                    year:'',//
                    income:'',//
                    profit:'',//
                    taxes:'',//
                    liabilities:'',//
                }],
                productTable:[{
                    productName:'',//
                    property:'',//
                    productType:'',//
                    productIncome:'',//
                    incomeScale:'',//
                },{
                    productName:'',//
                    property:'',//
                    productType:'',//
                    productIncome:'',//
                    incomeScale:'',//
                },{
                    productName:'',//
                    property:'',//
                    productType:'',//
                    productIncome:'',//
                    incomeScale:'',//
                }],
                aptitudeTable:[{
                    certificate:'',//
                    serialNumber:'',//
                },{
                    certificate:'',//
                    serialNumber:'',//
                },{
                    certificate:'',//
                    serialNumber:'',//
                }],
                fundTable:[{
                    years:'',
                    projectName:'',
                    branchName:'',
                    sectorName:'',
                    subsidy:'',
                    central:'',
                    county:'',
                    city:'',
                    schedule:''
                }],
                accessoryTable:[{
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
                },{
                    file:'企业营业执照、组织机构代码证、税务登记证（正、副本）复印件（加盖鲜章）或社会统一信用代码',
                    isNO:'',
                    checkFile:'社会统一信用代码.pdf    ',
                    time:'2019-09-02 11:11:11'
                }]
            }
        },
        methods:{
            renderHeader(h, { column }){
                return h('div', {
                    attrs: {
                        class: 'cell'  //ele原来样式
                    },
                    domProps: {
                        innerHTML: '<span style="color: red">* </span>'+column.label
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .UnitInformation-box {
        padding: 20px 30px 0;
        background-color: #f0f2f5;
        min-height: 100vh;
        color: #666666;
        .UnitInformation-title {
            height: 70px;
            line-height: 70px;
            margin-bottom: 10px;
            text-align: left;
            background-color: #ffffff;
            span {
                margin-left: 30px;
                font-weight: bold;
                font-size: 18px;
                color: #666666;
            }
            .btns {
                float: right;
                margin-right: 30px;
            }
        }
        .table-content {
            font-size: 14px;
            width: 95%;
            margin: 0 auto;
            border-collapse: collapse;
            border: 1px solid #e9e9e9;
            td {
                border: 1px solid #e9e9e9;
            }
            tr:nth-of-type(odd){
                background-color: #f9f9f9;
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
                    padding-left: 35px;
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
                 td:nth-of-type(2) {
                    width: 130px;
                }
                td:nth-of-type(3) {
                    width: 145px;
                }

                td:nth-of-type(6) {
                    width: 145px;
                }
                td:last-child {
                    width: 150px;
                }
                td {
                    height: 45px;
                    &:nth-child(7) .input {
                        width: 230px;
                    }
                }
                .input {
                    width: 130px;
                }

            }
            .people-table {
                height: 50px;

                font-size: 14px;
                text-align: left;
                .input {
                    width: 250px;
                    margin-left: 20px;
                }
                .content {
                    text-align: center;
                }
                span {
                    font-weight:700;
                    color:#FF3B30;
                }
               td:nth-child(1){
                   padding-left: 20px;
                   text-align: left;
                   width: 230px ;
               }
                td:nth-child(3){
                    padding-left: 20px;
                    width: 280px;
                }
            }
            .classify {
                height: 50px;
                &:nth-child(1) td {
                    font-weight: bold;

                }
                .input {
                    width: 160px;
                }
                td:nth-child(1),td:nth-child(3),td:nth-child(5){
                    width:200px;
                }
            }
        }
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
        .business-table {
            .iconfont {
                display: inline-block;
                color: #0079EE;
                margin: 5px auto;
                font-size: 18px;
                cursor: pointer;
                span {
                    font-size: 14px;
                    vertical-align: 10%;
                }
            }
        }
        .detailTale {

        }
        .btn {
           float: left;
            margin: 15px 0 40px 30px;
        }
    }

</style>

<style lang="scss">
    .UnitInformation-box {
        .el-tabs__item {

            font-size: 13px;
            font-weight: bold;

        }

        .el-tabs {
            background-color: #ffffff;
            padding: 10px 20px;
        }
        .content-text{
            .el-textarea__inner {
               height: 80px;
            }
        }
        .fund-table {
            .is-group{
                font-size: 14px;
                th {
                   padding: 0;
                    padding-top: 5px;
                }
            }

        }
        .business-table {
            .el-table__row {
                padding: 0;
            }
        }
    }
</style>