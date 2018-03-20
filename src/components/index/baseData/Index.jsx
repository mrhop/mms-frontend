/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Index.scss'

import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'


import {Button} from 'antd';


class Index extends Component {
  render() {
    return <div className="base-data-section">
      <div>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/basedata/productcategory"><span>产品分类管理</span></Link></span>
        <span style={{width:284}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/basedata/product"><span>产品管理</span></Link></span>
      </div>
      <div style={{height:112}}>
        <span style={{width:207,paddingLeft:55}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/basedata/store"><span>仓库管理</span></Link></span>
        <span style={{width:207,textAlign:'right',paddingRight:43}}/>
      </div>
      <div>
        <span style={{width:130}}><Link className="button shadow" style={{padding:0}}
                                        to="/basedata/supplier"><span>供货商管理</span></Link></span>
        <span style={{width:284}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/basedata/client"><span>客户管理</span></Link></span>
      </div>
      <div style={{height:112}}>
        <span style={{width:207,paddingLeft:55}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/basedata/employee"><span>业务员管理</span></Link></span>
        <span style={{width:207,textAlign:'right',paddingRight:43}}/>
      </div>
    </div>
  }

}
export  default Index
