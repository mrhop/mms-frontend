/**
 * Created by Donghui Huo on 2018/3/6.
 */
import {BasicColor} from './Utils'
function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push((Math.random() * (max - min)) + min);
  }
  return rtn;
}

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
