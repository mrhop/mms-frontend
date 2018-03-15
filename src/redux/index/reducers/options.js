/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const accessControlPostOptions = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('ACCESSCONTROL_POST_OPTIONS') > -1) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}


const accessControlAuthorityParentOptions = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('ACCESSCONTROL_AUTHORITYPARENT_OPTIONS') > -1) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const accessControlAuthorityParentTreeOptions = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('ACCESSCONTROL_AUTHORITYPARENT_TREE_OPTIONS') > -1) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}
const accessControlRoleOptions = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('ACCESSCONTROL_ROLE_OPTIONS_GOT') > -1) {
    return Object.assign(state, action)
  } else {
    return {}
  }
}


export default {
  accessControlPostOptions,
  accessControlAuthorityParentOptions,
  accessControlAuthorityParentTreeOptions,
  accessControlRoleOptions
}
