/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Form, Select, Icon, Avatar, Badge, Popover} from 'antd';
import {loginInfoActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'


class LoginInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMsgs: undefined,
      msgNum: 0
    }
    // 这个信息应该在登录成功后一起推送过来，和session绑定在一起，目前先这么写，到时候进行header数据的传递即可
    this.props.loginInfo()
  }

  componentWillReceiveProps(nextProps) {
    const {status, dataProps} = this.props
    if (status === ActionTypes.LOGIN_INFO_INITED) {
      if (dataProps) {
        // 给出数据信息
        let alertMsgs = dataProps.map(function (val) {
          return <p key={val.url}><Link to={val.url}>{val.title}</Link></p>;
        })
        this.setState({alertMsgs: <div>{alertMsgs}</div>, msgNum: dataProps.length})
      }
    }
  }

  render() {
    // 用于判断并给出指定值，判断是否已经选定
    const {alertMsgs, msgNum} = this.state
    return (
      <div className="right-info">
        <Popover className="alert-msg" placement="bottom" title="当前事项" content={alertMsgs} trigger="click">
          <Badge className="quick-msg" count={msgNum}><Avatar size="small" icon="bell"/></Badge>
        </Popover>
        <span className="user-info">XXX(库存管理员)</span>
        <a href="/logout">注销</a>
      </div>
    );
  }
}
LoginInfo.propTypes = {
  status: PropTypes.string,
  loginInfo: PropTypes.func.isRequired,
  dataProps: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    status: state.loginInfo.status,
    dataProps: state.loginInfo.data
  }
}

const mapDispatchToProps = {
  ...loginInfoActions
}
const LoginInfoProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginInfo)
export default LoginInfoProxy;
