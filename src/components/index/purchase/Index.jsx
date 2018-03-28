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
        <span style={{width: 130}}><Link className="button shadow"
                                         to="/purchase/purchaseapplication"><span>采购申请</span></Link></span>
        <span style={{width: 284}}/>
        <span style={{width: 130}}><Link className="button shadow"
                                         to="/purchase/purchasereturnapplication"><span>退货申请</span></Link></span>
      </div>
      <div style={{height: 100}}>
        <span style={{width: 207, paddingLeft: 55}}><img src={downArrow}/></span>
        <span style={{width: 130}}/>
        <span style={{width: 207, textAlign: 'right', paddingRight: 49}}><img src={downArrow}/></span>
      </div>
      <div>
        <span style={{width: 130}}><Link className="button shadow"
                                         to="/purchase/purchaseaudit"><span>采购审核</span></Link></span>
        <span style={{width: 284, textAlign: 'center'}}><Link className="button shadow"
                                                              to="/purchase/purchasefiled"><span>归档查询</span></Link></span>
        <span style={{width: 130}}><Link className="button shadow"
                                         to="/purchase/purchasereturnaudit"><span>退货审核</span></Link></span>
      </div>
      <div style={{height: 100}}>
        <span style={{width: 207, paddingLeft: 55}}><img src={downArrow}/></span>
        <span style={{width: 130}}/>
        <span style={{width: 207, textAlign: 'right', paddingRight: 49}}><img src={downArrow}/></span>
      </div>
      <div>
        <span style={{width: 130}}><Link className="button shadow"
                                         to="/purchase/purchaseloading"><span>采购入库</span></Link></span>
        <span style={{width: 284, textAlign: 'center'}}/>
        <span style={{width: 130}}><Link className="button shadow"
                                         to="/purchase/purchasereturn"><span>退货出库</span></Link></span>
      </div>
    </div>
  }

}

export default Index
