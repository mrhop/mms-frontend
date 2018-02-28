/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Form, Icon, Input, Button, Checkbox, Alert, message, Spin} from 'antd';
import {loginActions} from '../../redux/login/actions'
import * as ActionTypes from '../../redux/login/actions/ActionTypes'

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const {status} = nextProps
    if (status === ActionTypes.LOGIN_COMMITTING) {
      this.setState({loading: true})
    } else if (status === ActionTypes.LOGIN_COMMITTED) {
      window.location.href = '/index.html'
      this.setState({loading: false})
    } else if (status === ActionTypes.LOGIN_FAILURE) {
      this.setState({loading: false})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.login(values)
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {status} = this.props
    let alertMsg = null
    if (status === ActionTypes.LOGIN_FAILURE) {
      alertMsg = <Alert
        message="登录失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return (
      <Spin size="large" tip="处理中" spinning={this.state.loading}>
        <div className="login-form">
          {alertMsg}
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('account', {
                rules: [{required: true, message: '请输入账号'}],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.7)' }} />} placeholder="账号"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请输入密码'}],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.7)' }} />} type="password"
                       placeholder="密码"/>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{width:'100%'}} className="login-form-button">登录</Button>
              <br/>
              <Link to="/forget">忘记密码？</Link> 或 <Link to="/register">现在注册!</Link>
            </FormItem>
          </Form>
        </div>
      </Spin>
    );
  }
}
Login.propTypes = {
  form: PropTypes.object.isRequired,
  status: PropTypes.string,
  login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    status: state.login.status
  }
}

const mapDispatchToProps = {
  ...loginActions
}
const LoginProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Login))
export default LoginProxy;
