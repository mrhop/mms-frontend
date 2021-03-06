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


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getRoleList()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_ROLE_LIST_GOT || type === ActionTypes.ACCESSCONTROL_ROLE_DELETE_SUCCESS) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_DELETE_BEGIN) {
      this.setState({loading: true})
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_DELETE_SUCCESS) {
      this.props.getRoleList()
    }
  }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '角色CODE',
      dataIndex: 'roleCode',
      key: 'roleCode'
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
            <Link to={{
              pathname: '/accesscontrol/role/updaterole',
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
        this.props.deleteRole(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data} = this.state;
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/accesscontrol/role/addrole"><span>新增角色</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width:'100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize:10}} columns={this.columns}
                 dataSource={data}
                 expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getRoleList: PropTypes.func,
  deleteRole: PropTypes.func
}


const mapStateToProps = (state) => {
  return {...state.accessControlRoleList}
}

const mapDispatchToProps = {
  ...accessControlActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
