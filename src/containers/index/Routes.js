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
  }
];
