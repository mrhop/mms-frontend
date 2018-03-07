/**
 * Created by Donghui Huo on 2018/3/6.
 */
export const leftMenu = [{
  key: 'index',
  title: '概览',
  icon: 'dashboard',
  url: '/'
}, {
  key: 'accesscontrol',
  title: '访问控制',
  icon: 'user',
  url: '/accesscontrol',
  children: [
    {
      key: 'post',
      title: '职位管理',
      url: '/accesscontrol/post'
    },
    {
      key: 'authority',
      title: '权限管理',
      url: '/accesscontrol/authority'
    },
    {
      key: 'role',
      title: '角色管理',
      url: '/accesscontrol/role'
    },
    {
      key: 'user',
      title: '用户管理',
      url: '/accesscontrol/user'
    },
    {
      key: 'personalinfo',
      title: '个人信息维护',
      url: '/accesscontrol/personalinfo'
    }
  ]
}]

export const user = {
  name: 'aa',
  post: 'pp',
  role: [],
  authority: []
}

export const shortcut = [
  {
    label: '个人信息修改',
    value: '/accesscontrol/personalinfo'
  }
]
