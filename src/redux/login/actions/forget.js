import * as actionTypes from './ActionTypes'
export const forget = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    console.log('forget reset success')
    return dispatch({
      type: actionTypes.FORGET_COMMITTED
    })
  }, 2000)
  return dispatch({
    type: actionTypes.FORGET_COMMITTING
  })
}

