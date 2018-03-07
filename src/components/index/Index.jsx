/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


class Index extends Component {

  render() {
    return <Fragment>
      <Link to="/accesscontrol1111">Will Match</Link>
      <Link to="/accesscontrol111/authority">Will Match</Link>
      <Link to="/accesscontrol111/role">Will Match</Link>
      Index
    </Fragment>
  }

}
export  default Index
