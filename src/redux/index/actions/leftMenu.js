import * as actionTypes from './ActionTypes'
export const leftMenu = (data) => (dispatch, getState) => {
  // to server
  setTimeout(function () {
    console.log('leftMenu get success')
    // 此处返回快捷方式的data
    return dispatch({
      type: actionTypes.LEFT_MENU_INITED,
      data: [{
        id: 1,
        title: 'Menu1',
        icon: 'setting',
        url: '/test1'
      }, {
        id:2,
        title: 'Menu2',
        icon: 'mail',
        children: [
          {
            id:3,
            title: 'Menu2-1',
            icon: 'appstore',
            url: '/test2/mail1'
          },
          {
            id:4,
            title: 'Menu2-2',
            icon: 'appstore',
            children: [
              {
                id:5,
                title: 'Menu2-2-1',
                url: '/test2/mail2/user1'
              }]
          }
        ]
      }]
    })
  }, 300)
  return dispatch({
    type: actionTypes.LEFT_MENU_INITING
  })
}

