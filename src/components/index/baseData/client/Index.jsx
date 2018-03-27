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
    this.props.getClientList()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_CLIENT_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.BASEDATA_CLIENT_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_CLIENT_DELETE_BEGIN || type === ActionTypes.BASEDATA_CLIENT_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.BASEDATA_CLIENT_DELETE_SUCCESS) {
      this.props.getClientList(this.state.tableCondition)
    }
  }

  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '记录删除不可恢复',
      okType: 'danger',
      maskClosable: true,
      onOk: (() => {
        this.props.deleteClient(id)
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
    this.props.getClientList({pagination, filters})
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
    this.props.getClientList(tableCondition)
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
      },
      {
        title: '联系人',
        dataIndex: 'contactName',
        key: 'contactName'
      },
      {
        title: '手机',
        dataIndex: 'cellphone',
        key: 'cellphone',
        render: text => <a href={"tel:" + text}>{text}</a>,
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        render: text => <a href={"mailto:" + text}>{text}</a>,
      }, {
        title: '主要客户',
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
              pathname: '/basedata/client/updateclient',
              state: {id: record.key}
            }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this, record.key)}>删除</Link>
            </span>
        )
      }]
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/basedata/client/addclient"><span>新增客户</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width: '100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize: 10}} columns={columns}
                 dataSource={data}
                 onChange={this.onChange}
                 expandedRowRender={record => <p style={{margin: 0}}>{record.description}</p>}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getClientList: PropTypes.func,
  deleteClient: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    ...state.baseDataClientList
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
