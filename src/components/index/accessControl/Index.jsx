/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Index.scss'
import rightArrow from '../../../assets/images/common/right-arrow.png'
import downArrow from '../../../assets/images/common/down-arrow.png'
import leftArrow from '../../../assets/images/common/left-arrow.png'

import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'


import {Button} from 'antd';


class Index extends Component {
  render() {
    return <div className="access-control-section">
      <div>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/accesscontrol/post"><span>职位管理</span></Link></span>
        <span style={{width:284}}><img src={rightArrow}/></span>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/accesscontrol/authority"><span>权限管理</span></Link></span>
      </div>
      <div style={{height:112}}>
        <span style={{width:207,paddingLeft:55}}><img src={downArrow}/></span>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/accesscontrol/personalinfo"><span>个人信息维护</span></Link></span>
        <span style={{width:207,textAlign:'right',paddingRight:43}}><img src={downArrow}/></span>
      </div>
      <div>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/accesscontrol/user"><span>用户管理</span></Link></span>
        <span style={{width:284}}><img src={leftArrow}/></span>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/accesscontrol/role"><span>角色管理</span></Link></span>
      </div>
    </div>
  }

}
export  default Index
