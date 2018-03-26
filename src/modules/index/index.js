import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';


import Chart from 'chart.js'

Chart.defaults.global.responsive = true;


import {Provider} from 'react-redux'
import store, {history} from '../../redux/index/store'

import {ConnectedRouter} from 'react-router-redux'

import './index.scss';
import App from '../../containers/index/App'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
        <App/>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
