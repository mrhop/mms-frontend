/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, Row, Col, Alert, DatePicker, Spin} from 'antd';

import {history} from '../../../../redux/index/store'
import {systemInfoActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';
import {positiveNumberValidate} from '../../../../common/FormValidate';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.props.getSaleStrategySingle()
  }

  componentWillReceiveProps(nextProps) {
    const {type} = nextProps
    if (type === ActionTypes.SYSTEMINFO_SALESTRATEGY_SAVE_SUCCESS) {
      history.push('/systeminfo/salestrategy')
    } else if (type === ActionTypes.SYSTEMINFO_SALESTRATEGY_SAVE_FAILURE) {
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
        this.props.saveSaleStrategy(values)
      }
    });
  }

  checkEndDate = (rule, value, callback) => {
    const form = this.props.form;
    if (value && form.getFieldValue('beginDate') && value <= form.getFieldValue('beginDate')) {
      callback('结束日期必须大于起始日期');
    } else {
      callback();
    }
  }
  checkBeginDate = (rule, value, callback) => {
    const form = this.props.form;
    form.validateFields(['endDate'], {force: true});
    callback();
  }

  render() {
    const {loading} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.SYSTEMINFO_SALESTRATEGY_SAVE_FAILURE) {
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
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Input placeholder="名称"/>
          )}
        </FormItem>
        <FormItem label="起始日期" {...formItemLayout}>
          {getFieldDecorator('beginDate', {
            rules: [{
              validator: this.checkBeginDate
            }]
          })(
            <DatePicker style={{width:'100%'}} placeholder="起始日期"/>
          )}
        </FormItem>
        <FormItem label="结束日期" {...formItemLayout}>
          {getFieldDecorator('endDate', {
            rules: [{
              validator: this.checkEndDate
            }]
          })(
            <DatePicker style={{width:'100%'}} placeholder="结束日期"/>
          )}
        </FormItem>
        <FormItem label="销售额下限" {...formItemLayout}>
          {getFieldDecorator('lowerLimit', {
            rules: [{
              validator: positiveNumberValidate
            }]
          })(
            <Input placeholder="销售额下限"/>
          )}
        </FormItem>
        <FormItem label="折扣率" {...formItemLayout}>
          {getFieldDecorator('discount', {
            rules: [{
              validator: positiveNumberValidate
            }]
          })(
            <Input placeholder="折扣率"/>
          )}
        </FormItem>
        <FormItem label="满减" {...formItemLayout}>
          {getFieldDecorator('fullCut', {
            rules: [{
              validator: positiveNumberValidate
            }]
          })(
            <Input placeholder="满减"/>
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
  saveSaleStrategy: PropTypes.func,
  getSaleStrategySingle: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {...state.systemInfoSaleStrategySingle}
}

const mapDispatchToProps = {
  ...systemInfoActions
}
const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Add))
export default AddProxy;
