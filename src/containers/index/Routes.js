/**
 * Created by Donghui Huo on 2018/3/6.
 */
// Index
import  Index from '../../components/index/Index'
import  AccessControl from '../../components/index/accessControl'
import  Authority from '../../components/index/accessControl/authority'
import  Post from '../../components/index/accessControl/post'
import  PostAdd from '../../components/index/accessControl/post/Add'
import  PostUpdate from '../../components/index/accessControl/post/Update'
import  Role from '../../components/index/accessControl/role'
import  User from '../../components/index/accessControl/user'
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
        path: "/accesscontrol/user",
        component: User
      },
      {
        path: "/accesscontrol/personalinfo",
        component: PersonalInfo
      }
    ]
  }
];
