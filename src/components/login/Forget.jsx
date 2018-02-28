/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Form, Icon, Input, Button, Checkbox, Alert, message, Spin} from 'antd';
import {forgetActions} from '../../redux/login/actions'
import * as ActionTypes from '../../redux/login/actions/ActionTypes'

const FormItem = Form.Item;

class Forget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const {status} = nextProps
    if (status === ActionTypes.FORGET_COMMITTING) {
      this.setState({loading: true})
    } else {
      this.setState({loading: false})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.forget(values)
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {status} = this.props
    let alertMsg = null
    if (status === ActionTypes.FORGET_COMMITTED) {
      alertMsg = <Alert
        message='密码找回提示'
        description='密码重置链接已经发送至你提供的邮箱，请查看邮箱并处理'
        type="success"
        showIcon
      />
    } else if (status === ActionTypes.FORGET_FAILURE) {
      alertMsg = <Alert
        message="密码找回失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return (
      <Spin size="large" tip="处理中" spinning={this.state.loading}>
        <div className="forget-form">
          {alertMsg}
          <Form onSubmit={this.handleSubmit} className="forget-form">
            <FormItem label="需要重置密码的邮箱地址">
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '请输入正确的邮箱地址',
                }, {
                  required: true, message: '请输入邮箱地址!'
                }]
              })(
                <Input placeholder="邮箱地址"/>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{width:'100%'}}
                      className="login-form-button">找回密码</Button>
              <br/>
              <Link to="/login">返回登录页面</Link>
            </FormItem>
          </Form>
        </div>
      </Spin>
    );
  }
}
Forget.propTypes = {
  form: PropTypes.object.isRequired,
  status: PropTypes.string,
  forget: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    status: state.forget.status
  }
}

const mapDispatchToProps = {
  ...forgetActions
}
const ForgetProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Forget))
export default ForgetProxy;
