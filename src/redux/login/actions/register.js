import * as actionTypes from './ActionTypes'
export const register = (data) => (dispatch, getState) => {
  // to server
  // 这样的不允许回退
  setTimeout(function () {
    console.log('register success')
    return dispatch({
      type: actionTypes.REGISTER_COMMITTED
    })
  }, 2000)
  return dispatch({
    type: actionTypes.REGISTER_COMMITTING,
    data
  })
}
