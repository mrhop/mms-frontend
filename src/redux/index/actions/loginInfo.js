import * as actionTypes from './ActionTypes'
export const loginInfo = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    console.log('shortcut get success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.LOGIN_INFO_INITED,
      data: [{
        title: '采购入库审批',
        url: 'purchase/approval'
      }, {
        title: '销售出库审批',
        url: 'sell/approval'
      }]
    })
  }, 1000)
  return dispatch({
    type: actionTypes.LOGIN_INFO_INITING
  })
}

