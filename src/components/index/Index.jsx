/**
 * Created by Donghui Huo on 2018/1/31.
 */
// 1. window 窗口变化时，监控，并对chart大小进行改变
import './Index.scss'

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Collapse, Spin, DatePicker, Select, Radio} from 'antd';
const RadioGroup = Radio.Group
const {Option} = Select
const {MonthPicker} = DatePicker;
const Panel = Collapse.Panel;

import {Line, Bar, Pie} from 'react-chartjs-2'

import {indexDataActions} from '../../redux/index/actions'
import * as ActionTypes from '../../redux/index/actions/ActionTypes'
import {Index as IndexUtils} from '../../common/Utils'
import {IndexTempData} from '../../common/TempData'

class Index extends Component {

  constructor(props) {
    super(props);
    let loading = {}
    loading[IndexUtils.PURCHASE_ANALYSIS] = false
    loading[IndexUtils.EMPLOYEE_ANALYSIS] = false
    loading[IndexUtils.PRODUCT_ANALYSIS] = false
    loading[IndexUtils.SALE_ANALYSIS] = false
    loading[IndexUtils.STORE_STATISTICS] = false
    let dataArr = {}
    dataArr[IndexUtils.PURCHASE_ANALYSIS] = null
    dataArr[IndexUtils.EMPLOYEE_ANALYSIS] = null
    dataArr[IndexUtils.PRODUCT_ANALYSIS] = null
    dataArr[IndexUtils.SALE_ANALYSIS] = null
    dataArr[IndexUtils.STORE_STATISTICS] = null
    this.state = {
      loading,
      dataArr,
      chart1: {width: 400, height: 300},
      chart2: {width: 400, height: 300},
      productCountType: 'amount',
      productDate: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const {type, dataType, data} = nextProps
    let {loading, dataArr} = this.state
    if (type === ActionTypes.INDEX_DATA_INITING) {
      loading[dataType] = true
      this.setState({loading})
    } else if (type === ActionTypes.INDEX_DATA_INITED) {
      loading[dataType] = false
      dataArr[dataType] = data
      this.setState({loading, dataArr})
    } else if (type === ActionTypes.INDEX_DATA_FAILURE) {
      loading[dataType] = false
      this.setState({loading})
    }
  }

  callback = (key)=> {
    if (key.length > 0) {
      const {dataArr} = this.state
      if (!dataArr[key[0]]) {
        const {indexData} = this.props
        indexData({type: key[0]})
      }
    }
  }

  purchaseChange = (date, dateString)=> {
    const {indexData} = this.props
    indexData({type: IndexUtils.PURCHASE_ANALYSIS, purchaseDate: dateString})
  }
  storeChange = (value)=> {
    const {indexData} = this.props
    indexData({type: IndexUtils.STORE_STATISTICS, store: value})
  }
  saleChange = (date, dateString)=> {
    const {indexData} = this.props
    indexData({type: IndexUtils.SALE_ANALYSIS, saleDate: dateString})
  }
  productCountTypeChange = (e)=> {
    const {indexData} = this.props
    const {productDate} = this.state
    let productCountType = e.target.value
    indexData({type: IndexUtils.PRODUCT_ANALYSIS, productDate, productCountType})
    this.setState({productCountType})
  }
  productDateChange = (date, dateString)=> {
    const {indexData} = this.props
    const {productCountType} = this.state
    indexData({type: IndexUtils.PRODUCT_ANALYSIS, productDate: dateString, productCountType})
    this.setState({productDate: dateString})
  }

  employeeChange = (date, dateString)=> {
    const {indexData} = this.props
    indexData({type: IndexUtils.EMPLOYEE_ANALYSIS, employeeDate: dateString})
  }

  render() {
    const {loading, dataArr, productCountType} = this.state;
    const {purchaseDate, store, saleDate, productDate, employeeDate} = this.props;

    return <div className="row index-section">
      <div className="col col-sm-6 col-xs-12" ref={(col) => { this.col1 = col; }}>
        <Collapse onChange={this.callback}>
          <Panel header="采购分析" key={IndexUtils.PURCHASE_ANALYSIS}>
            <div className="condition-div"><MonthPicker onChange={this.purchaseChange} placeholder="选择月份"/></div>
            <Spin style={{width:'100%'}} tip="处理中"
                  spinning={loading[IndexUtils.PURCHASE_ANALYSIS]}>
              {dataArr[IndexUtils.PURCHASE_ANALYSIS] && !purchaseDate &&
              <Line options={IndexTempData.commonOptions} data={IndexTempData.initPurchase}/>}
              {dataArr[IndexUtils.PURCHASE_ANALYSIS] && purchaseDate &&
              <Bar options={IndexTempData.commonOptions} data={IndexTempData.purchaseMonth}/>}
            </Spin>
          </Panel>
        </Collapse>
      </div>
      <div className="col col-sm-6 col-xs-12">
        <Collapse onChange={this.callback}>
          <Panel header="库存概览" key={IndexUtils.STORE_STATISTICS}>
            <div className="condition-div">
              <Select allowClear={true} defaultActiveFirstOption={false} placeholder="选择仓库" style={{ width: 120 }}
                      onChange={this.storeChange}>
                <Option value="store1">仓库1</Option>
                <Option value="store2">仓库2</Option>
                <Option value="store3">仓库3</Option>
                <Option value="store4">仓库4</Option>
                <Option value="store5">仓库5</Option>
              </Select>
            </div>
            <Spin style={{width:'100%'}} tip="处理中" spinning={loading[IndexUtils.STORE_STATISTICS]}>
              {dataArr[IndexUtils.STORE_STATISTICS] && !store &&
              <Line options={IndexTempData.commonOptions} data={IndexTempData.initStore}/>}
              {dataArr[IndexUtils.STORE_STATISTICS] && store &&
              <Pie options={IndexTempData.commonOptions} data={IndexTempData.simpleStore}/>}
            </Spin>
          </Panel>
        </Collapse>
      </div>
      <div className="col col-sm-6 col-xs-12">
        <Collapse onChange={this.callback}>
          <Panel header="销售分析" key={IndexUtils.SALE_ANALYSIS}>
            <div className="condition-div"><MonthPicker onChange={this.saleChange} placeholder="选择月份"/></div>
            <Spin style={{width: '100%'}} tip="处理中" spinning={loading[IndexUtils.SALE_ANALYSIS]}>
              {dataArr[IndexUtils.SALE_ANALYSIS] && !saleDate &&
              <Line options={IndexTempData.commonOptions} data={IndexTempData.initSale}/>}
              {dataArr[IndexUtils.SALE_ANALYSIS] && saleDate &&
              <Bar options={IndexTempData.commonOptions} data={IndexTempData.saleMonth}/>}
            </Spin>
          </Panel>
        </Collapse>
      </div>
      <div className="col col-sm-6 col-xs-12">
        <Collapse onChange={this.callback}>
          <Panel header="活跃产品分析" key={IndexUtils.PRODUCT_ANALYSIS}>
            <div className="condition-div">
              <RadioGroup onChange={this.productCountTypeChange} value={productCountType}>
                <Radio value='amount'>金额</Radio>
                <Radio value='number'>数量</Radio>
              </RadioGroup>
              <MonthPicker onChange={this.productDateChange} placeholder="选择月份"/>
            </div>
            <Spin style={{width: '100%'}} tip="处理中" spinning={loading[IndexUtils.PRODUCT_ANALYSIS]}>
              {dataArr[IndexUtils.PRODUCT_ANALYSIS] && !productDate &&
              <Line options={IndexTempData.commonOptions} data={IndexTempData.initProduct}/>}
              {dataArr[IndexUtils.PRODUCT_ANALYSIS] && productDate &&
              <Bar options={IndexTempData.commonOptions} data={IndexTempData.productMonth}/>}
            </Spin>
          </Panel>
        </Collapse>
      </div>
      <div ref={(col) => { this.col2 = col; }} className="col col-sm-12 col-xs-12">
        <Collapse onChange={this.callback}>
          <Panel header="业务员分析" key={IndexUtils.EMPLOYEE_ANALYSIS}>
            <div className="condition-div">
              <MonthPicker onChange={this.employeeChange} placeholder="选择月份"/>
            </div>
            <Spin style={{width: '100%'}} tip="处理中"
                  spinning={loading[IndexUtils.EMPLOYEE_ANALYSIS]}>
              {dataArr[IndexUtils.EMPLOYEE_ANALYSIS] && !employeeDate &&
              <Line options={IndexTempData.commonOptions} data={IndexTempData.initEmployee}/>}
              {dataArr[IndexUtils.EMPLOYEE_ANALYSIS] && employeeDate &&
              <Bar options={IndexTempData.commonOptions} data={IndexTempData.employeeMonth}/>}
            </Spin>
          </Panel>
        </Collapse>
      </div>
    </div>
  }
}

Index.propTypes = {
  type: PropTypes.string,
  dataType: PropTypes.string,
  data: PropTypes.object,
  purchaseDate: PropTypes.string,
  store: PropTypes.string,
  saleDate: PropTypes.string,
  productDate: PropTypes.string,
  productCountType: PropTypes.string,
  employeeDate: PropTypes.string,
  indexData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {...state.indexData}
}

const mapDispatchToProps = {
  ...indexDataActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
