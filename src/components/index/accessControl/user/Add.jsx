/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, TreeSelect, Col, Alert, Select, Checkbox, Spin} from 'antd';

import {history} from '../../../../redux/index/store'
import {accessControlActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';
import {accountValidate} from  '../../../../common/FormValidate';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.props.getUserSingle()
    this.props.getPostOptions()
    this.props.getRoleOptions()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_USER_SAVE_SUCCESS) {
      history.push('/accesscontrol/user')
    } else if (type === ActionTypes.ACCESSCONTROL_USER_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.ACCESSCONTROL_POST_OPTIONS_GOT) {
      this.setState({postOptions: data})
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_OPTIONS_GOT) {
      this.setState({roleOptions: data})
    }
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  submitFun = (e)=> {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.saveUser(values)
      }
    });
  }

  render() {
    const {loading, postOptions, roleOptions} = this.state
    const {Option} = Select;
    const {TextArea} = Input;
    let postOptionsArr = postOptions && postOptions.map(function (item) {
        return <Option key={item.value} value={item.value}>{item.text}</Option>
      })

    let roleOptionsArr = roleOptions && roleOptions.map(function (item) {
        return <Option key={item.value} value={item.value}>{item.text}</Option>
      })
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.ACCESSCONTROL_USER_SAVE_FAILURE) {
      alertMsg = <Alert
        message="保存失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return <Spin style={{width:'100%'}} tip="处理中"
                 spinning={loading}>
      {alertMsg}
      <Form onSubmit={this.submitFun}>
        <FormItem label="名称" {...formItemLayout}>
          {getFieldDecorator('name',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="名称"/>
          )}
        </FormItem>
        <FormItem label="账号" {...formItemLayout}>
          {getFieldDecorator('account',
            {
              rules: [{
                required: true, message: '必选字段!'
              }, {
                validator: accountValidate
              }],
            })(
            <Input placeholder="账号"/>
          )}
        </FormItem>
        <FormItem label="角色" {...formItemLayout}>
          {getFieldDecorator('roles', {
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Select placeholder="角色" mode="multiple">
              {roleOptionsArr || []}
            </Select>
          )}
        </FormItem>
        <FormItem label="职位" {...formItemLayout}>
          {getFieldDecorator('post', {
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Select placeholder="职位">
              {postOptionsArr || []}
            </Select>
          )}
        </FormItem>
        <FormItem label="邮箱" {...formItemLayout}>
          {getFieldDecorator('email',
            {
              rules: [{
                required: true, message: '必选字段!'
              }, {
                type: 'email', message: '请输入正确的邮箱地址',
              }],
            })(
            <Input placeholder="邮箱" type="email"/>
          )}
        </FormItem>
        <FormItem label="手机" {...formItemLayout}>
          {getFieldDecorator('cellphone',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="手机"/>
          )}
        </FormItem>
        <FormItem label="电话" {...formItemLayout}>
          {getFieldDecorator('phone',
            {})(
            <Input placeholder="电话"/>
          )}
        </FormItem>
        <FormItem label="传真" {...formItemLayout}>
          {getFieldDecorator('fax',
            {})(
            <Input placeholder="传真"/>
          )}
        </FormItem>
        <FormItem label="地址" {...formItemLayout}>
          {getFieldDecorator('address')(
            <TextArea placeholder="地址"/>
          )}
        </FormItem>
        <FormItem label="详细说明" {...formItemLayout}>
          {getFieldDecorator('description')(
            <TextArea placeholder="详细说明"/>
          )}
        </FormItem>
        <FormItem {...formItemTailLayout}>
          <Col span={12}><Button onClick={this.handleReset}>重置</Button></Col>
          <Col span={12}><Button type="primary" htmlType="submit">保存</Button></Col>
        </FormItem>
      </Form>
    </Spin>
  }
}


Add.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.any,
  saveUser: PropTypes.func,
  getUserSingle: PropTypes.func,
  getPostOptions: PropTypes.func,
  getRoleOptions: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    ...state.accessControlUserSingle,
    ...state.accessControlPostOptions,
    ...state.accessControlRoleOptions
  }
}

const mapDispatchToProps = {
  ...accessControlActions, ...optionActions
}
const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Add))
export default AddProxy;
