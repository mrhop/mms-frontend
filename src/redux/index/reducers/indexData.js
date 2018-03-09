/**
 * Created by Donghui Huo on 2018/1/31.
 */
import * as actionTypes from '../actions/ActionTypes'

const indexData = (state = {}, action) => {
  if (action) {
    switch (action.type) {
      case actionTypes.INDEX_DATA_INITED:
      case actionTypes.INDEX_DATA_INITING:
        return Object.assign(state, action)
      default:
        return state
    }
  }
}

export default indexData
