/**
 * Created by Donghui Huo on 2018/3/13.
 */
import * as actionTypes from './ActionTypes'
import * as TempData from '../../../common/TempData'
export const getPostList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPostList success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_POST_LIST_GOT,
      data: TempData.PostTempData.list.data
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_POST_LIST_QUERY
  })
}

export const getPostSingle = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPostSingle success')
    // 此处返回快捷方式的data
    Object.assign(data, {
      type: actionTypes.ACCESSCONTROL_POST_SINGLE_GOT,
      data: TempData.PostTempData.single.data
    })
    return dispatch(data)
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_POST_SINGLE_QUERY
  })
}

export const savePost = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('savePost success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_POST_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_POST_SAVE_BEGIN,
  })
}
