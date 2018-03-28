/**
 * Created by Donghui Huo on 2018/3/13.
 */
import * as actionTypes from './ActionTypes'
import * as TempData from '../../../common/TempData'
// PurchaseApplication
export const getPurchaseApplicationList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseApplicationList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAPPLICATION_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEAPPLICATION_LIST_QUERY
  })
}

export const getPurchaseApplicationSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getPurchaseApplicationSingle success', data)
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.PUCHASE_PURCHASEAPPLICATION_SINGLE_GOT,
        data: TempData.productCategory.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAPPLICATION_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAPPLICATION_SINGLE_INIT,
    })
  }
}

export const savePurchaseApplication = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('savePurchaseApplication success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAPPLICATION_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEAPPLICATION_SAVE_BEGIN,
  })
}

export const deletePurchaseApplication = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deletePurchaseApplication  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAPPLICATION_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEAPPLICATION_DELETE_BEGIN,
  })
}

// PurchaseAudit
export const getPurchaseAuditList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseAuditList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAUDIT_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEAUDIT_LIST_QUERY
  })
}

export const processPurchaseAudit = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 进行通过和非通过的处理
    console.log('processPurchaseAudit success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEAUDIT_PROCESS_DONE,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEAUDIT_PROCESS_BEGIN,
  })
}

// purchaseLoading
export const getPurchaseLoadingList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseLoadingList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASELOADING_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASELOADING_LIST_QUERY
  })
}

export const getPurchaseLoadingSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getPurchaseLoadingSingle success', data)
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.PUCHASE_PURCHASELOADING_SINGLE_GOT,
        data: TempData.productCategory.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASELOADING_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASELOADING_SINGLE_INIT,
    })
  }
}

export const savePurchaseLoading = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('savePurchaseLoading success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASELOADING_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASELOADING_SAVE_BEGIN,
  })
}

export const deletePurchaseLoading = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deletePurchaseLoading  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASELOADING_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASELOADING_DELETE_BEGIN,
  })
}

// purchaseReturnApplication
export const getPurchaseReturnApplicationList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseReturnApplicationList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_LIST_QUERY
  })
}

export const getPurchaseReturnApplicationSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getPurchaseReturnApplicationSingle success', data)
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_SINGLE_GOT,
        data: TempData.productCategory.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_SINGLE_INIT,
    })
  }
}

export const savePurchaseReturnApplication = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('savePurchaseReturnApplication success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_SAVE_BEGIN,
  })
}

export const deletePurchaseReturnApplication = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deletePurchaseReturnApplication  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURNAPPLICATION_DELETE_BEGIN,
  })
}

// PurchaseReturnAudit
export const getPurchaseReturnAuditList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseReturnAuditList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAUDIT_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURNAUDIT_LIST_QUERY
  })
}

export const processPurchaseReturnAudit = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 进行通过和非通过的处理
    console.log('processPurchaseReturnAudit success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURNAUDIT_PROCESS_DONE,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURNAUDIT_PROCESS_BEGIN,
  })
}

// purchaseReturn
export const getPurchaseReturnList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseReturnList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURN_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURN_LIST_QUERY
  })
}

export const getPurchaseReturnSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getPurchaseReturnSingle success', data)
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.PUCHASE_PURCHASERETURN_SINGLE_GOT,
        data: TempData.productCategory.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURN_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURN_SINGLE_INIT,
    })
  }
}

export const savePurchaseReturn = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('savePurchaseReturn success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURN_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURN_SAVE_BEGIN,
  })
}

export const deletePurchaseReturn = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deletePurchaseReturn  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASERETURN_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASERETURN_DELETE_BEGIN,
  })
}

// PurchaseFiled
export const getPurchaseFiledList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPurchaseFiledList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEFILED_LIST_GOT,
      data: TempData.productCategory.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEFILED_LIST_QUERY
  })
}

export const getPurchaseFiledDetail = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 进行通过和非通过的处理
    console.log('getPurchaseFiledDetail success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.PUCHASE_PURCHASEFILED_DETAIL_DONE,
    })
  }, 300)
  return dispatch({
    type: actionTypes.PUCHASE_PURCHASEFILED_DETAIL_BEGIN,
  })
}





