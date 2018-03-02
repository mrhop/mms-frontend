import * as actionTypes from './ActionTypes'
export const shortcut = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    console.log('shortcut get success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.SHORTCUT_INITED,
      data:[{
        label:'个人信息修改',
        value:'personalinfo'
      }]
    })
  }, 2000)
  return dispatch({
    type: actionTypes.SHORTCUT_INITING
  })
}

