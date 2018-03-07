/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const leftMenu = (state = {}, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.LEFT_MENU_INITED:
        return {...state, status: action.type, data: action.data}
      default:
        return {...state, status: action.type}
    }
  }
}

export default leftMenu
