/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, Row, Col, Alert, message, Spin, Select} from 'antd';

const Option = Select.Option;

import {history} from '../../../../redux/index/store'
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.props.getEmployeeSingle()
    this.props.getStoreOptions()
    this.props.getPostOptions()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_EMPLOYEE_SAVE_SUCCESS) {
      history.push('/basedata/employee')
    } else if (type === ActionTypes.BASEDATA_EMPLOYEE_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_STORE_OPTIONS_GOT) {
      this.setState({storeOptions: data})
    } else if (type === ActionTypes.ACCESSCONTROL_POST_OPTIONS_GOT) {
      this.setState({postOptions: data})
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
        this.props.saveEmployee(values)
      }
    });
  }

  render() {
    const {loading, storeOptions, postOptions} = this.state
    let storeOptionsArr = storeOptions && storeOptions.map(function (item) {
      return <Option key={item.value} value={item.value}>{item.text}</Option>
    })
    let postOptionsArr = postOptions && postOptions.map(function (item) {
      return <Option key={item.value} value={item.value}>{item.text}</Option>
    })
    const {type} = this.props
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.BASEDATA_EMPLOYEE_SAVE_FAILURE) {
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
        <FormItem label="编码" {...formItemLayout}>
          {getFieldDecorator('code',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="编码"/>
          )}
        </FormItem>
        <FormItem label="职位" {...formItemLayout}>
          {getFieldDecorator('post', {
            rules: [{
              required: true, message: '必选字段!'
            }]
          })(
            <Select placeholder="选择职位">
              {postOptionsArr}
            </Select>
          )}
        </FormItem>
        <FormItem label="关联仓库" {...formItemLayout}>
          {getFieldDecorator('relatedStores', {})(
            <Select mode="multiple" placeholder="选择关联仓库">
              {storeOptionsArr}
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
  saveEmployee: PropTypes.func,
  getEmployeeSingle: PropTypes.func,
  getStoreOptions: PropTypes.func,
  getPostOptions: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {
    ...state.baseDataEmployeeSingle,
    ...state.baseDataStoreOptions,
    ...state.accessControlPostOptions
  }
}

const mapDispatchToProps = {
  ...baseDataActions, ...optionActions
}
const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Add))
export default AddProxy;
