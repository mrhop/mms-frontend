/**
 * Created by Donghui Huo on 2018/2/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store, {history} from '../../redux/login/store'

import {ConnectedRouter} from 'react-router-redux'

import './login.scss';
import  App from '../../containers/login/App'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
