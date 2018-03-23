/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const baseDataProductCategoryList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_PRODUCTCATEGORY_LIST') > -1 || action.type.indexOf('BASEDATA_PRODUCTCATEGORY_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataProductCategorySingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_PRODUCTCATEGORY_SINGLE') > -1 || action.type.indexOf('BASEDATA_PRODUCTCATEGORY_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const baseDataProductList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_PRODUCT_LIST') > -1 || action.type.indexOf('BASEDATA_PRODUCT_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataProductSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_PRODUCT_SINGLE') > -1 || action.type.indexOf('BASEDATA_PRODUCT_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const baseDataStoreList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_STORE_LIST') > -1 || action.type.indexOf('BASEDATA_STORE_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataStoreSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_STORE_SINGLE') > -1 || action.type.indexOf('BASEDATA_STORE_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataStorePositionList = (state = {}, action) => {
  if (action.type === actionTypes.BASEDATA_STORE_POSITION_DELETE_SUCCESS) {
    let filters = state.data.filter(function (val) {
      return val.id !== action.data.id
    })
    return {data: filters, type: action.type}
  } else if (action.type === actionTypes.BASEDATA_STORE_POSITION_SAVE_SUCCESS) {
    if (action.data && action.data.id) {
      for (let key in baseDataStorePositionList) {
        if(state.data[key].key === action.data.id){
          state.data[key] = action.data
          state.data[key].key = action.data.id
        }
      }
    }else{
      action.data.key = action.data.id
      state.data.push(action.data)
    }
    return {data: state.data, type: action.type}
  } else if (action && action.type && (action.type.indexOf('BASEDATA_STORE_POSITION_LIST') > -1 ||
      action.type.indexOf('BASEDATA_STORE_POSITION_DELETE') > -1 || action.type.indexOf('BASEDATA_STORE_POSITION_SAVE')>-1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataStorePositionSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_STORE_POSITION_SINGLE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataSupplierList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_SUPPLIER_LIST') > -1 || action.type.indexOf('BASEDATA_SUPPLIER_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataSupplierSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_SUPPLIER_SINGLE') > -1 || action.type.indexOf('BASEDATA_SUPPLIER_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataClientList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_CLIENT_LIST') > -1 || action.type.indexOf('BASEDATA_CLIENT_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataClientSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_CLIENT_SINGLE') > -1 || action.type.indexOf('BASEDATA_CLIENT_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataEmployeeList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_EMPLOYEE_LIST') > -1 || action.type.indexOf('BASEDATA_EMPLOYEE_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const baseDataEmployeeSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('BASEDATA_EMPLOYEE_SINGLE') > -1 || action.type.indexOf('BASEDATA_EMPLOYEE_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

export default {
  baseDataProductCategoryList,
  baseDataProductCategorySingle,
  baseDataProductList,
  baseDataProductSingle,
  baseDataStoreList,
  baseDataStoreSingle,
  baseDataStorePositionList,
  baseDataStorePositionSingle,
  baseDataSupplierList,
  baseDataSupplierSingle,
  baseDataClientList,
  baseDataClientSingle,
  baseDataEmployeeList,
  baseDataEmployeeSingle
}
