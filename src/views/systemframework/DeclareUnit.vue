<template>
    <div class="BusinessUser">
    <!-- 一级导航 -->
        <el-row class="r1" type="flex" align="">
            <!-- 导航Logo部分 -->
            <el-col :span="3" class="col1">
                <el-col :span="12" push="1">
                    <img src="../../assets/images/logo.png" alt="" class="logo">
                </el-col>
                <el-col :span="12" pull="1">
                    <p class="p1">重庆市商务委</p>
                    <p class="p2">专项资金管理平台</p>
                </el-col>
            </el-col>

            <!-- 导航部分 -->
            <el-col :span="18" class="col2" push="1">
                <div class="bu_white">

                </div>
                <el-tabs v-model="activeName" type="card" >
                    <el-tab-pane label="首页" name="first">
                        <el-link :underline="false">申述管理</el-link>
                    </el-tab-pane>
                    <el-tab-pane label="申报管理" name="second">
                        <el-link :underline="false">申请书管理</el-link>
                        <el-link :underline="false">审核申请书</el-link>
                        <el-link :underline="false">新增申请书</el-link>
                    </el-tab-pane>
                    <el-tab-pane label="项目管理" name="third">
                        <el-link :underline="false">填写申报书</el-link>
                    </el-tab-pane>
                    <el-tab-pane label="资金管理" name="fourth">
                        <el-link :underline="false">填写申报书</el-link>
                    </el-tab-pane>
                    <el-tab-pane label="系统管理" name="five">
                        <el-link :underline="false">单位信息维护</el-link>
                        <el-link :underline="false">申报人员管理</el-link>
                        <el-link :underline="false">申报人员审核</el-link>
                    </el-tab-pane>
                </el-tabs>
            </el-col>

            <!-- 待办事项 -->
            <el-col :span="3" class="col3" pull="3">
                <el-col :span="4" pull="3">
                    <el-popover placement="bottom-end" width="320" trigger="hover">
                        <div>
                            <el-row class="pop_row1">
                                <p>待办事项</p>
                            </el-row>
                            <el-row class="pop_row2">
                                <el-col :span="12">
                                   <el-col :span="20" push="2">
                                        <ul class="pop_ul1">
                                            <li>今日待跟进任务</li>
                                            <li>待处理任务</li>
                                            <li>待处理的日程</li>
                                            <li>待审批的回款</li>
                                        </ul>
                                   </el-col>
                                   <el-col :span="4" pull="2">
                                       <ul class="pop_ul2">
                                           <li>(<p>10</p>)</li>
                                           <li>(<p>10</p>)</li>
                                           <li>(<p>10</p>)</li>
                                           <li>(<p>10</p>)</li>
                                       </ul>
                                   </el-col>
                                </el-col>
                                <el-col :span="12">
                                    <el-col :span="20" push="4">
                                        <ul class="pop_ul1">
                                            <li>今日待回款计划</li>
                                            <li>待处理的工单</li>
                                            <li>待审批的订单</li>
                                            <li>待审批的报销</li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="4" >
                                        <ul class="pop_ul2">
                                            <li>(<p>10</p>)</li>
                                            <li>(<p>10</p>)</li>
                                            <li>(<p>10</p>)</li>
                                            <li>(<p>10</p>)</li>
                                        </ul>
                                    </el-col>
                                </el-col>
                            </el-row>
                        </div>



                        <el-link slot="reference" :underline="false">
                            <i class="el-icon-s-unfold"></i>
                        </el-link>
                    </el-popover>
                </el-col>

                <!-- 消息铃铛 -->
                <el-col :span="4" push="3">
                    <el-badge :value="3" class="item">
                        <i class="el-icon-message-solid"></i>
                    </el-badge>
                </el-col>

                <!-- 用户头像 -->
                <el-col :span="16" push="4">
                    <el-col :span="12">
                        <el-avatar :size="34" :src="circleUrl"></el-avatar>
                    </el-col>
                    <el-col :span="12" class="col4">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <p class="p3">申报单位<i class="el-icon-arrow-down"></i></p>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus">修改资料</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus">修改头像</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus-outline">修改密码</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">退出系统</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                  </el-col>
                </el-col>
            </el-col>
        </el-row>
       <!-- 二级菜单 -->
       <el-row class="nav_row2">  
           <el-col :span="6">
               <div class="nav_title" v-if="activeName == 'first'">
                   <span>
                       <i></i>快捷菜单
                   </span>
               </div>
               <div class="nav_title" v-if="activeName == 'second'">
                   <span>
                       <i></i>申报管理
                   </span>
               </div>
               <div class="nav_title" v-if="activeName == 'third'">
                   <span>
                       <i></i>项目管理
                   </span>
               </div>
               <div class="nav_title" v-if="activeName == 'fourth'">
                   <span>
                       <i></i>资金管理
                   </span>
               </div>
               <div class="nav_title" v-if="activeName == 'five'">
                   <span>
                       <i></i>系统管理
                   </span>
               </div>
           </el-col>
           <el-col :span="18"></el-col>
       </el-row>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ApplicationManage from '../filingmanage/ApplicationManage.vue'; //申请书管理
    import UnitAudit from '../filingmanage/UnitAudit.vue'; //审核申请书（单位）
    import ReportGuidelines from '../filingmanage/ReportGuidelines.vue'; //选择申报指南类别
    import AddDeclare from '../filingmanage/AddDeclare.vue'; //新增/编辑申请书页面
    export default {
        name: 'DeclareUnit',
        components: {},

        data () {
           return {
                activeName:'first',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
           }
        }
    }
</script>
<style scoped>
    /* 布局样式 */
     .r1{
        height: 50px;
        background: #464c5b;

        position: relative;
    }
    .col1{
        display: flex;
        align-items: center
    }
    .el-tabs{
        width: 100%;
    
        position: absolute;
        top: 10px;
        right: 30px;
    }
    .col3{
        display: flex;
        align-items: center
    }
    .col4{
        position: absolute;
        bottom: 13px;
        right: 9px;
    }
    .nav_title{
        width: 180px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #666666;
        font-weight: bold;
        background: #f2f2f2
    }
    .nav_row2{
        border-bottom: 1px solid #f2f2f2;
    }
    /* 导航头样式 */
    .r1 >>> .el-tabs__header {
        background: #464c5b;
        border-bottom: none !important;
    }
    .r1 >>> .el-tabs__content {
        z-index: 3;
        text-align: left;
    }
    .el-link{
        margin: 0 35px;
        
    }
    .r1 >>> .el-tabs__item {
        width: 100px;

        
        border: none !important;
        color: #ffffff !important;
    }
    .r1 >>> .el-tabs__item:hover{
        background: #2e2e2e;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        font-weight: bold;
    }
    .r1 >>> .el-tabs__item.is-active{
        
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        background: #ffffff;
        color: #666666 !important;
        font-weight: bold;
    }
    .r1 >>> .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none !important;
    }
  
    /* 导航栏LOGO样式 */
    .logo{
        width: 43px;
        height: 35px;

    }
    .p1{
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
    }
    .p2{
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
    }
    /* 导航栏右边用户，消息样式 */
    .el-icon-message-solid{
        font-size: 21px;
        color: #ffffff;
    }
    .el-icon-s-unfold{
        font-size: 21px;
        color: #ffffff;
    }
    .p3{
        font-size: 12px;
        color: #ffffff;
    }
    /* 待办事项样式 */
    .pop_row1{

        /* background: #f2f2f2; */
        color: #999999;
        font-size: 16px;
    }
    .pop_ul1{
        color: #666666;
        font-size: 12px; 

    }
    .pop_ul1 li{
        margin-top: 20px;
    }
    .pop_ul2{
        list-style-type: none;
        font-size: 12px;
    }
     .pop_ul2 li{
        margin-top: 20px;
    }
    .pop_ul2 p{
        display: inline-block;
        color: red;
    }
</style>
