/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Index.scss'

import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'


import {Button} from 'antd';


class Index extends Component {
  render() {
    return <div className="system-info-section">
      <div>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/systeminfo/companyinfo"><span>企业信息管理</span></Link></span>
        <span style={{width:284}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/systeminfo/salestrategy"><span>销售策略</span></Link></span>
      </div>
      <div style={{height:112}}>
        <span style={{width:207,paddingLeft:55}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/systeminfo/systemsetting"><span>系统设置</span></Link></span>
        <span style={{width:207,textAlign:'right',paddingRight:43}}/>
      </div>
      <div>
        <span style={{width:130}}><Link className="button shadow" style={{padding:0}}
                                        to="/systeminfo/database"><span>备份/还原数据库</span></Link></span>
        <span style={{width:284}}/>
        <span style={{width:130}}><Link className="button shadow"
                                        to="/systeminfo/reportdesign"><span>报表设计</span></Link></span>
      </div>
    </div>
  }

}
export  default Index
