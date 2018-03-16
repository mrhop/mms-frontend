/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Select, Input, Button, Row, Col, Alert, Radio, Spin} from 'antd';
const TextArea = Input.TextArea;

import {systemInfoActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../common/FormLayout';


class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      id: undefined
    }
    this.props.getCompanyInfoSingle()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.SYSTEMINFO_COMPANYINFO_SINGLE_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.SYSTEMINFO_COMPANYINFO_SAVE_SUCCESS || type === ActionTypes.SYSTEMINFO_COMPANYINFO_SINGLE_FAILURE || type === ActionTypes.SYSTEMINFO_COMPANYINFO_SAVE_FAILURE) {
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
        this.props.saveCompanyInfo(values)
      }
    });
  }

  render() {
    const {loading, data, id} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.SYSTEMINFO_COMPANYINFO_SAVE_SUCCESS) {
      alertMsg = <Alert
        message="保存成功"
        type="success"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_COMPANYINFO_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.SYSTEMINFO_COMPANYINFO_SAVE_FAILURE) {
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
        <FormItem label="名称" {...formItemLayout}>
          {getFieldDecorator('name',
            {
              initialValue: data && data.name,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="企业名称"/>
          )}
        </FormItem>
        <FormItem label="法人" {...formItemLayout}>
          {getFieldDecorator('legalPerson',
            {
              initialValue: data && data.legalPerson,
            })(
            <Input placeholder="法人姓名"/>
          )}
        </FormItem>
        <FormItem label="主要联系人" {...formItemLayout}>
          {getFieldDecorator('contactName',
            {
              initialValue: data && data.contactName,
            })(
            <Input placeholder="联系人姓名"/>
          )}
        </FormItem>
        <FormItem label="联系人职位" {...formItemLayout}>
          {getFieldDecorator('post',
            {
              initialValue: data && data.post,
            })(
            <Input placeholder="职位"/>
          )}
        </FormItem>
        <FormItem label="手机" {...formItemLayout}>
          {getFieldDecorator('cellphone',
            {
              initialValue: data && data.cellphone,
            })(
            <Input placeholder="手机"/>
          )}
        </FormItem>
        <FormItem label="邮箱" {...formItemLayout}>
          {getFieldDecorator('email',
            {
              initialValue: data && data.email,
              rules: [{
                trype: 'email', message: '请输入正确的邮箱地址!'
              }]
            })(
            <Input placeholder="邮箱"/>
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
        <FormItem label="网址" {...formItemLayout}>
          {getFieldDecorator('website',
            {
              initialValue: data && data.website,
            })(
            <Input placeholder="网址"/>
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
  data: PropTypes.object,
  getCompanyInfoSingle: PropTypes.func,
  saveCompanyInfo: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {...state.systemInfoCompanyInfoSingle}
}

const mapDispatchToProps = {
  ...systemInfoActions
}
const UpdateProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Update))
export default UpdateProxy;
