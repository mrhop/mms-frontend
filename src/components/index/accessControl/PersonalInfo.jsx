/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, TreeSelect, Col, Alert, Select, Checkbox, Spin} from 'antd';
import {accessControlActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../common/FormLayout';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      id: undefined
    }
  }

  componentWillMount() {
    const {location} = this.props
    // 此处从cookie获取
    this.setState({id: 1})
    this.props.getUserSingle({id: 1})

  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_USER_SINGLE_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_USER_SAVE_SUCCESS || type === ActionTypes.ACCESSCONTROL_USER_SAVE_FAILURE) {
      this.setState({loading: false})
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
    const {loading, data, id} = this.state
    const {TextArea} = Input;
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.ACCESSCONTROL_USER_SAVE_SUCCESS) {
      alertMsg = <Alert
        message="保存成功"
        type="success"
        showIcon
      />
    } else if (type === ActionTypes.ACCESSCONTROL_USER_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.ACCESSCONTROL_USER_SAVE_FAILURE) {
      alertMsg = <Alert
        message="保存失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    if (id) {
      return <Spin style={{width:'100%'}} tip="处理中"
                   spinning={loading}>
        {alertMsg}
        <Form onSubmit={this.submitFun}>
          <FormItem>
            {getFieldDecorator('id', {
              initialValue: data && data.id
            })(
              <Input type="hidden" name='id'/>
            )}
          </FormItem>
          <FormItem label="名称" {...formItemLayout}>
            {getFieldDecorator('name',
              {
                initialValue: data && data.name,
                rules: [{
                  required: true, message: '必选字段!'
                }],
              })(
              <Input placeholder="名称"/>
            )}
          </FormItem>
          <FormItem label="账号" {...formItemLayout}>
            {data && data.account}
          </FormItem>
          <FormItem label="角色" {...formItemLayout}>
            {data && JSON.stringify(data.rolesName)}
          </FormItem>
          <FormItem label="职位" {...formItemLayout}>
            {data && data.postName}
          </FormItem>
          <FormItem label="邮箱" {...formItemLayout}>
            {getFieldDecorator('email',
              {
                initialValue: data && data.email,
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
                initialValue: data && data.cellphone,
                rules: [{
                  required: true, message: '必选字段!'
                }],
              })(
              <Input placeholder="手机"/>
            )}
          </FormItem>
          <FormItem label="电话" {...formItemLayout}>
            {getFieldDecorator('phone',
              {
                initialValue: data && data.phone,
              })(
              <Input placeholder="电话"/>
            )}
          </FormItem>
          <FormItem label="传真" {...formItemLayout}>
            {getFieldDecorator('fax',
              {
                initialValue: data && data.fax,
              })(
              <Input placeholder="传真"/>
            )}
          </FormItem>
          <FormItem label="地址" {...formItemLayout}>
            {getFieldDecorator('address', {
              initialValue: data && data.address,
            })(
              <TextArea placeholder="地址"/>
            )}
          </FormItem>
          <FormItem label="详细说明" {...formItemLayout}>
            {getFieldDecorator('description', {
              initialValue: data && data.description,
            })(
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
    return ''
  }
}


PersonalInfo.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.any,
  saveUser: PropTypes.func,
  getUserSingle: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    ...state.accessControlUserSingle
  }
}

const mapDispatchToProps = {
  ...accessControlActions
}
const PersonalInfoProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(PersonalInfo))
export default PersonalInfoProxy;
