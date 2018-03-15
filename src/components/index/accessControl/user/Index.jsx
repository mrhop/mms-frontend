/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin, Divider, Modal} from 'antd';
const confirm = Modal.confirm
import {accessControlActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getUserList()
    this.props.getPostOptions()
    this.props.getRoleOptions()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_USER_LIST_GOT || type === ActionTypes.ACCESSCONTROL_USER_DELETE_SUCCESS) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_USER_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.ACCESSCONTROL_USER_DELETE_BEGIN) {
      this.setState({loading: true})
    } else if (type === ActionTypes.ACCESSCONTROL_POST_OPTIONS_GOT) {
      this.setState({postOptions: data})
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_OPTIONS_GOT) {
      this.setState({roleOptions: data})
    }
    else if (type === ActionTypes.ACCESSCONTROL_USER_DELETE_SUCCESS) {
      this.props.getUserList(this.state.tableCondition)
    }
  }


  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '该记录删除不恢复',
      okType: 'danger',
      onOk: (() => {
        this.props.deleteUser(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }


  onChange = (pagination, filters, sorter)=> {
    this.props.getUserList({pagination, filters})
    this.setState({
      tableCondition: {pagination, filters}
    })
    console.log('params', pagination, filters);
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
        title: '账号',
        dataIndex: 'account',
        key: 'account'
      }, {
        title: '角色',
        dataIndex: 'roles',
        key: 'roles',
        filters: this.state.roleOptions
      }, {
        title: '职位',
        dataIndex: 'post',
        key: 'post',
        filters: this.state.postOptions,
        filterMultiple: false
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={{
              pathname: '/accesscontrol/user/updateuser',
              state: { id: record.key }
            }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this,record.key)}>删除</Link>
            </span>
        )
      }]
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/accesscontrol/user/adduser"><span>新增用户</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width:'100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize:10}} columns={columns}
                 dataSource={data}
                 onChange={this.onChange}
                 expandedRowRender={record => <p style={{ margin: 0 }}>{'电话：'+record.cellphone}<br/>{'邮箱：'}<a href={'mailto:'+record.email}>{record.email}</a>{record.address&&<br/>}{record.address&&(`地址：`+record.address)}{record.description&&<br/>}{record.description}</p>}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getUserList: PropTypes.func,
  getPostOptions: PropTypes.func,
  getRoleOptions: PropTypes.func,
  deleteUser: PropTypes.func
}


const mapStateToProps = (state) => {
  return {
    ...state.accessControlUserList,
    ...state.accessControlPostOptions,
    ...state.accessControlRoleOptions
  }
}

const mapDispatchToProps = {
  ...accessControlActions, ...optionActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
