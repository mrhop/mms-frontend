import * as actionTypes from './ActionTypes'
export const login = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    console.log('login in success', data)
    return dispatch({
      type: actionTypes.LOGIN_COMMITTED
    })
  }, 2000)
  return dispatch({
    type: actionTypes.LOGIN_COMMITTING
  })
}
