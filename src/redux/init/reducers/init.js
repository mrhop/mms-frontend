/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'
const init = (state = {data: {}}, action) => {
  switch (action.type) {
    case actionTypes.INIT_FIRST_PAGE:
      return {...state, status: 'init1'}
    case actionTypes.INIT_DB_TESTING:
      return {...state, status: 'dbTesting'}
    case actionTypes.INIT_DB_TEST_SUCCESS:
      return {...state, status: 'dbTestSuccess'}
    case actionTypes.INIT_DB_TEST_FAILURE:
      return {...state, status: 'dbTestFailure'}
    case actionTypes.INIT1_COMMITTED:
      return {...state, status: 'init2', data: {...state.data, data1: action.data}}
    case actionTypes.INIT1_COMMIT_FAILURE:
      return {...state, status: 'init1CommitFailure'}
    case actionTypes.INIT2_PAGE_BACK:
      return {...state, status: 'init1', data: {...state.data, data2: action.data}}
    case actionTypes.INIT2_COMMITTED:
      return {...state, status: 'init3', data: {...state.data, data2: action.data}}
    case actionTypes.INIT2_COMMIT_FAILURE:
      return {...state, status: 'init2CommitFailure'}
    case actionTypes.INIT3_COMMITTED:
      return {...state, status: 'gotoIndex'}
    default:
      return state
  }
}

export default init
