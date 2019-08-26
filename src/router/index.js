import Index from '@/view/Index'
// 登录
import Login from '@/view/layout/Login'
import AssetsView from '@/view/assetsView/AssetsView'
import InStorage from '@/view/hardware/InStorage'
import OutStorage from '@/view/hardware/OutStorage'
import AssetsMove from '@/view/hardware/AssetsMove'
import CancelStock from '@/view/hardware/CancelStock'
import Repair from '@/view/hardware/Repair'
import Scrap from '@/view/hardware/Scrap'
import Software from '@/view/software/Software'
import Contract from '@/view/contract/Contract'
import Inventory from '@/view/inventory/Inventory'
import HardReport from '@/view/report/HardReport'
import SoftReport from '@/view/report/SoftReport'
import AssetsResume from '@/view/report/AssetsResume'
import ClassifyReport from '@/view/report/ClassifyReport'
import AssetsReport from '@/view/report/AssetsReport'
import UserConfig from '@/view/userConfig/UserConfig'
import Role from '@/view/userConfig/Role'
import Organization from '@/view/userConfig/Organization'
import Classify from '@/view/userConfig/Classify'
import Notice from '@/view/userConfig/Notice'

import cookie from '@/common/cookie'
export default [{
  path: '/login',
  component: Login,
  name: '登录',
  hidden: true,
  beforeEnter: (to, from, next) => {
    if (cookie.hasCookie()) {
      next('/')
    } else {
      next()
    }
  }
},
{
  path: '/',
  name: '首页',
  component: Index,
  redirect: 'assetsView',
  beforeEnter: (to, from, next) => {
    if (cookie.hasCookie()) {
      next()
    } else {
      next('/login')
    }
  },
  children: [{
    path: '/assetsView',
    component: AssetsView
  }, {
    path: '/inStorage',
    component: InStorage
  }, {
    path: '/outStorage',
    component: OutStorage
  }, {
    path: '/assetsMove',
    component: AssetsMove
  }, {
    path: '/cancelStock',
    component: CancelStock
  }, {
    path: '/repair',
    component: Repair
  }, {
    path: '/scrap',
    component: Scrap
  }, {
    path: '/software',
    component: Software
  }, {
    path: '/contract',
    component: Contract
  }, {
    path: '/inventory',
    component: Inventory
  }, {
    path: '/hardReport',
    component: HardReport
  }, {
    path: '/softReport',
    component: SoftReport
  }, {
    path: '/assetsResume',
    component: AssetsResume
  }, {
    path: '/classifyReport',
    component: ClassifyReport
  }, {
    path: '/assetsReport',
    component: AssetsReport
  }, {
    path: '/userConfig',
    component: UserConfig
  }, {
    path: '/role',
    component: Role
  }, {
    path: '/organization',
    component: Organization
  }, {
    path: '/classify',
    component: Classify
  }, {
    path: '/notice',
    component: Notice
  }]
}
]
