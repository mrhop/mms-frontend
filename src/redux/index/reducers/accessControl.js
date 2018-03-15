/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const accessControlPostList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_POST_LIST') > -1 || action.type.indexOf('ACCESSCONTROL_POST_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const accessControlPostSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_POST_SINGLE') > -1 || action.type.indexOf('ACCESSCONTROL_POST_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const accessControlAuthorityList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_AUTHORITY_LIST') > -1 || action.type.indexOf('ACCESSCONTROL_AUTHORITY_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const accessControlAuthoritySingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_AUTHORITY_SINGLE') > -1 || action.type.indexOf('ACCESSCONTROL_AUTHORITY_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}

const accessControlRoleList = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_ROLE_LIST') > -1 || action.type.indexOf('ACCESSCONTROL_ROLE_DELETE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const accessControlRoleSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_ROLE_SINGLE') > -1 || action.type.indexOf('ACCESSCONTROL_ROLE_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
export default {
  accessControlPostList,
  accessControlPostSingle,
  accessControlAuthorityList,
  accessControlAuthoritySingle,
  accessControlRoleList,
  accessControlRoleSingle
}
