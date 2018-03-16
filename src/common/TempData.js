/**
 * Created by Donghui Huo on 2018/3/6.
 */
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import {Table, Icon, Divider, Modal, Button} from 'antd';
const confirm = Modal.confirm;


import {BasicColor} from './Utils'


function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push(Math.round((Math.random() * (max - min) + min) * 100) / 100);
  }
  return rtn;
}

export const leftMenu = [
  {
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
export const availableMenu = [
  {
    key: 'index',
    title: '概览',
    url: '/'
  }, {
    key: 'accesscontrol',
    url: '/accesscontrol',
    title: '访问控制',
    children: [
      {
        key: 'post',
        title: '职位管理',
        url: '/accesscontrol/post',
        children: [
          {
            key: 'addpost',
            title: '新增职位',
            url: '/accesscontrol/post/addpost'
          },
          {
            key: 'updatepost',
            title: '修改职位',
            url: '/accesscontrol/post/updatepost'
          },
          {
            key: 'postDelete'
          },
        ]
      },
      {
        key: 'authority',
        title: '权限管理',
        url: '/accesscontrol/authority',
        children: [
          {
            key: 'addauthority',
            title: '新增权限',
            url: '/accesscontrol/authority/addauthority'
          },
          {
            key: 'updateauthority',
            title: '修改权限',
            url: '/accesscontrol/authority/updateauthority'
          },
          {
            key: 'authorityDelete'
          },
        ]
      },
      {
        key: 'role',
        title: '角色管理',
        url: '/accesscontrol/role',
        children: [
          {
            key: 'addrole',
            title: '新增权限',
            url: '/accesscontrol/role/addrole'
          },
          {
            key: 'updaterole',
            title: '修改权限',
            url: '/accesscontrol/role/updaterole'
          },
          {
            key: 'roleDelete'
          },
        ]
      },
      {
        key: 'user',
        title: '用户管理',
        url: '/accesscontrol/user',
        children: [
          {
            key: 'adduser',
            title: '新增用户',
            url: '/accesscontrol/user/adduser'
          },
          {
            key: 'updateuser',
            title: '修改用户',
            url: '/accesscontrol/user/updateuser'
          },
          {
            key: 'userDelete'
          },
        ]
      },
      {
        key: 'personalinfo',
        title: '个人信息维护',
        url: '/accesscontrol/personalinfo'
      }
    ]
  }]

export function validateAuthority(key) {
  return validateAuthorityIterate(key, availableMenu)
}

function validateAuthorityIterate(key, list) {
  let returnData = null
  for (let index in list) {
    let item = list[index]
    if (item.key === key) {
      return item
    } else if (item.children) {
      returnData = validateAuthorityIterate(key, item.children)
      if (returnData) {
        return returnData
      }
    }
  }
  return returnData
}

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


// index.jsx
export const IndexTempData = {
  commonOptions: {
    tooltips: {
      mode: 'index',
      intersect: false,
    }, hover: {
      mode: 'index',
      intersect: true
    }
  },
  initPurchase: {
    labels: ["2017-9", "2017-10", "2017-11", "2017-12", "2018-1", "2018-2", "2018-3"],
    datasets: [
      {
        label: "采购总额",
        backgroundColor: BasicColor.simple[0][1],
        borderColor: BasicColor.simple[0][0],
        pointBackgroundColor: BasicColor.simple[0][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[0][0],
        data: rand(32, 100, 7)
      }
    ]
  },
  purchaseMonth: {
    labels: ["产品类别1", "产品类别2", "产品类别3", "产品类别4", "产品类别5", "产品类别6", "产品类别7"],
    datasets: [
      {
        label: "采购额",
        "fill": true,
        backgroundColor: [
          BasicColor.simple[0][0],
          BasicColor.simple[1][0],
          BasicColor.simple[2][0],
          BasicColor.simple[3][0],
          BasicColor.simple[4][0],
          BasicColor.simple[5][0],
          BasicColor.simple[6][0]],
        data: rand(32, 100, 7)
      }
    ]
  },
  initStore: {
    labels: ["2017-9", "2017-10", "2017-11", "2017-12", "2018-1", "2018-2", "2018-3"],
    datasets: [
      {
        label: "仓库1总库存",
        backgroundColor: BasicColor.simple[0][1],
        borderColor: BasicColor.simple[0][0],
        pointBackgroundColor: BasicColor.simple[0][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[0][0],
        data: rand(15, 70, 7)
      }, {
        label: "仓库2总库存",
        backgroundColor: BasicColor.simple[1][1],
        borderColor: BasicColor.simple[1][0],
        pointBackgroundColor: BasicColor.simple[1][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[1][0],
        data: rand(32, 100, 7)
      }, {
        label: "仓库3总库存",
        backgroundColor: BasicColor.simple[2][1],
        borderColor: BasicColor.simple[2][0],
        pointBackgroundColor: BasicColor.simple[2][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[2][0],
        data: rand(32, 55, 7)
      }
    ]
  },
  simpleStore: {
    labels: ["产品类别1", "产品类别2", "产品类别3", "产品类别4", "产品类别5", "产品类别6", "产品类别7"],
    datasets: [
      {
        label: "存储量",
        "fill": true,
        backgroundColor: [
          BasicColor.simple[0][0],
          BasicColor.simple[1][0],
          BasicColor.simple[2][0],
          BasicColor.simple[3][0],
          BasicColor.simple[4][0],
          BasicColor.simple[5][0],
          BasicColor.simple[6][0]],
        data: rand(32, 100, 7)
      }
    ]
  },
  initSale: {
    labels: ["2017-9", "2017-10", "2017-11", "2017-12", "2018-1", "2018-2", "2018-3"],
    datasets: [
      {
        label: "销售总额",
        backgroundColor: BasicColor.simple[0][1],
        borderColor: BasicColor.simple[0][0],
        pointBackgroundColor: BasicColor.simple[0][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[0][0],
        data: rand(32, 100, 7)
      }
    ]
  },
  saleMonth: {
    labels: ["产品类别1", "产品类别2", "产品类别3", "产品类别4", "产品类别5", "产品类别6", "产品类别7"],
    datasets: [
      {
        label: "销售额",
        "fill": true,
        backgroundColor: [
          BasicColor.simple[0][0],
          BasicColor.simple[1][0],
          BasicColor.simple[2][0],
          BasicColor.simple[3][0],
          BasicColor.simple[4][0],
          BasicColor.simple[5][0],
          BasicColor.simple[6][0]],
        data: rand(32, 100, 7)
      }
    ]
  },
  initProduct: {
    labels: ["2017-9(产品1)", "2017-10(产品2)", "2017-11(产品1)", "2017-12(产品3)", "2018-1(产品4)", "2018-2(产品1)", "2018-3(产品2)"],
    datasets: [
      {
        label: "销售额",
        backgroundColor: BasicColor.simple[0][1],
        borderColor: BasicColor.simple[0][0],
        pointBackgroundColor: BasicColor.simple[0][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[0][0],
        data: rand(32, 100, 7)
      }
    ]
  },
  productMonth: {
    labels: ["产品1", "产品2", "产品3", "产品4", "产品5", "产品6", "产品7"],
    datasets: [
      {
        label: "销售额",
        "fill": true,
        backgroundColor: [
          BasicColor.simple[0][0],
          BasicColor.simple[1][0],
          BasicColor.simple[2][0],
          BasicColor.simple[3][0],
          BasicColor.simple[4][0],
          BasicColor.simple[5][0],
          BasicColor.simple[6][0]],
        data: rand(32, 100, 7)
      }
    ]
  },
  initEmployee: {
    labels: ["2017-9(业务员1)", "2017-10(业务员2)", "2017-11(业务员1)", "2017-12(业务员3)", "2018-1(业务员4)", "2018-2(业务员1)", "2018-3(业务员2)"],
    datasets: [
      {
        label: "销售额",
        backgroundColor: BasicColor.simple[0][1],
        borderColor: BasicColor.simple[0][0],
        pointBackgroundColor: BasicColor.simple[0][0],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: BasicColor.simple[0][0],
        data: rand(32, 100, 7)
      }
    ]
  },
  employeeMonth: {
    labels: ["业务员1", "业务员2", "业务员3", "业务员4", "业务员5", "业务员6", "业务员7"],
    datasets: [
      {
        label: "销售额",
        "fill": true,
        backgroundColor: [
          BasicColor.simple[0][0],
          BasicColor.simple[1][0],
          BasicColor.simple[2][0],
          BasicColor.simple[3][0],
          BasicColor.simple[4][0],
          BasicColor.simple[5][0],
          BasicColor.simple[6][0]],
        data: rand(32, 100, 7)
      }
    ]
  },
}

// options
export const optionsTempData = {
  post: [
    {
      value: 1,
      text: '采购处理',
    },
    {
      value: 2,
      text: '采购审核',
    },
    {
      value: 3,
      text: '库存处理',
    },
    {
      value: 4,
      text: '库存审核',
    },
  ],
  authorityParent: [
    {
      text: '访问控制',
      value: 'accesscontrol',
      children: [{
        text: '职位管理',
        value: 'post'
      }]
    }],
  authorityParentTree: [{
    label: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      label: 'Child Node1',
      value: '0-0-1',
      key: '0-0-1',
    }, {
      label: 'Child Node2',
      value: '0-0-2',
      key: '0-0-2',
    }],
  }, {
    label: 'Node2',
    value: '0-1',
    key: '0-1',
  }],
  role: [{
    value: 1,
    text: '采购处理',
  },
    {
      value: 2,
      text: '采购审核',
    },
    {
      value: 3,
      text: '库存处理',
    },
    {
      value: 4,
      text: '库存审核',
    }]
}

// post folder
export const PostTempData = {
  list: [
    {
      key: 1,
      name: '采购处理',
      description: '负责采购操作(填写采购申请，采购申报和采购入库)'
    },
    {
      key: 2,
      name: '采购审核',
      description: '负责对采购单进行审批，并审核即将入库的采购商品.'
    },
    {
      key: 3,
      name: '库存处理',
      description: '负责仓库的物料借出申请，物料归还盘点，加工入库，商品打包和解包等操作'
    },
    {
      key: 4,
      name: '库存审核',
      description: '审批物料借出，物料归还，加工入库，库存盘点，移库等操作'
    },
  ],
  single: {
    id: 1,
    name: '采购处理',
    description: '负责采购操作(填写采购申请，采购申报和采购入库)'
  }

}
export const AuthorityTempData = {
  list: [
    {
      key: 1,
      name: '采购申请',
      post: '采购',
      parent: '采购管理',
    },
    {
      key: 2,
      name: '采购审核',
      post: '采购审核',
      parent: '采购管理',
    },
    {
      key: 3,
      name: '采购入库',
      post: '采购',
      parent: '采购管理',
    }
  ],
  single: {
    id: 1,
    name: '采购处理',
    post: 3,
    parent: '0-0-1',
    url: '/purchase',
    inMenu: true
  }
}
export const RoleTempData = {
  list: [
    {
      key: 1,
      name: '采购处理',
      roleCode: 'ROLE_purchase',
      description: '负责采购操作(填写采购申请，采购申报和采购入库)'
    },
    {
      key: 2,
      name: '采购审核',
      roleCode: 'ROLE_purchaseAudit',
      description: '负责对采购单进行审批，并审核即将入库的采购商品.'
    },
    {
      key: 3,
      name: '库存处理',
      roleCode: 'ROLE_store',
      description: '负责仓库的物料借出申请，物料归还盘点，加工入库，商品打包和解包等操作'
    },
    {
      key: 4,
      name: '库存审核',
      roleCode: 'ROLE_storeAudit',
      description: '审批物料借出，物料归还，加工入库，库存盘点，移库等操作'
    },
  ],
  single: {
    id: 1,
    name: '采购处理',
    roleCode: 'purchase',
    authorities: ['0-0', '0-0-1', '0 - 1'],
    description: '负责采购操作(填写采购申请，采购申报和采购入库)'
  }

}
export const UserTempData = {
  list: [
    {
      key: 1,
      name: '采购员',
      account: 'purchaser1',
      roles: '采购管理',
      post: '采购',
      cellphone: '1311111111',
      email: 'a@a.com',
      address: 'XX路',
      description: '负责采购操作(填写采购申请，采购申报和采购入库)'
    },
    {
      key: 2,
      name: '采购员2',
      account: 'purchaser2',
      roles: '采购管理',
      post: '采购',
      cellphone: '1311111112',
      email: 'a@ac.com',
      address: 'XX路'
    },
    {
      key: 3,
      name: '采购员3',
      account: 'purchaser3',
      roles: '采购管理',
      post: '采购',
      cellphone: '1311111113',
      email: 'a@ad.com',
    },
  ],
  single: {
    id: 1,
    name: '采购员1',
    account: 'purchaser1',
    roles: [1, 2],
    rolesName: ['采购管理', '库存处理'],
    post: 1,
    postName: '采购',
    email: 'a@a.com',
    cellphone: '13111111111',
    address: 'XX路',
    description: '负责采购操作(填写采购申请，采购申报和采购入库)'
  }

}

