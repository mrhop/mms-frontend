/**
 * Created by Donghui Huo on 2018/1/31.
 */
const forget = (state = {}, action) => {
  if (action) {
    return {...state, status: action.type}
  }
}

export default forget
