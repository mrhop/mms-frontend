/**
 * Created by Donghui Huo on 2018/3/6.
 */
// Index
import  Index from '../../components/index/Index'
// access control
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
// BASE DATA
import  BaseData from '../../components/index/baseData'
import  Client from '../../components/index/baseData/client'
import  AddClient from '../../components/index/baseData/client/Add'
import  UpdateClient from '../../components/index/baseData/client/Update'
import  Employee from '../../components/index/baseData/employee'
import  EmployeeAdd from '../../components/index/baseData/employee/Add'
import  EmployeeUpdate from '../../components/index/baseData/employee/Update'
import  Product from '../../components/index/baseData/product'
import  ProductAdd from '../../components/index/baseData/product/Add'
import  ProductUpdate from '../../components/index/baseData/product/Update'
import  ProductCategory from '../../components/index/baseData/productCategory'
import  ProductCategoryAdd from '../../components/index/baseData/productCategory/Add'
import  ProductCategoryUpdate from '../../components/index/baseData/productCategory/Update'
import  Store from '../../components/index/baseData/store'
import  StoreAdd from '../../components/index/baseData/store/Add'
import  StoreUpdate from '../../components/index/baseData/store/Update'
import  Supplier from '../../components/index/baseData/supplier'
import  SupplierAdd from '../../components/index/baseData/supplier/Add'
import  SupplierUpdate from '../../components/index/baseData/supplier/Update'

// PURCHASE
import  Purchase from '../../components/index/purchase'
import  PurchaseApplication from '../../components/index/purchase/purchaseApplication'
import  AddPurchaseApplication from '../../components/index/purchase/purchaseApplication/Add'
import  UpdatePurchaseApplication from '../../components/index/purchase/purchaseApplication/Update'
import  PurchaseLoading from '../../components/index/purchase/purchaseLoading'
import  AddPurchaseLoading from '../../components/index/purchase/purchaseLoading/Add'
import  UpdatePurchaseLoading from '../../components/index/purchase/purchaseLoading/Update'
import  PurchaseReturn from '../../components/index/purchase/purchaseReturn'
import  AddPurchaseReturn from '../../components/index/purchase/purchaseReturn/Add'
import  UpdatePurchaseReturn from '../../components/index/purchase/purchaseReturn/Update'
import  PurchaseReturnApplication from '../../components/index/purchase/purchaseReturnApplication'
import  AddPurchaseReturnApplication from '../../components/index/purchase/purchaseReturnApplication/Add'
import  UpdatePurchaseReturnApplication from '../../components/index/purchase/purchaseReturnApplication/Update'
import  PurchaseAudit from '../../components/index/purchase/PurchaseAudit'
import  PurchaseReturnAudit from '../../components/index/purchase/PurchaseReturnAudit'
import  PurchaseFiled from '../../components/index/purchase/PurchaseFiled'


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

  },
  {
    path: "/basedata",
    component: BaseData,
    routes: [
      {
        path: "/basedata/client",
        component: Client
      },
      {
        path: "/basedata/client/addclient",
        component: AddClient
      },
      {
        path: "/basedata/client/updateclient",
        component: UpdateClient
      },
      {
        path: "/basedata/employee",
        component: Employee
      },
      {
        path: "/basedata/employee/addemployee",
        component: EmployeeAdd
      },
      {
        path: "/basedata/employee/updateemployee",
        component: EmployeeUpdate
      },
      {
        path: "/basedata/product",
        component: Product
      },
      {
        path: "/basedata/product/addproduct",
        component: ProductAdd
      },
      {
        path: "/basedata/product/updateproduct",
        component: ProductUpdate
      },
      {
        path: "/basedata/productcategory",
        component: ProductCategory
      },
      {
        path: "/basedata/productcategory/addproductcategory",
        component: ProductCategoryAdd
      },
      {
        path: "/basedata/productcategory/updateproductcategory",
        component: ProductCategoryUpdate
      },
      {
        path: "/basedata/store",
        component: Store
      },
      {
        path: "/basedata/store/addstore",
        component: StoreAdd
      },
      {
        path: "/basedata/store/updatestore",
        component: StoreUpdate
      },
      {
        path: "/basedata/supplier",
        component: Supplier
      },
      {
        path: "/basedata/supplier/addsupplier",
        component: SupplierAdd
      },
      {
        path: "/basedata/supplier/updatesupplier",
        component: SupplierUpdate
      }
    ]
  },
  {
    path: "/purchase",
    component: Purchase,
    routes: [
      {
        path: "/purchase/purchaseapplication",
        component: PurchaseApplication
      },
      {
        path: "/purchase/purchaseapplication/addpurchaseapplication",
        component: AddPurchaseApplication
      },
      {
        path: "/purchase/purchaseapplication/updatepurchaseapplication",
        component: UpdatePurchaseApplication
      },
      {
        path: "/purchase/purchaseaudit",
        component: PurchaseAudit
      },
      {
        path: "/purchase/purchaseloading",
        component: PurchaseLoading
      },
      {
        path: "/purchase/purchaseloading/addpurchaseloading",
        component: AddPurchaseLoading
      },
      {
        path: "/purchase/purchaseloading/updatepurchaseloading",
        component: UpdatePurchaseLoading
      },
      {
        path: "/purchase/purchasereturnapplication",
        component: PurchaseReturnApplication
      },
      {
        path: "/purchase/purchasereturnapplication/addpurchasereturnapplication",
        component: AddPurchaseReturnApplication
      },
      {
        path: "/purchase/purchasereturnapplication/updatepurchasereturnapplication",
        component: UpdatePurchaseReturnApplication
      },
      {
        path: "/purchase/purchasereturnaudit",
        component: PurchaseReturnAudit
      },
      {
        path: "/purchase/purchasereturn",
        component: PurchaseReturn
      },
      {
        path: "/purchase/purchasereturn/addpurchasereturn",
        component: AddPurchaseReturn
      },
      {
        path: "/purchase/purchasereturn/updatepurchasereturn",
        component: UpdatePurchaseReturn
      },
      {
        path: "/purchase/purchasefiled",
        component: PurchaseFiled
      },
    ]
  },
];
