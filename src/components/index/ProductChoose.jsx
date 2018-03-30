/**
 * Created by Donghui Huo on 2018/1/31.
 */
// 生成二维码code！！！
import './ProductChoose.scss'
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin, Divider, Modal, Button, Input, Icon} from 'antd';

const confirm = Modal.confirm
const infoalert = Modal.info
import {baseDataActions, optionActions} from '../../redux/index/actions'
import * as ActionTypes from '../../redux/index/actions/ActionTypes'


class ProductChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterDropdownVisible: false,
      searchText: '',
      tableCondition: {pagination: {defaultPageSize: 10, current: 1, pageSize: 10}, filters: {}}
    }
    this.props.getProductList()
    this.props.getProductCategoryParentOptions()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_PRODUCT_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.BASEDATA_PRODUCT_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_PRODUCT_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_PARENT_OPTIONS_GOT) {
      this.setState({productCategoryParentOptions: data})
    }
  }


  onChange = (pagination, filters, sorter) => {
    const {searchText} = this.state;
    if (searchText) {
      filters.code = searchText
    }
    this.props.getProductList({pagination, filters})
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
    this.props.getProductList(tableCondition)
  }

  onChoose = (record) => {
    this.props.chooseProduct(record)
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data} = this.state;
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
      }, {
        title: '产品分类',
        dataIndex: 'productCategory',
        key: 'productCategory',
        filters: this.state.productCategoryParentOptions,
        filterMultiple: false,
      }, {
        title: '成本价',
        dataIndex: 'costPrice',
        key: 'costPrice'
      }, {
        title: '销售价',
        dataIndex: 'salePrice',
        key: 'salePrice'
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.onChoose.bind(this, record)}>选择该产品</a>
            </span>
        )
      }]
    return <Fragment>
      <div className="lists">
        <Spin style={{width: '100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize: 10}} columns={columns}
                 dataSource={data} onChange={this.onChange}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

ProductChoose.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getProductList: PropTypes.func,
  getProductCategoryParentOptions: PropTypes.func,
  chooseProduct: PropTypes.func,
}


const mapStateToProps = (state) => {
  return {
    ...state.baseDataProductList,
    ...state.baseDataProductCategoryParentOptions
  }
}

const mapDispatchToProps = {
  ...baseDataActions, ...optionActions
}
const ProductChooseProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductChoose)

export default ProductChooseProxy;
