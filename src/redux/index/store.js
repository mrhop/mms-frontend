/**
 * Created by Donghui Huo on 2018/1/31.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux'
import middleware from '../common/middleware'


import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import reducer from './reducers'

const history = createHistory()
const middlewareHistory = routerMiddleware(history)


const store = createStore(combineReducers({
    ...reducer,
    router: routerReducer
  }),
  applyMiddleware(...middleware, middlewareHistory)
)

export {store as default, history}
