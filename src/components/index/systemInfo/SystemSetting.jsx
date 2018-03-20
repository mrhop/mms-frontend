/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Select, Input, Button, Row, Col, Alert, Radio, Spin} from 'antd';
const RadioGroup = Radio.Group;
const Option = Select.Option;

import {systemInfoActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../common/FormLayout';
import {positiveNumberValidate} from '../../../common/FormValidate';


class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      id: undefined
    }
    this.props.getSystemSettingSingle()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.SYSTEMINFO_SETTING_SINGLE_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.SYSTEMINFO_SETTING_SAVE_SUCCESS || type === ActionTypes.SYSTEMINFO_SETTING_SINGLE_FAILURE || type === ActionTypes.SYSTEMINFO_SETTING_SAVE_FAILURE) {
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
        this.props.saveSystemSetting(values)
      }
    });
  }

  render() {
    const {loading, data, id} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.SYSTEMINFO_SETTING_SAVE_SUCCESS) {
      alertMsg = <Alert
        message="保存成功"
        type="success"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_SETTING_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_SETTING_SAVE_FAILURE) {
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
        <FormItem>
          {getFieldDecorator('id', {
            initialValue: data && data.id
          })(
            <Input type="hidden" name='id'/>
          )}
        </FormItem>
        <FormItem label="商品自动编号" {...formItemLayout}>
          {getFieldDecorator('automaticProductNumber', {
            initialValue: data && data.automaticProductNumber,
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <RadioGroup >
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem label="成本价格调整" {...formItemLayout}>
          {getFieldDecorator('costPriceStrategy', {
            initialValue: data && data.costPriceStrategy,
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Select>
              <Option value={0}>手动</Option>
              <Option value={1}>平均</Option>
              <Option value={2}>近期</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="参考销售价上浮" {...formItemLayout}>
          {getFieldDecorator('salePriceFloating', {
            initialValue: data && data.salePriceFloating,
            rules: [{
              required: true, message: '必选字段!'
            }, {
              validator: positiveNumberValidate
            }],
          })(
            <Input addonAfter={"%"}/>
          )}
        </FormItem>
        <FormItem label="数据库自动备份" {...formItemLayout}>
          {getFieldDecorator('dumpBackupRate', {
            initialValue: data && data.dumpBackupRate,
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Select>
              <Option value={0}>一天</Option>
              <Option value={1}>一周</Option>
              <Option value={2}>两周</Option>
              <Option value={3}>一个月</Option>
              <Option value={4}>只手动备份</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="过期商品预警" {...formItemLayout}>
          {getFieldDecorator('expiryAlert', {
            initialValue: data && data.expiryAlert,
            rules: [{
              required: true, message: '必选字段!'
            }, {
              validator: positiveNumberValidate
            }],
          })(
            <Input addonAfter={"天"}/>
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
  data: PropTypes.object,
  getSystemSettingSingle: PropTypes.func,
  saveSystemSetting: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {...state.systemInfoSettingSingle}
}

const mapDispatchToProps = {
  ...systemInfoActions
}
const UpdateProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Update))
export default UpdateProxy;
