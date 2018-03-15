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

// 实现过滤的部分功能
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getAuthorityList()
    this.props.getPostOptions()
    this.props.getAuthorityParentOptions()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data } = nextProps
    if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_DELETE_BEGIN || type === ActionTypes.ACCESSCONTROL_AUTHORITY_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.ACCESSCONTROL_POST_OPTIONS_GOT) {
      this.setState({postOptions: data})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITYPARENT_OPTIONS_GOT) {
      this.setState({authorityParentOptions: data})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_DELETE_SUCCESS) {
      // 根据state的状况进行过滤
      this.props.getAuthorityList(this.state.tableCondition)
    }
  }

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
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '职位',
        dataIndex: 'post',
        key: 'post',
        filters: this.state.postOptions
      }, {
        title: '父权限',
        dataIndex: 'parent',
        key: 'parent',
        filters: this.state.authorityParentOptions,
        filterMultiple: false,
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={{
              pathname: '/accesscontrol/authority/updateauthority',
              state: { id: record.key }
            }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this,record.key)}>删除</Link>
            </span>
        )
      }]

    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/accesscontrol/authority/addauthority"><span>新增权限</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width:'100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize:10,total:51}} columns={columns} onChange={this.onChange}
                 dataSource={data}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.any,
  getAuthorityList: PropTypes.func,
  getPostOptions: PropTypes.func,
  getAuthorityParentOptions: PropTypes.func,
  deleteAuthority: PropTypes.func,
}


const mapStateToProps = (state) => {
  return {
    ...state.accessControlAuthorityList,
    ...state.accessControlPostOptions,
    ...state.accessControlAuthorityParentOptions
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
