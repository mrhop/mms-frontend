import * as actionTypes from './ActionTypes'
/** eslint-disable-no-unused-vars **/


export const initOrReFresh = () => (dispatch, getState) => {
  // 进行数据库的查看，查看初始化的状态，并根据此类进行处理，此处只为走通
  console.log('go to init1')
  // window.location.href = '/index.html'
  return dispatch({
    type: actionTypes.INIT_FIRST_PAGE
  })
}

export const initDbTest = (data) => (dispatch, getState) => {
  // to server
  // 这样的不允许回退
  console.log('do db Test')
  return dispatch({
    type: actionTypes.INIT_DB_TEST_SUCCESS
  })
}

export const initSubmit1 = (data) => (dispatch, getState) => {
  // to server
  // 这样的不允许回退
  console.log('do server save1')
  return dispatch({
    type: actionTypes.INIT_COMMITTED_1
  })
}

export const initSubmit2 = (data) => (dispatch, getState) => {
  // to server
  console.log('do server save2')
  return dispatch({
    type: actionTypes.INIT_COMMITTED_2
  })
}

export const initSubmit3 = (data) => (dispatch, getState) => {
  // to server
  console.log('do server save2')
  return dispatch({
    type: actionTypes.INIT_COMMITTED_3
  })
}
