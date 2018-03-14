/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin, Divider, Modal} from 'antd';
const confirm = Modal.confirm
import {accessControlActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'

// 实现过滤的部分功能
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getAuthorityList()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_DELETE_BEGIN || type === ActionTypes.ACCESSCONTROL_AUTHORITY_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_DELETE_SUCCESS) {
      // 根据state的状况进行过滤
      this.props.getAuthorityList(this.state.tableCondition)
    }
  }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '职位',
      dataIndex: 'post',
      key: 'post',
      filters: [
        {
          value: 1,
          text: '采购',
        },
        {
          value: 2,
          text: '采购审核',
        },
        {
          value: 3,
          text: '库存',
        },
        {
          value: 4,
          text: '库存审核',
        },
      ]
    }, {
      title: '父权限',
      dataIndex: 'parent',
      key: 'parent',
      filters: [
        {
          text: '访问控制',
          value: 'accesscontrol',
          children: [{
            text: '职位管理',
            value: 'post'
          }]
        }],
      filterMultiple: false,
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
            <Link to={{
              pathname: '/accesscontrol/post/updatepost',
              state: { id: record.key }
            }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this,record.key)}>删除</Link>
            </span>
      )
    }]

  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '该记录删除不恢复',
      okType: 'danger',
      onOk: (() => {
        this.props.deleteAuthority(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  onChange = (pagination, filters, sorter)=> {
    this.props.getAuthorityList({pagination, filters})
    this.setState({
      tableCondition: {pagination, filters}
    })
    console.log('params', pagination, filters);
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data} = this.state;
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/accesscontrol/post/addpost"><span>新增权限</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width:'100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize:10,total:51}} columns={this.columns} onChange={this.onChange}
                 dataSource={data}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getAuthorityList: PropTypes.func,
  deleteAuthority: PropTypes.func
}


const mapStateToProps = (state) => {
  return {...state.accessControlAuthorityList}
}

const mapDispatchToProps = {
  ...accessControlActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
