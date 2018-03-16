/**
 * Created by Donghui Huo on 2018/3/13.
 */
import * as actionTypes from './ActionTypes'
import * as TempData from '../../../common/TempData'
// SystemSetting
export const getSystemSettingSingle = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getSystemSettingSingle success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_SETTING_SINGLE_GOT,
      data: TempData.SystemSettingTempData.single
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_SETTING_SINGLE_QUERY
  })
}

export const saveSystemSetting = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveSystemSetting success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_SETTING_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_SETTING_SAVE_BEGIN,
  })
}


// CompanyInfo

export const getCompanyInfoSingle = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getCompanyInfoSingle success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_COMPANYINFO_SINGLE_GOT,
      data: TempData.CompanyInfoTempData.single
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_COMPANYINFO_SINGLE_QUERY
  })
}

export const saveCompanyInfo = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveCompanyInfo success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_COMPANYINFO_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_COMPANYINFO_SAVE_BEGIN,
  })
}

// Database
export const getDatabaseList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    // data to server
    console.log('getDatabaseList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_DATABASE_LIST_GOT,
      data: TempData.DatabaseTempData.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_DATABASE_LIST_QUERY
  })
}

export const backupDatabase = () => (dispatch, getState) => {
  // to server 进行数据库备份
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('backUpDatabase success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_DATABASE_BACKUP_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_DATABASE_BACKUP_BEGIN,
  })
}

export const restoreDatabase = (data) => (dispatch, getState) => {
  // to server
  // data 给出ID
  setTimeout(function () {
    console.log('restoreDatabase success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_DATABASE_RESTORE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_DATABASE_RESTORE_BEGIN,
  })
}

// SaleStrategy
export const getSaleStrategyList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    // data to server
    console.log('getSaleStrategyList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_SALESTRATEGY_LIST_GOT,
      data: TempData.SaleStrategyData.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_SALESTRATEGY_LIST_QUERY
  })
}

export const getSaleStrategySingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getSaleStrategySingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.SYSTEMINFO_SALESTRATEGY_SINGLE_GOT,
        data: TempData.SaleStrategyData.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.SYSTEMINFO_SALESTRATEGY_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.SYSTEMINFO_SALESTRATEGY_SINGLE_INIT,
    })
  }
}

export const saveSaleStrategy = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveSaleStrategy success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_SALESTRATEGY_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_SALESTRATEGY_SAVE_BEGIN,
  })
}

export const deleteSaleStrategy = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteSaleStrategy success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_SALESTRATEGY_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_SALESTRATEGY_DELETE_BEGIN,
  })
}

// ReportDesign
export const getReportDesignSingle = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getReportDesignSingle success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_REPORTDESIGN_SINGLE_GOT,
      data: TempData.ReportDesignTempData.single
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_REPORTDESIGN_SINGLE_QUERY
  })
}

export const saveReportDesign = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveReportDesign success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SYSTEMINFO_REPORTDESIGN_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.SYSTEMINFO_REPORTDESIGN_SAVE_BEGIN,
  })
}
