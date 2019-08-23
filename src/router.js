import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/webportals/HomePage.vue'; // 门户首页
import Login from './views/webportals/Login.vue'; //登录页面
import Register from './views/webportals/register/Register.vue'; // 注册页面
import ContentDetail from './views/webportals/content/detail.vue'; //内容详情页面
import ContentList from './views/webportals/content/list.vue'; //内容列表页面
import PwdHome from './views/webportals/ForgetPassword/PwdHome.vue'; // 密码找回主页面
import BusinessUser from './views/systemframework/BusinessUser.vue'; // 商委用户登录界面
import DeclareUnit from './views/systemframework/DeclareUnit.vue'; // 申报单位登录页面
import Expert from './views/systemframework/Expert.vue';//专家登录页面
import Dclarant from './views/systemframework/Dclarant.vue';//申报人登录页面
import SysHomePage from './views/systemframework/HomePage.vue'; // 申报首页页面
import CreditPass from './views/webportals/register/CreditPass.vue';//征信通过
import CreditFail from './views/webportals/register/CreditFail.vue';//征信未通过
import RegisterActive from './views/webportals/register/RegisterActive.vue';//注册激活页面
import AgenciesSuccess from './views/webportals/register/AgenciesSuccess.vue';//注册激活页面
import UnitAudit from "./views/filingmanage/UnitAudit";//审核申请书（单位）页面 2
import EnterAudit from './views/filingmanage/EnterAudit.vue'; //进入审核 进入编辑或查看
import ApplicationManage from './views/filingmanage/ApplicationManage.vue';//申请书管理 1
import AddDeclare from './views/filingmanage/AddDeclare.vue';//新增申请书 3
import AddEditor from './views/filingmanage/AddEditor'//

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/AddDeclare',
            name: 'AddDeclare',
            component: AddDeclare
        },
        { // 门户首页
            path: '/Home',
            name: 'HomePage',
            component: HomePage
        },{ //登录
            path: '/Login',
            name: 'Login',
            component: Login
        },{ //注册页面
            path: '/Register',
            name: 'Register',
            component: Register
        },{ //内容详情列表
            path: '/content/ContentList',
            name: 'ContentList',
            component: ContentList
        },{ //内容详情
            path: '/content/ContentDetail',
            name: 'ContentDetail',
            component: ContentDetail
        },{ //忘记密码主页
            path: '/PwdHome',
            name: 'PwdHome',
            component: PwdHome
        },{ //商委用户登录界面
            path: '/BusinessUser',
            name: 'BusinessUser',
            component: BusinessUser
        },{ //申报单位登录页面
            path: '/DeclareUnit',
            name: 'DeclareUnit',
            component: DeclareUnit
        },{//专家登录页面
            path: '/Expert',
            name: 'Expert',
            component: Expert
        },{//申报人登录页面
            path: '/Dclarant',
            name: 'Dclarant',
            component: Dclarant
        },{ //申报首页页面
            path: '/SysHomePage',
            name: 'SysHomePage',
            component: SysHomePage
        },{ //征信通过
            path: '/CreditPass',
            name: 'CreditPass',
            component: CreditPass
        },{ //征信通过
            path: '/CreditFail',
            name: 'CreditFail',
            component: CreditFail
        },{ //注册激活页面
            path: '/RegisterActive',
            name: 'RegisterActive',
            component: RegisterActive
        },{ //专业机构激活
            path: '/AgenciesSuccess',
            name: 'AgenciesSuccess',
            component: AgenciesSuccess
        },{ //审核查看/编辑
            path: '/UnitAudit',
            name: 'UnitAudit',
            component: UnitAudit,

        },
        {
            path: '/UnitAudit/EnterAudit',
            name:'EnterAudit',
            component: EnterAudit,
        },
        { //审核查看/编辑
            path: '/AddEditor',
            name: 'AddEditor',
            component: AddEditor,
        },{ //审核查看/编辑
            path: '/ApplicationManage',
            name: 'ApplicationManage',
            component: ApplicationManage,
        },
    ]
})
