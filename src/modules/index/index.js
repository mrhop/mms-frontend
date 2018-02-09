import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store, {history} from '../../redux/index/store'

import {ConnectedRouter} from 'react-router-redux'

import './index.scss';
import  App from '../../containers/index/App'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
