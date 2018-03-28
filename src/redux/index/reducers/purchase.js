/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'
import {ramdonSn} from '../../../common/Utils'

const purchaseApplicationList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASEAPPLICATION_LIST') > -1 || action.type.indexOf('PUCHASE_PURCHASEAPPLICATION_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseApplicationSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASEAPPLICATION_SINGLE') > -1 || action.type.indexOf('PUCHASE_PURCHASEAPPLICATION_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const purchaseAuditList = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('PUCHASE_PURCHASEAUDIT_LIST') > -1) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseAuditProcess = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('PUCHASE_PURCHASEAUDIT_PROCESS') > -1 ) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const purchaseLoadingList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASELOADING_LIST') > -1 || action.type.indexOf('PUCHASE_PURCHASELOADING_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseLoadingSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASELOADING_SINGLE') > -1 || action.type.indexOf('PUCHASE_PURCHASELOADING_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const purchaseReturnApplicationList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASERETURNAPPLICATION_LIST') > -1 || action.type.indexOf('PUCHASE_PURCHASERETURNAPPLICATION_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseReturnApplicationSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASERETURNAPPLICATION_SINGLE') > -1 || action.type.indexOf('PUCHASE_PURCHASERETURNAPPLICATION_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const purchaseReturnAuditList = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('PUCHASE_PURCHASERETURNAUDIT_LIST') > -1 ) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseReturnAuditProcess = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('PUCHASE_PURCHASERETURNAUDIT_PROCESS') > -1 ) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const purchaseReturnList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASERETURN_LIST') > -1 || action.type.indexOf('PUCHASE_PURCHASERETURN_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseReturnSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('PUCHASE_PURCHASERETURN_SINGLE') > -1 || action.type.indexOf('PUCHASE_PURCHASERETURN_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const purchaseFiledList = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('PUCHASE_PURCHASEFILED_LIST') > -1 ) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const purchaseFiledDetail = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('PUCHASE_PURCHASEFILED_DETAIL') > -1 ) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

export default {
  purchaseApplicationList,
  purchaseApplicationSingle,
  purchaseAuditList,
  purchaseAuditProcess,
  purchaseFiledDetail,
  purchaseFiledList,
  purchaseLoadingList,
  purchaseLoadingSingle,
  purchaseReturnApplicationList,
  purchaseReturnApplicationSingle,
  purchaseReturnAuditList,
  purchaseReturnAuditProcess,
  purchaseReturnList,
  purchaseReturnSingle
}
