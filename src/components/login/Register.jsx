/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Alert, message, Spin} from 'antd';
import {registerActions} from '../../redux/login/actions'
import * as ActionTypes from '../../redux/login/actions/ActionTypes'
import {history} from '../../redux/login/store'
import {accountValidate} from  '../../common/FormValidate';
import {formItemLayout, formItemTailLayout} from '../../common/FormLayout';


const FormItem = Form.Item;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      confirmDirty: false,
      leftSecond: 5
    };
  }

  componentWillReceiveProps(nextProps) {
    const {status} = nextProps
    if (status === ActionTypes.REGISTER_COMMITTING) {
      this.setState({loading: true})
    } else if (status === ActionTypes.REGISTER_COMMITTED) {
      // settimeout 跳转到登录页面
      this.setState({loading: false})
      let _this = this
      this.countSecondLeft = setInterval(function () {
        const {leftSecond} = _this.state
        if (leftSecond > 1) {
          _this.setState({leftSecond: leftSecond - 1})
        } else {
          history.push('/')
        }
      }, 1000)
    } else if (status === ActionTypes.REGISTER_FAILURE) {
      this.setState({loading: false})
    }
  }

  componentWillUnmount() {
    if (this.countSecondLeft) {
      clearInterval(this.countSecondLeft)
      this.countSecondLeft = null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.register(values)
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('你两次输入的密码不一致!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {status, dataProps} = this.props
    let alertMsg = null
    if (status === ActionTypes.REGISTER_COMMITTED) {
      const {leftSecond} = this.state
      let msg = "注册成功，" + leftSecond + "秒后将自动跳转至登录页"
      let desc = <div>
        <Button type="primary" onClick={()=>{history.push('/')}}>跳转至登录页 </Button>
      </div>
      alertMsg = <Alert
        message={msg}
        description={desc}
        type="success"
        showIcon
      />
    } else if (status === ActionTypes.REGISTER_FAILURE) {
      alertMsg = <Alert
        message="注册失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return (
      <Spin size="large" tip="处理中" spinning={this.state.loading}>
        <div className="register-form">
          {alertMsg}
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="账号"
            >
              {getFieldDecorator('account', {
                initialValue: dataProps && dataProps.account,
                rules: [{
                  required: true, message: '请输入账号信息',
                }, {
                  validator: accountValidate
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="E-mail"
            >
              {getFieldDecorator('email', {
                initialValue: dataProps && dataProps.email,
                rules: [{
                  type: 'email', message: '请输入正确的邮箱地址',
                }, {
                  required: true, message: '请输入邮箱地址',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机"
            >
              {getFieldDecorator('cellphone', {
                initialValue: dataProps && dataProps.cellphone,
                rules: [{required: true, message: '请输入手机号!'}],
              })(
                <Input style={{ width: '100%' }}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入密码!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password"/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请确认密码!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur}/>
              )}
            </FormItem>
            <FormItem {...formItemTailLayout}>
              <Col span={12}><Button type="primary" htmlType="submit"
                                     disabled={status === ActionTypes.REGISTER_COMMITTED?true:undefined}>注册</Button></Col>
              <Col span={12}><Link to="/login">返回登录页面</Link></Col>
            </FormItem>
          </Form>
        </div>
      </Spin>
    );
  }
}
Register.propTypes = {
  form: PropTypes.object.isRequired,
  status: PropTypes.string,
  dataProps: PropTypes.object,
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    status: state.register.status,
    dataProps: state.register.data
  }
}

const mapDispatchToProps = {
  ...registerActions
}
const RegisterProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Register))
export default RegisterProxy;
