/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Index.scss'
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin, Divider, Modal, Button, Input, Icon} from 'antd';

const confirm = Modal.confirm
const infoalert = Modal.info
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
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
    this.props.getStoreList()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_STORE_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.BASEDATA_STORE_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_STORE_DELETE_BEGIN || type === ActionTypes.BASEDATA_STORE_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.BASEDATA_STORE_DELETE_SUCCESS) {
      this.props.getStoreList(this.state.tableCondition)
    }
  }

  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '记录删除不可恢复',
      okType: 'danger',
      maskClosable: true,
      onOk: (() => {
        this.props.deleteStore(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  onChange = (pagination, filters, sorter) => {
    const {searchText} = this.state;
    if (searchText) {
      filters.code = searchText
    }
    this.props.getStoreList({pagination, filters})
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
    this.props.getStoreList(tableCondition)
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data} = this.state;
    const expandedRowRender = (record) => {
      const columns = [
        {title: '名称', dataIndex: 'name', key: 'name'},
        {title: '容积（立方米）', dataIndex: 'volume', key: 'volume'}
      ];
      return (
        <Fragment>
          <p style={{'border-bottom': '1px solid #ccc', 'padding-bottom': '5px'}}>包含库位</p>
          <Table
            columns={columns}
            dataSource={record.positions}
            pagination={false}
          />
        </Fragment>
      );
    };
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
        title: '容积',
        dataIndex: 'volume',
        key: 'volume'
      }, {
        title: '主库',
        dataIndex: 'isPrimary',
        key: 'isPrimary',
        filters: [
          {text: '是', value: true},
          {text: '否', value: false},
        ],
        filterMultiple: false,
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={{
              pathname: '/basedata/store/updatestore',
              state: {id: record.key}
            }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this, record.key)}>删除</Link>
            </span>
        )
      }]
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/basedata/store/addstore"><span>新增仓库</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width: '100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize: 10}} columns={columns}
                 dataSource={data}
                 expandedRowRender={expandedRowRender}
                 onChange={this.onChange}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getStoreList: PropTypes.func,
  deleteStore: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    ...state.baseDataStoreList
  }
}

const mapDispatchToProps = {
  ...baseDataActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
