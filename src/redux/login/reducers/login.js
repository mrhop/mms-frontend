/**
 * Created by Donghui Huo on 2018/1/31.
 */
const login = (state = {}, action) => {
  if (action) {
    return {...state, status: action.type}
  }
}

export default login
