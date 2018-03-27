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
  },
  {
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
  },
  {
    key: 'systeminfo',
    title: '系统信息维护',
    icon: 'setting',
    url: '/systeminfo',
    children: [
      {
        key: 'systemsetting',
        title: '系统设置',
        url: '/systeminfo/systemsetting'
      },
      {
        key: 'companyinfo',
        title: '企业信息管理',
        url: '/systeminfo/companyinfo'
      },
      {
        key: 'database',
        title: '备份/还原数据库',
        url: '/systeminfo/database'
      },
      {
        key: 'salestrategy',
        title: '销售策略管理',
        url: '/systeminfo/salestrategy'
      },
      {
        key: 'reportdesign',
        title: '报表设计',
        url: "/systeminfo/reportdesign",
      }
    ]
  },
  {
    key: 'basedata',
    title: '基础数据维护',
    icon: 'database',
    url: '/basedata',
    children: [
      {
        key: 'productcategory',
        title: '产品分类管理',
        url: '/basedata/productcategory'
      },
      {
        key: 'product',
        title: '产品管理',
        url: '/basedata/product'
      },
      {
        key: 'store',
        title: '仓库管理',
        url: '/basedata/store'
      },
      {
        key: 'supplier',
        title: '供货商管理',
        url: '/basedata/supplier'
      },
      {
        key: 'client',
        title: '客户管理',
        url: '/basedata/client'
      },
      {
        key: 'employee',
        title: '业务员管理',
        url: '/basedata/employee'
      }
    ]
  },
]
export const availableMenu = [
  {
    key: 'index',
    title: '概览',
    url: '/'
  },
  {
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
            title: '更新职位',
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
            title: '更新权限',
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
            url: '/accesscontrol/role/addrole',
          },
          {
            key: 'updaterole',
            title: '更新权限',
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
            title: '更新用户',
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
  },
  {
    key: 'systeminfo',
    url: '/systeminfo',
    title: '系统信息维护',
    children: [
      {
        key: 'systemsetting',
        title: '系统设置',
        url: '/systeminfo/systemsetting'
      },
      {
        key: 'companyinfo',
        title: '企业信息管理',
        url: '/systeminfo/companyinfo'
      },
      {
        key: 'database',
        title: '备份/还原数据库',
        url: '/systeminfo/database'
      },
      {
        key: 'salestrategy',
        title: '销售策略管理',
        url: '/systeminfo/salestrategy',
        children: [
          {
            key: 'addsalestrategy',
            title: '新增策略',
            url: '/systeminfo/salestrategy/addsalestrategy'
          },
          {
            key: 'updatesalestrategy',
            title: '更新策略',
            url: '/systeminfo/salestrategy/updatesalestrategy'
          },
          {
            key: 'salestrategyDelete'
          },
        ]
      },
      {
        key: 'reportdesign',
        title: '报表设计',
        url: "/systeminfo/reportdesign",
      }
    ]
  },
  {
    key: 'basedata',
    title: '基础数据维护',
    url: '/basedata',
    children: [
      {
        key: 'productcategory',
        title: '产品分类管理',
        url: '/basedata/productcategory',
        children: [
          {
            key: 'addproductcategory',
            title: '新增产品分类',
            url: '/basedata/productcategory/addproductcategory'
          },
          {
            key: 'updateproductcategory',
            title: '更新产品分类',
            url: '/basedata/productcategory/updateproductcategory'
          },
          {
            key: 'productcategoryDelete'
          },
        ]
      },
      {
        key: 'product',
        title: '产品管理',
        url: '/basedata/product',
        children: [
          {
            key: 'addproduct',
            title: '新增产品',
            url: '/basedata/product/addproduct'
          },
          {
            key: 'updateproduct',
            title: '更新产品',
            url: '/basedata/product/updateproduct'
          },
          {
            key: 'productDelete'
          },
        ]
      },
      {
        key: 'store',
        title: '仓库管理',
        url: '/basedata/store',
        children: [
          {
            key: 'addstore',
            title: '新增仓库',
            url: '/basedata/store/addstore'
          },
          {
            key: 'updatestore',
            title: '更新仓库',
            url: '/basedata/store/updatestore'
          },
          {
            key: 'storeDelete'
          },
        ]
      },
      {
        key: 'supplier',
        title: '供货商管理',
        url: '/basedata/supplier',
        children: [
          {
            key: 'addsupplier',
            title: '新增供货商',
            url: '/basedata/supplier/addsupplier'
          },
          {
            key: 'updatesupplier',
            title: '更新供货商',
            url: '/basedata/supplier/updatesupplier'
          },
          {
            key: 'supplierDelete'
          },
        ]
      },
      {
        key: 'client',
        title: '客户管理',
        url: '/basedata/client',
        children: [
          {
            key: 'addclient',
            title: '新增客户',
            url: '/basedata/client/addclient'
          },
          {
            key: 'updateclient',
            title: '更新客户',
            url: '/basedata/client/updateclient'
          },
          {
            key: 'clientDelete'
          },
        ]
      },
      {
        key: 'employee',
        title: '业务员管理',
        url: '/basedata/employee',
        children: [
          {
            key: 'addemployee',
            title: '新增业务员',
            url: '/basedata/employee/addemployee'
          },
          {
            key: 'updateemployee',
            title: '更新业务员',
            url: '/basedata/employee/updateemployee'
          },
          {
            key: 'employeeDelete'
          },
        ]
      }
    ]
  }
]

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
    label: '个人信息更新',
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
  authorityParentTree: [
    {
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
  role: [
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
    }],
  productCategoryParent: [
    {
      text: '食品',
      value: 1,
      children: [{
        text: '生鲜',
        value: 2
      }, {
        text: '饼干',
        value: 3
      }]
    }],
  productCategoryParentTree: [
    {
      label: '食品',
      value: '1',
      key: 1,
      children: [{
        label: '生鲜',
        value: '2',
        key: 2,
      }, {
        label: '饼干',
        value: '3',
        key: 3,
      }],
    }],
  store: [
    {
      value: 1,
      text: '仓库1',
    },
    {
      value: 2,
      text: '仓库2',
    }],
}

// accessControl
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

// systemInfo
export const SystemSettingTempData = {
  single: {
    id: 1,
    automaticProductNumber: true,
    costPriceStrategy: 0,
    salePriceFloating: 12,
    dumpBackupRate: 4,
    expiryAlert: 10,
  }
}
export const CompanyInfoTempData = {
  single: {
    id: 1,
    name: 'XX公司',
    legalPerson: 'XXX',
    contactName: 'XXX',
    post: '总经理',
    cellphone: '13111111111',
    email: 'a@a.com',
    description: '主营五金化工,建材等'
  }
}
export const DatabaseTempData = {
  list: [
    {
      key: 1,
      name: 'dump20181111-12:13.dump',
      backupDate: 1521188887000
    },
    {
      key: 2,
      name: 'dump20181111-12:14.dump',
      backupDate: 1521188972000
    },
    {
      key: 3,
      name: 'dump20181111-12:15.dump',
      backupDate: 1521188981000
    },
    {
      key: 4,
      name: 'dump20181111-12:16.dump',
      backupDate: 1521188989000
    },
    {
      key: 5,
      name: 'dump20181111-12:19.dump',
      backupDate: 1521188999000
    }
  ]
}
export const SaleStrategyData = {
  list: [
    {
      key: 1,
      name: '周末特价',
      beginDate: 1521188887000,
      endDate: 1521188887000,
      lowerLimit: 500,
      discount: 0.3,
      description: '某节日特价促销'
    },
    {
      key: 2,
      name: '中秋特价',
      beginDate: 1521188897000,
      endDate: 1521188889111,
      lowerLimit: 500,
      fullCut: 50,
      description: '某节日特价促销'
    },
    {
      key: 3,
      name: '年中大促',
      beginDate: 1521188887000,
      endDate: 1521188887000,
      lowerLimit: 500,
      discount: 0.1,
      fullCut: 50,
      description: '某节日特价促销'
    }
  ],
  single: {
    id: 3,
    name: '年中大促',
    beginDate: 1521188887000,
    endDate: 1521188887000,
    lowerLimit: 500,
    discount: 0.1,
    fullCut: 50,
    description: '某节日特价促销'
  }
}
export const ReportDesignTempData = {
  single: {
    id: 1,
    reportStyle: 1
  }
}

// baseData
export const productCategory = {
  list: [
    {
      key: 1,
      name: '小鱼',
      parent: '2'
    },
    {
      key: 2,
      name: '旺仔饼干',
      parent: '3'
    }
  ],
  single: {
    id: 1,
    name: '熊仔饼',
    parent: '3'
  }

}
export const product = {
  list: [
    {
      key: 1,
      name: '小黄鱼',
      code: 'p12332211123',
      productCategory: '海鲜',
      costPrice: 12.3,
      salePrice: 15.3
    },
    {
      key: 2,
      name: '小饼干',
      code: 'p123322111233',
      productCategory: '饼干',
      costPrice: 13.3,
      salePrice: 16.3
    }
  ],
  single: {
    id: 1,
    name: '小黄鱼',
    code: 'p12332211123',
    productCategory: '2',
    costPrice: 12.3,
    salePrice: 15.3,
    lowerLimit: 15.3,
    pictures: ['//localhost:8080/static/images/testpic.jpg', '//localhost:8080/static/images/testpic.jpg'],
    isCombination: false,
    isMaterial: true,
    unit: '个',
    weight: 11,
    weightUnit: 'g',
    volume: 12,
    volumeUnit: 'l'
  }

}
export const store = {
  list: [
    {
      key: 1,
      name: '仓库1',
      code: '1223222@@',
      volume: 11113,
      isPrimary: '是',
      positions: [
        {
          key: 1,
          name: '库位1',
          volume: 1213
        },
        {
          key: 2,
          name: '库位2',
          volume: 1113
        }
      ]
    },
    {
      key: 2,
      name: '仓库2',
      code: '122222122@@',
      volume: 1111,
      isPrimary: '否',
      positions: [
        {
          key: 1,
          name: '库位1',
          volume: 111
        },
        {
          key: 2,
          name: '库位2',
          volume: 1000
        }
      ]
    }
  ],
  single: {
    id: 1,
    name: '仓库1',
    code: '1223222@@',
    volume: 11113,
    isPrimary: true,
    positions: [
      {
        id: 1,
        name: '库位1',
        volume: 111
      },
      {
        id: 2,
        name: '库位2',
        volume: 1000
      }
    ]
  }

}
export const supplier = {
  list: [
    {
      key: 1,
      name: '供货商1',
      code: '111sssssxxx',
      contactName: '李XX',
      cellphone: '1311111111',
      email: 'a@q.com',
      isPrimary: '是',
      description: '主要供应XX货物'
    },
    {
      key: 2,
      name: '供货商2',
      code: '111sssssxxx',
      contactName: '李XX',
      cellphone: '1311111111',
      email: 'a@q.com',
      isPrimary: '否',
      description: '主要供应XX原料'
    }
  ],
  single: {
    id: 2,
    name: '供货商2',
    code: '111sssssxxx',
    isPrimary: true,
    contactName: '李XX',
    post: '销售经理',
    cellphone: '1311111111',
    phone: '331111111',
    fax: '331111111',
    email: 'a@q.com',
    description: '主要供应XX原料'
  }
}
export const client = {
  list: [
    {
      key: 1,
      name: '客户1',
      code: '111sssssxxx',
      contactName: '李XX',
      cellphone: '1311111111',
      email: 'a@q.com',
      isPrimary: '是',
      description: '主要供应XX货物'
    },
    {
      key: 2,
      name: '客户2',
      code: '111sssssxxx',
      contactName: '李XX',
      cellphone: '1311111111',
      email: 'a@q.com',
      isPrimary: '否',
      description: '主要供应XX原料'
    }
  ],
  single: {
    id: 2,
    name: '客户2',
    code: '111sssssxxx',
    isPrimary: true,
    contactName: '李XX',
    post: '采购经理',
    cellphone: '1311111111',
    phone: '331111111',
    fax: '331111111',
    email: 'a@q.com',
    description: '主要供应XX原料'
  }
}
export const employee = {
  list: [
    {
      key: 1,
      name: '业务员1',
      code: '111sssssxxx',
      post: '库存管理员',
      relatedStores: ['仓库1', '仓库2'],
      cellphone: '1311111111',
      email: 'a@q.com',
      description: '主要供处理库存物资'
    },
    {
      key: 2,
      name: '业务员2',
      code: '111sssssxxx',
      post: '库存管理员',
      relatedStores: ['仓库1', '仓库2'],
      cellphone: '1311111111',
      email: 'a@q.com',
      description: '主要供处理库存物资'
    }
  ],
  single: {
    key: 2,
    name: '业务员2',
    code: '111sssssxxx',
    post: 1,
    relatedStores: [1, 2],
    cellphone: '1311111111',
    email: 'a@q.com',
    description: '主要供处理库存物资'
  }
}



