/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, Row, Col, Alert, message, Spin, Radio} from 'antd';
const RadioGroup = Radio.Group

import {history} from '../../../../redux/index/store'
import {baseDataActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';


class Update extends Component {
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
    if (location.state && location.state.id) {
      this.setState({id: location.state.id})
      this.props.getSupplierSingle({id: location.state.id})
    } else {
      window.location.href = '/'
    }
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_SUPPLIER_SINGLE_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.BASEDATA_SUPPLIER_SAVE_SUCCESS) {
      history.push('/basedata/supplier')
    } else if (type === ActionTypes.BASEDATA_SUPPLIER_SAVE_FAILURE) {
      this.setState({loading: false})
    }
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  submitFun = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.saveSupplier(values)
      }
    });
  }

  render() {
    const {loading, data, id} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.BASEDATA_SUPPLIER_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.BASEDATA_SUPPLIER_SAVE_FAILURE) {
      alertMsg = <Alert
        message="保存失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return <Spin style={{width: '100%'}} tip="处理中"
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
        <FormItem label="编码" {...formItemLayout}>
          {getFieldDecorator('code',
            {
              initialValue: data && data.code,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="编码"/>
          )}
        </FormItem>
        <FormItem label="主供货商" {...formItemLayout}>
          {getFieldDecorator('isPrimary', {
            initialValue: data && data.isPrimary,
            rules: [{
              required: true, message: '必选字段!'
            }]
          })(
            <RadioGroup>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem label="联系人" {...formItemLayout}>
          {getFieldDecorator('contactName',
            {
              initialValue: data && data.contactName,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="联系人"/>
          )}
        </FormItem>
        <FormItem label="联系人职位" {...formItemLayout}>
          {getFieldDecorator('post',
            {
              initialValue: data && data.post,
            })(
            <Input placeholder="联系人职位"/>
          )}
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
}


Update.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.any,
  saveSupplier: PropTypes.func,
  getSupplierSingle: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {...state.baseDataSupplierSingle}
}

const mapDispatchToProps = {
  ...baseDataActions
}
const UpdateProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Update))
export default UpdateProxy;
