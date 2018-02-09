/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'
const example = (state = {}, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.EXAMPLE_WELCOME:
        return {...state, welcome: 'welcome, ' + action.name, dateNow: new Date().toLocaleString()}
      default:
        return {...state, dateNow: new Date().toLocaleString()}
    }
  } else {
    return {...state, dateNow: new Date().toLocaleString()}
  }
}

export default example
