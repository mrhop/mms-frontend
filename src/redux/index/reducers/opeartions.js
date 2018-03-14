/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const accessControlPostOperation = (state = {}, action) => {
  if (action && action.type && action.type.indexOf('ACCESSCONTROL_POST_OPTIONS') > -1) {
    return Object.assign(state, action)
  } else {
    return state
  }
}

export default {
  accessControlPostOperation
}
