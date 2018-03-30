/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Index.scss'
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import moment from 'moment'

import {Table, Spin, Divider, Modal, Button, Input, Icon, DatePicker} from 'antd';

const confirm = Modal.confirm
const infoalert = Modal.info

import Print from 'rc-print';


import {purchaseActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterDropdownVisible: false,
      searchText: '',
      tableCondition: {pagination: {defaultPageSize: 10, current: 1, pageSize: 10}, filters: {}}
    }
    this.props.getPurchaseApplicationList()
    this.props.getSupplierOptions()
    this.props.getEmployeeOptions()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_DELETE_BEGIN || type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_DELETE_SUCCESS) {
      this.props.getPurchaseApplicationList(this.state.tableCondition)
    } else if (type === ActionTypes.BASEDATA_SUPPLIER_OPTIONS_GOT) {
      this.setState({supplierOptions: data})
    } else if (type === ActionTypes.BASEDATA_EMPLOYEE_OPTIONS_GOT) {
      this.setState({employeeOptions: data})
    }
  }

  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '记录删除不可恢复',
      okType: 'danger',
      maskClosable: true,
      onOk: (() => {
        this.props.deletePurchaseApplication(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  onChange = (pagination, filters, sorter) => {
    const {searchText, searchDate} = this.state;
    if (searchText) {
      filters.code = searchText
    }
    if (searchDate) {
      filters.date = searchDate
    }
    this.props.getPurchaseApplicationList({pagination, filters})
    this.setState({
      tableCondition: {pagination, filters}
    })
    console.log('params', pagination, filters);
  }

  onInputChange = (e) => {
    this.setState({searchText: e.target.value});
  }
  onSearch = () => {
    const {searchText, tableCondition} = this.state;
    if (searchText) {
      tableCondition.filters.code = searchText
    } else {
      delete tableCondition.filters.code
    }
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      tableCondition
    });
    this.props.getPurchaseApplicationList(tableCondition)
  }
  onDateSearch = (date) => {
    this.setState({searchDate: date});
    const {tableCondition} = this.state;
    if (date) {
      tableCondition.filters.date = date
    } else {
      delete tableCondition.filters.date
    }
    this.setState({
      filterDateDropdownVisible: false,
      datefiltered: !!date,
      tableCondition
    });
    this.props.getPurchaseApplicationList(tableCondition)
  }

  doPrint(id) {
    // 1.获取data
    // 2.生成单据html
    // 3.唤起打印操作
    this.printDom.onPrint();
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data, supplierOptions, employeeOptions} = this.state;
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '编码',
        dataIndex: 'code',
        key: 'code',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => this.searchInput = ele}
              placeholder='搜索编码'
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>搜索</Button>
          </div>
        ),
        filterIcon: <Icon type="filter" style={{color: this.state.filtered ? '#108ee9' : '#aaa'}}/>,
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          this.setState({
            filterDropdownVisible: visible,
          }, () => this.searchInput && this.searchInput.focus());
        }
      },
      {
        title: '申请人',
        dataIndex: 'applyUser',
        key: 'applyUser',
        filters: employeeOptions,
        filterMultiple: false,
      },
      {
        title: '申请日期',
        dataIndex: 'date',
        key: 'date',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <DatePicker placeholder='过滤日期'
                        onChange={this.onDateSearch}/>
          </div>
        ),
        filterIcon: <Icon type="filter" style={{color: this.state.datefiltered ? '#108ee9' : '#aaa'}}/>,
        filterDropdownVisible: this.state.filterDateDropdownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          this.setState({
            filterDateDropdownVisible: visible,
          });
        },
        render: (text, record) => (
          moment(text).format("YYYY-MM-DD HH:mm")
        )
      },
      {
        title: '预计成本（￥）',
        dataIndex: 'estimateCostPrice',
        key: 'estimateCostPrice'
      },
      {
        title: '供货商',
        dataIndex: 'supplier',
        key: 'supplier',
        filters: supplierOptions,
        filterMultiple: false,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => (
          text === 0 ? '审核中' : (text === 1 ? '审核完成' : '审核驳回')
        )
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => {
          if (record.status !== 1)
            return <span>
            <Link to="#" onClick={this.doPrint.bind(this, record.key)}>打印采购申请</Link>
              <Divider type="vertical"/>
              <Link to={{
                pathname: '/purchase/purchaseapplication/updatepurchaseapplication',
                state: {id: record.key}
              }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this, record.key)}>删除</Link>
            </span>
          else {
            return <span>
            <Link to="#" onClick={this.doPrint.bind(this, record.key)}>打印采购申请</Link>
            </span>
          }
        }
      }]
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/purchase/purchaseapplication/addpurchaseapplication"><span>新增采购申请</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width: '100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize: 10}} columns={columns}
                 dataSource={data}
                 onChange={this.onChange}
                 expandedRowRender={record => {
                   const a = record.description && record.description.map(
                     function (value, index) {
                       return <p key={index} style={{margin: 0}}>{
                         moment(value.date).format("YYYY-MM-DD HH:mm") + ' ' +
                         value.comment}</p>
                     })
                   return a
                 }}
          />
        </Spin>
      </div>
      {/*print part*/}
      <Print
        ref={myPrint => this.printDom = myPrint} lazyRender
        title="采购申请表"
      >
        <div>
          <h1>first page, you can only see us in the print`s page</h1>
          <h2>second page, you can only see us in the print`s page</h2>
          <h3>third page, you can only see us in the print`s page</h3>
        </div>
      </Print>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getPurchaseApplicationList: PropTypes.func,
  deletePurchaseApplication: PropTypes.func,
  getSupplierOptions: PropTypes.func,
  getEmployeeOptions: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    ...state.purchaseApplicationList,
    ...state.baseDataSupplierOptions,
    ...state.baseDataEmployeeOptions
  }
}

const mapDispatchToProps = {
  ...purchaseActions,
  ...optionActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
