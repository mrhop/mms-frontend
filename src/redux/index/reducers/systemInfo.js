/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'


const systemInfoSettingSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('SYSTEMINFO_SETTING_SINGLE') > -1 || action.type.indexOf('SYSTEMINFO_SETTING_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const systemInfoCompanyInfoSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('SYSTEMINFO_COMPANYINFO_SINGLE') > -1 || action.type.indexOf('SYSTEMINFO_COMPANYINFO_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const systemInfoDatabaseList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('SYSTEMINFO_DATABASE_LIST') > -1 || action.type.indexOf('SYSTEMINFO_DATABASE_BACKUP') > -1 || action.type.indexOf('SYSTEMINFO_DATABASE_RESTORE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const systemInfoSaleStrategyList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('SYSTEMINFO_SALESTRATEGY_LIST') > -1 || action.type.indexOf('SYSTEMINFO_SALESTRATEGY_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const systemInfoSaleStrategySingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('SYSTEMINFO_SALESTRATEGY_SINGLE') > -1 || action.type.indexOf('SYSTEMINFO_SALESTRATEGY_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const systemInfoReportDesignSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('SYSTEMINFO_REPORTDESIGN_SINGLE') > -1 || action.type.indexOf('SYSTEMINFO_REPORTDESIGN_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
export default {
  systemInfoSettingSingle,
  systemInfoCompanyInfoSingle,
  systemInfoDatabaseList,
  systemInfoSaleStrategyList,
  systemInfoSaleStrategySingle,
  systemInfoReportDesignSingle
}
