/**
 * Created by Donghui Huo on 2018/1/31.
 */
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default middleware
