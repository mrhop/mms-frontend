/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const loginInfo = (state = {}, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.LOGIN_INFO_INITED:
        return {...state, status: action.type, data: action.data}
      default:
        return {...state, status: action.type}
    }
  }
}

export default loginInfo
