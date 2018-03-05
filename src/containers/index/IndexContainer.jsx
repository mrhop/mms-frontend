/**
 * Created by Donghui Huo on 2018/2/8.
 */
import React, {Component, Fragment} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;

import LeftMenu from '../../components/index/LeftMenu'

class IndexContainer extends Component {
  render() {
    return (<div className="container-fluid index-main">
      <LeftMenu/>
      <div className="right-content">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="inner-content" style={{ }}>
          Content
        </div>
      </div>
    </div>)
  }
}

export default IndexContainer;
