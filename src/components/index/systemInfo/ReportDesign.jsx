/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './ReportDesign.scss'
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Select, Input, Button, Row, Col, Alert, Radio, Spin} from 'antd';
const Option = Select.Option;

import {systemInfoActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../common/FormLayout';
import reportdesign1 from '../../../assets/images/reportdesign/reportdesign1.png'
import reportdesign2 from '../../../assets/images/reportdesign/reportdesign2.png'
import reportdesign3 from '../../../assets/images/reportdesign/reportdesign3.png'
import reportdesign4 from '../../../assets/images/reportdesign/reportdesign4.png'

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      id: undefined,
      samplePictures: [reportdesign1, reportdesign2, reportdesign3, reportdesign4]
    }
    this.props.getReportDesignSingle()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SINGLE_GOT) {
      this.setState({loading: false, data})
      if (data && data.reportStyle && !this.state.reportStyle) {
        this.setState({reportStyle: data.reportStyle})
      }
    } else if (type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SAVE_SUCCESS || type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SINGLE_FAILURE || type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SAVE_FAILURE) {
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
        this.props.saveReportDesign(values)
      }
    });
  }
  onChange = (value)=> {
    this.setState({reportStyle: value})
  }

  render() {
    const {loading, data, samplePictures, reportStyle} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SAVE_SUCCESS) {
      alertMsg = <Alert
        message="保存成功"
        type="success"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_REPORTDESIGN_SAVE_FAILURE) {
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
        <FormItem label="选择报表" {...formItemLayout}>
          {getFieldDecorator('reportStyle',
            {
              initialValue: data && data.reportStyle,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Select placeholder="报表样式" onChange={this.onChange}>
              <Option value={1}>默认样式</Option>
              <Option value={2}>浅蓝</Option>
              <Option value={3}>灰色</Option>
              <Option value={4}>蓝色</Option>
            </Select>
          )}
        </FormItem>
        {reportStyle &&
        <FormItem label="样例图片"{...formItemLayout}>
          {<img className="report-design-img" src={samplePictures[(reportStyle-1)]}/>}
        </FormItem>}
        <FormItem {...formItemTailLayout}>
          <Col span={12}><Button onClick={this.handleReset}>重置</Button></Col>
          <Col span={12}><Button type="primary" htmlType="submit">保存</Button></Col>
        </FormItem>
      </Form>
    </Spin >
  }
}


Update.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.object,
  getReportDesignSingle: PropTypes.func,
  saveReportDesign: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {...state.systemInfoReportDesignSingle}
}

const mapDispatchToProps = {
  ...systemInfoActions
}
const UpdateProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Update))
export default UpdateProxy;
