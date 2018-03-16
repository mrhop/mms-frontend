/**
 * Created by Donghui Huo on 2018/3/6.
 */
// Index
import  Index from '../../components/index/Index'
import  AccessControl from '../../components/index/accessControl'
import  Authority from '../../components/index/accessControl/authority'
import  AddAuthority from '../../components/index/accessControl/authority/Add'
import  UpdateAuthority from '../../components/index/accessControl/authority/Update'
import  Post from '../../components/index/accessControl/post'
import  PostAdd from '../../components/index/accessControl/post/Add'
import  PostUpdate from '../../components/index/accessControl/post/Update'
import  Role from '../../components/index/accessControl/role'
import  RoleAdd from '../../components/index/accessControl/role/Add'
import  RoleUpdate from '../../components/index/accessControl/role/Update'
import  User from '../../components/index/accessControl/user'
import  UserAdd from '../../components/index/accessControl/user/Add'
import  UserUpdate from '../../components/index/accessControl/user/Update'
import  PersonalInfo from '../../components/index/accessControl/PersonalInfo'
// SYSTEM INFO
import  SystemInfo from '../../components/index/systemInfo'
import  CompanyInfo from '../../components/index/systemInfo/CompanyInfo'
import  Database from '../../components/index/systemInfo/Database'
import  SystemSetting from '../../components/index/systemInfo/SystemSetting'
import  SaleStrategy from '../../components/index/systemInfo/saleStrategy'
import  SaleStrategyAdd from '../../components/index/systemInfo/saleStrategy/Add'
import  SaleStrategyUpdate from '../../components/index/systemInfo/saleStrategy/Update'
import  ReportDesign from '../../components/index/systemInfo/ReportDesign'

export default [
  {
    path: "/",
    exact: true,
    component: Index
  },
  {
    path: "/accesscontrol",
    component: AccessControl,
    routes: [
      {
        path: "/accesscontrol/authority",
        component: Authority
      },
      {
        path: "/accesscontrol/authority/addauthority",
        component: AddAuthority
      },
      {
        path: "/accesscontrol/authority/updateauthority",
        component: UpdateAuthority
      },
      {
        path: "/accesscontrol/post",
        component: Post
      },
      {
        path: "/accesscontrol/post/addpost",
        component: PostAdd
      },
      {
        path: "/accesscontrol/post/updatepost",
        component: PostUpdate
      },
      {
        path: "/accesscontrol/role",
        component: Role
      },
      {
        path: "/accesscontrol/role/addrole",
        component: RoleAdd
      },
      {
        path: "/accesscontrol/role/updaterole",
        component: RoleUpdate
      },
      {
        path: "/accesscontrol/user",
        component: User
      },
      {
        path: "/accesscontrol/user/adduser",
        component: UserAdd
      },
      {
        path: "/accesscontrol/user/updateuser",
        component: UserUpdate
      },
      {
        path: "/accesscontrol/personalinfo",
        component: PersonalInfo
      }
    ]
  },
  {
    path: "/systeminfo",
    component: SystemInfo,
    routes: [
      {
        path: "/systeminfo/systemsetting",
        component: SystemSetting
      },
      {
        path: "/systeminfo/companyinfo",
        component: CompanyInfo
      },
      {
        path: "/systeminfo/database",
        component: Database
      },
      {
        path: "/systeminfo/salestrategy",
        component: SaleStrategy
      },
      {
        path: "/systeminfo/salestrategy/addsalestrategy",
        component: SaleStrategyAdd
      },
      {
        path: "/systeminfo/salestrategy/updatesalestrategy",
        component: SaleStrategyUpdate
      },
      {
        path: "/systeminfo/reportdesign",
        component: ReportDesign
      }
    ]

  }
];
