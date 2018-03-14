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
      data: TempData.PostTempData.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_POST_LIST_QUERY
  })
}

export const getPostSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getPostSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.ACCESSCONTROL_POST_SINGLE_GOT,
        data: TempData.PostTempData.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.ACCESSCONTROL_POST_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.ACCESSCONTROL_POST_SINGLE_INIT,
    })
  }
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

export const deletePost = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deletePost  success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_POST_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_POST_DELETE_BEGIN,
  })
}

// Authority
export const getAuthorityList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    // data to server
    console.log('getAuthorityList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITY_LIST_GOT,
      data: TempData.AuthorityTempData.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_AUTHORITY_LIST_QUERY
  })
}

export const getAuthoritySingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getAuthoritySingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.ACCESSCONTROL_AUTHORITY_SINGLE_GOT,
        data: TempData.AuthorityTempData.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITY_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITY_SINGLE_INIT,
    })
  }
}

export const saveAuthority = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveAuthority success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITY_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_AUTHORITY_SAVE_BEGIN,
  })
}


export const deleteAuthority = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteAuthority success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITY_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_AUTHORITY_DELETE_BEGIN,
  })
}
