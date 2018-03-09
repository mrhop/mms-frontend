/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Index.scss'
import rightArrow from '../../../assets/images/common/right-arrow.png'
import downArrow from '../../../assets/images/common/down-arrow.png'
import leftArrow from '../../../assets/images/common/left-arrow.png'

import React, {Component, Fragment} from 'react';

import {Form, Icon, Input, Button, Checkbox, Alert, message, Spin} from 'antd';


class Index extends Component {
  render() {
    return <div className="access-control-section">
      <div>
        <span style={{width:130}}><a className="button" type="primary"><span>职位管理</span></a></span>
        <span style={{width:284}}><img src={rightArrow}/></span>
        <span style={{width:130}}><Button type="primary">权限管理</Button></span>
      </div>
      <div style={{height:112}}>
        <span style={{width:207,paddingLeft:55}}><img src={downArrow}/></span>
        <span style={{width:130}}><Button type="primary">个人信息维护</Button></span>
        <span style={{width:207,textAlign:'right',paddingRight:43}}><img src={downArrow}/></span>
      </div>
      <div>
        <span style={{width:130}}><Button type="primary">用户管理</Button></span>
        <span style={{width:284}}><img src={leftArrow}/></span>
        <span style={{width:130}}><Button type="primary">角色管理</Button></span>
      </div>
    </div>
  }

}
export  default Index
