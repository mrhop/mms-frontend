/**
 * Created by Donghui Huo on 2018/2/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store, {history} from '../../redux/init/store'

import {ConnectedRouter} from 'react-router-redux'

import './init.scss';
import  App from '../../containers/init/App'
import {initOrReFresh} from '../../redux/init/actions'

store.dispatch(initOrReFresh())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
