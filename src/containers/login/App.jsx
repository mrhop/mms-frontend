import React, {Component, Fragment} from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import CommonHeader from '../../components/common/Header'
import CommonFooter from '../../components/common/Footer'
import Login from '../../components/login/Login'
import Register from '../../components/login/Register'
import Forget from '../../components/login/Forget'
// 此处直接使用app即可,不用login的container
// switch 关联
class App extends Component {
  render() {
    return (
      <Fragment>
        <CommonHeader/>
        <main>
          <div className="container">
            <Switch>
              <Route path="/register" component={Register}/>
              <Route path="/forget" component={Forget}/>
              <Route component={Login}/>
            </Switch>
          </div>
        </main>
        <CommonFooter/>
      </Fragment>
    );
  }
}
export default App;
