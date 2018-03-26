/**
 * Created by Donghui Huo on 2018/3/13.
 */
import * as actionTypes from './ActionTypes'
import * as TempData from '../../../common/TempData'
// productCategory
export const getProductCategoryList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getProductCategoryList success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCTCATEGORY_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_PRODUCTCATEGORY_LIST_QUERY
  })
}

export const getProductCategorySingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getProductCategorySingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.BASEDATA_PRODUCTCATEGORY_SINGLE_GOT,
        data: TempData.productCategory.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCTCATEGORY_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCTCATEGORY_SINGLE_INIT,
    })
  }
}

export const saveProductCategory = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveProductCategory success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCTCATEGORY_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_PRODUCTCATEGORY_SAVE_BEGIN,
  })
}

export const deleteProductCategory = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteProductCategory  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCTCATEGORY_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_PRODUCTCATEGORY_DELETE_BEGIN,
  })
}
// product
export const getProductList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getProductList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCT_LIST_GOT,
      data: TempData.product.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_PRODUCT_LIST_QUERY
  })
}

export const getProductSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getProductSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.BASEDATA_PRODUCT_SINGLE_GOT,
        data: TempData.product.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCT_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCT_SINGLE_INIT,
    })
  }
}

export const saveProduct = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveProduct success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCT_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_PRODUCT_SAVE_BEGIN,
  })
}

export const deleteProduct = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteProduct  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_PRODUCT_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_PRODUCT_DELETE_BEGIN,
  })
}
// store
export const getStoreList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getStoreList success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_STORE_LIST_GOT,
      data: TempData.store.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_STORE_LIST_QUERY
  })
}

export const getStoreSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getStoreSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.BASEDATA_STORE_SINGLE_GOT,
        data: TempData.store.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_STORE_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.BASEDATA_STORE_SINGLE_INIT,
    })
  }
}

export const saveStore = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveStore success', data)
    // 此处返回快捷方式的data
    getState().baseDataStorePositionList = {data: []}
    return dispatch({
      type: actionTypes.BASEDATA_STORE_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_STORE_SAVE_BEGIN,
  })
}

export const deleteStore = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteStore  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_STORE_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_STORE_DELETE_BEGIN,
  })
}
// STORE POSITION
export const getStorePositionList = (data) => (dispatch, getState) => {
  if (data && data.storeId) {
    setTimeout(function () {
      console.log('getStoreList success')
      // 此处返回data
      return dispatch({
        type: actionTypes.BASEDATA_STORE_POSITION_LIST_GOT,
      })
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_STORE_POSITION_LIST_QUERY
    })
  }
  return dispatch({
    type: actionTypes.BASEDATA_STORE_POSITION_LIST_GOT
  })
}

export const getStorePositionSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    const {baseDataStorePositionList} = getState()
    if (baseDataStorePositionList.data) {
      let filteSingle = baseDataStorePositionList.data.filter(function (val) {
        return val.id === data.id
      })
      if (filteSingle != null && filteSingle[0]) {
        return dispatch(Object.assign(data, {
          type: actionTypes.BASEDATA_STORE_POSITION_SINGLE_GOT,
          data: filteSingle[0]
        }))
      }
    }
  }
  return dispatch({
    type: actionTypes.BASEDATA_STORE_POSITION_SINGLE_INIT,
  })
}

export const saveStorePosition = (data) => (dispatch, getState) => {
  console.log('saveStore success')
  // 此处返回快捷方式的data
  return dispatch({
    data,
    type: actionTypes.BASEDATA_STORE_POSITION_SAVE_SUCCESS,
  })
}

export const deleteStorePosition = (data) => (dispatch, getState) => {
  return dispatch({
    type: actionTypes.BASEDATA_STORE_POSITION_DELETE_SUCCESS,
    data
  })
}
// supplier
export const getSupplierList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getSupplierList success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_SUPPLIER_LIST_GOT,
      data: TempData.supplier.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_SUPPLIER_LIST_QUERY
  })
}

export const getSupplierSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getSupplierSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.BASEDATA_SUPPLIER_SINGLE_GOT,
        data: TempData.supplier.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_SUPPLIER_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.BASEDATA_SUPPLIER_SINGLE_INIT,
    })
  }
}

export const saveSupplier = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveSupplier success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_SUPPLIER_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_SUPPLIER_SAVE_BEGIN,
  })
}

export const deleteSupplier = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteSupplier  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_SUPPLIER_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_SUPPLIER_DELETE_BEGIN,
  })
}
// client
export const getClientList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getClientList success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_CLIENT_LIST_GOT,
      data: TempData.client.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_CLIENT_LIST_QUERY
  })
}

export const getClientSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getClientSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.BASEDATA_CLIENT_SINGLE_GOT,
        data: TempData.client.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_CLIENT_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.BASEDATA_CLIENT_SINGLE_INIT,
    })
  }
}

export const saveClient = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveClient success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_CLIENT_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_CLIENT_SAVE_BEGIN,
  })
}

export const deleteClient = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteClient  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_CLIENT_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_CLIENT_DELETE_BEGIN,
  })
}
// employee
export const getEmployeeList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getEmployeeList success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_EMPLOYEE_LIST_GOT,
      data: TempData.employee.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_EMPLOYEE_LIST_QUERY
  })
}

export const getEmployeeSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getEmployeeSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.BASEDATA_EMPLOYEE_SINGLE_GOT,
        data: TempData.employee.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.BASEDATA_EMPLOYEE_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.BASEDATA_EMPLOYEE_SINGLE_INIT,
    })
  }
}

export const saveEmployee = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveEmployee success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_EMPLOYEE_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_EMPLOYEE_SAVE_BEGIN,
  })
}

export const deleteEmployee = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteEmployee  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.BASEDATA_EMPLOYEE_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.BASEDATA_EMPLOYEE_DELETE_BEGIN,
  })
}



