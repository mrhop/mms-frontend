/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const locationChange = (state = {}, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.LOCATION_CHANGE:
        return {...state, status: action.type, data: action.payload}
      default:
        return {...state, status: action.type}
    }
  }
}

export default locationChange
