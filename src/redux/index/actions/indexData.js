import * as actionTypes from './ActionTypes'
export const indexData = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('index data get success')
    // 此处返回快捷方式的data
    Object.assign(data, {
      type: actionTypes.INDEX_DATA_INITED,
      data: {type: 'you got type' + data.type + '\'s data'},
      dataType: data.type
    })
    return dispatch(data)
  }, 300)
  return dispatch({
    type: actionTypes.INDEX_DATA_INITING,
    dataType: data.type
  })
}

