/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import Shortcut from './Shortcut'
import LoginInfo from './LoginInfo'


class Header extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <header>
        <div className="container">
          <div className="left-info">
            <div className="logo-top"/>
            <Shortcut/>
          </div>
          <div className="right-info">
            <LoginInfo/>
          </div>
        </div>
      </header>
    );
  }
}
export  default Header
