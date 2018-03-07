/**
 * Created by Donghui Huo on 2018/2/8.
 */
import React, {Component, Fragment} from 'react';

import LeftMenu from '../../components/index/LeftMenu'
import Breadcrumb from '../../components/index/Breadcrumb'
import {history} from '../../redux/index/store'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Routes from './Routes'

import  Page404 from '../../components/index/404.jsx'


const routeIterate = (routeArr, returnArr) => {
  routeArr.forEach(function (route) {
    returnArr.push(<Route key={route.path}
                          exact
                          path={route.path}
                          component={route.component}
    />)
    if (route.routes) {
      routeIterate(route.routes, returnArr)
    }
  })
  return returnArr
};

class IndexContainer extends Component {
  render() {
    const {location, state} = history
    let routeArr = []
    routeIterate(Routes, routeArr);
    return (
      <div className="container-fluid index-main">
        <LeftMenu/>
        <div className="right-content">
          {!(location.pathname === '/' || state && state.errorMsg) && <Breadcrumb/>}
          <div className="inner-content">
            <Switch>
              {routeArr}
              <Route component={Page404}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexContainer;
