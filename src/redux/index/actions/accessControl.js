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
    console.log('saveAuthority success', data)
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

// Role
export const getRoleList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    // data to server
    console.log('getRoleList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_ROLE_LIST_GOT,
      data: TempData.RoleTempData.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_ROLE_LIST_QUERY
  })
}

export const getRoleSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getRoleSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.ACCESSCONTROL_ROLE_SINGLE_GOT,
        data: TempData.RoleTempData.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.ACCESSCONTROL_ROLE_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.ACCESSCONTROL_ROLE_SINGLE_INIT,
    })
  }
}

export const saveRole = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveRole success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_ROLE_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_ROLE_SAVE_BEGIN,
  })
}

export const deleteRole = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteRole success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_ROLE_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_ROLE_DELETE_BEGIN,
  })
}

// User
export const getUserList = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    // data to server
    console.log('getUserList success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_USER_LIST_GOT,
      data: TempData.UserTempData.list
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_USER_LIST_QUERY
  })
}

export const getUserSingle = (data) => (dispatch, getState) => {
  // to server
  if (data && data.id) {
    setTimeout(function () {
      // 根据时间段，关键条件进行过滤
      console.log('getUserSingle success')
      // 此处返回快捷方式的data
      return dispatch(Object.assign(data, {
        type: actionTypes.ACCESSCONTROL_USER_SINGLE_GOT,
        data: TempData.UserTempData.single
      }))
    }, 300)
    return dispatch({
      type: actionTypes.ACCESSCONTROL_USER_SINGLE_QUERY
    })
  } else {
    return dispatch({
      type: actionTypes.ACCESSCONTROL_USER_SINGLE_INIT,
    })
  }
}

export const saveUser = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('saveUser success', data)
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_USER_SAVE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_USER_SAVE_BEGIN,
  })
}

export const deleteUser = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    // 根据时间段，关键条件进行过滤
    console.log('deleteUser success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.ACCESSCONTROL_USER_DELETE_SUCCESS,
    })
  }, 300)
  return dispatch({
    type: actionTypes.ACCESSCONTROL_USER_DELETE_BEGIN,
  })
}
