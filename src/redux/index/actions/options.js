/**
 * Created by Donghui Huo on 2018/3/13.
 */
import * as actionTypes from './ActionTypes'
import * as TempData from '../../../common/TempData'
export const getPostOptions = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getPost option success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_POST_OPTIONS_GOT,
      data: TempData.optionsTempData.post
    })
  }, 300)
}


export const getAuthorityParentOptions = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getAuthorityParent option success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITYPARENT_OPTIONS_GOT,
      data: TempData.optionsTempData.authorityParent
    })
  }, 300)
}

export const getAuthorityParentTreeOptions = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getAuthorityParentTree option success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_AUTHORITYPARENT_TREE_OPTIONS_GOT,
      data: TempData.optionsTempData.authorityParentTree
    })
  }, 300)
}

export const getRoleOptions = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('getRole option success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_ROLE_OPTIONS_GOT,
      data: TempData.optionsTempData.role
    })
  }, 300)
}
