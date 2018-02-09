/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'
const init = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.INIT_FIRST_PAGE:
      return {...state, status: 'init1'}
    case actionTypes.INIT_COMMITTED_1:
      return {...state, status: 'init2'}
    case actionTypes.INIT_COMMITTED_2:
      return {...state, status: 'init3'}
    case actionTypes.INIT_COMMITTED_3:
      return {...state, status: 'gotoIndex'}
    default:
      return {...state, status: 'init1'}
  }
}

export default init
