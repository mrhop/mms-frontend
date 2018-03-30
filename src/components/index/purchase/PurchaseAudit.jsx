/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin, Alert, Modal} from 'antd';

const confirm = Modal.confirm
import DateFormat from 'dateformat'
import {systemInfoActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'


class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getDatabaseList()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.SYSTEMINFO_DATABASE_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.SYSTEMINFO_DATABASE_LIST_FAILURE || type === ActionTypes.SYSTEMINFO_DATABASE_RESTORE_SUCCESS) {
      this.setState({loading: false})
    } else if (type === ActionTypes.SYSTEMINFO_DATABASE_BACKUP_BEGIN || type === ActionTypes.SYSTEMINFO_DATABASE_RESTORE_BEGIN) {
      this.setState({loading: true})
    } else if (type === ActionTypes.SYSTEMINFO_DATABASE_BACKUP_SUCCESS) {
      this.props.getDatabaseList()
    }
  }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <a href={"http://download.hopever.com?id=" + record.key}>{text}</a>,
    },
    {
      title: '备份时间',
      dataIndex: 'backupDate',
      key: 'backupDate',
      sorter: (a, b) => a.backupDate - b.backupDate,
      render: text => text && DateFormat(new Date(text), "yyyy-mm-dd hh:MM"),
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
            <Link to="#" onClick={this.showRestoreConfirm.bind(this, record.key)}>还原该备份</Link>
            </span>
      )
    }]

  showRestoreConfirm(id) {
    confirm({
      title: '确定还原该数据库备份?',
      okType: 'warning',
      onOk: (() => {
        this.props.restoreDatabase(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showBackupConfirm() {
    confirm({
      title: '确定即时生成数据库备份?',
      okType: 'warning',
      onOk: (() => {
        this.props.backupDatabase()
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data} = this.state;
    const {type} = this.props;
    let alertMsg = null
    if (type === ActionTypes.SYSTEMINFO_DATABASE_RESTORE_SUCCESS) {
      alertMsg = <Alert
        message="还原成功"
        type="success"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_DATABASE_BACKUP_FAILURE) {
      alertMsg = <Alert
        message="备份失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_DATABASE_RESTORE_FAILURE) {
      alertMsg = <Alert
        message="还原失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return <Fragment>
      {alertMsg}
      <div className="actions"><Link to="#" className="button" onClick={this.showBackupConfirm.bind(this)}>备份数据库</Link>
      </div>
      <hr/>
      <div className="lists">
        <Spin style={{width: '100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize: 10}} columns={this.columns}
                 dataSource={data}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Database.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getDatabaseList: PropTypes.func,
  restoreDatabase: PropTypes.func,
  backupDatabase: PropTypes.func
}


const mapStateToProps = (state) => {
  return {...state.systemInfoDatabaseList}
}

const mapDispatchToProps = {
  ...systemInfoActions
}
const DatabaseProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Database)
export default DatabaseProxy;
