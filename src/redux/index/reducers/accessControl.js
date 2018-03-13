/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const accessControlPostList = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('ACCESSCONTROL_POST_LIST') > -1) {
    return Object.assign(state, action)
  } else {
    return state
  }
}
const accessControlPostSingle = (state = {}, action) => {
  if (action && action.type && (action.type.indexOf('ACCESSCONTROL_POST_SINGLE') > -1 || action.type.indexOf('ACCESSCONTROL_POST_SAVE') > -1)) {
    return Object.assign(state, action)
  } else {
    return state
  }
}
export default {accessControlPostList, accessControlPostSingle}
