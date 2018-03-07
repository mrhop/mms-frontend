/**
 * Created by Donghui Huo on 2018/2/8.
 */
import  React, {Component, Fragment} from 'react'
import {Form, Icon, Input, Button, Row, Col, Alert, message, Spin} from 'antd';
import {formItemLayout, formItemTailLayout} from '../../common/FormLayout';
import {urlSelectAfter, urlSelectBefore} from '../../common/FormVars';

import PropTypes from 'prop-types'

class InitContent2 extends Component {
  clickNext = (e)=> {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.initSubmit2()
      }
    });
  }

  clickBack = ()=> {
    this.props.backInit1(this.props.form.getFieldsValue())
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    message.config({
      duration: 2,
    })
  }

  componentWillReceiveProps(nextProps) {
    const {status} = nextProps
    if (status === 'init2CommitFailure') {
      this.setState({loading: false})
    }
  }

  render() {
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    const {status, dataForm} = this.props
    let data2 = dataForm.data2
    let alertMsg = null
    if (status === 'init2CommitFailure') {
      alertMsg = <Alert
        message="企业信息初始化失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }

    return (
      <Spin size="large" tip="处理中" spinning={this.state.loading}>
        {alertMsg}
        <Form onSubmit={this.clickNext} className="init-page2">
          <FormItem label="企业名称" {...formItemLayout}>
            {getFieldDecorator('companyName', {
              initialValue: data2 && data2.companyName,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
              <Input placeholder="企业名称"/>
            )}
          </FormItem>
          <FormItem label="主要联系人" {...formItemLayout}>
            {getFieldDecorator('contactName', {
              initialValue: data2 && data2.contactName,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
              <Input placeholder="联系人姓名"/>
            )}
          </FormItem>
          <FormItem label="联系人职位" {...formItemLayout}>
            {getFieldDecorator('post', {
              initialValue: data2 && data2.post,
            })(
              <Input placeholder="职位"/>
            )}
          </FormItem>
          <FormItem label="邮箱" {...formItemLayout}>
            {getFieldDecorator('email', {
              initialValue: data2 && data2.email,
              rules: [{
                type: 'email', message: '请输入正确的邮箱地址',
              }, {
                required: true, message: '必选字段!'
              }]
            })(
              <Input placeholder="邮箱"/>
            )}
          </FormItem>
          <FormItem label="电话" {...formItemLayout}>
            {getFieldDecorator('phone', {
              initialValue: data2 && data2.phone,
              rules: []
            })(
              <Input placeholder="电话"/>
            )}
          </FormItem>
          <FormItem label="手机" {...formItemLayout}>
            {getFieldDecorator('cellphone', {
              initialValue: data2 && data2.cellphone,
              rules: [{
                initialValue: data2 && data2.cellphone,
                required: true, message: '必选字段!'
              }]
            })(
              <Input placeholder="手机"/>
            )}
          </FormItem>
          <FormItem label="传真" {...formItemLayout}>
            {getFieldDecorator('fax', {
              initialValue: data2 && data2.fax,
              rules: []
            })(
              <Input placeholder="传真"/>
            )}
          </FormItem>
          <FormItem label="网址" {...formItemLayout}>
            {getFieldDecorator('website', {
              initialValue: data2 && data2.website,
              rules: []
            })(
              <Input addonBefore={urlSelectBefore} addonAfter={urlSelectAfter} placeholder="网址"/>
            )}
          </FormItem>
          <FormItem label="企业详情" {...formItemLayout}>
            {getFieldDecorator('description', {
              initialValue: data2 && data2.description,
              rules: []
            })(
              <TextArea placeholder="企业详情"/>
            )}
          </FormItem>
          <FormItem {...formItemTailLayout}>
            <Col span={12}><Button onClick={this.clickBack}>上一步</Button></Col>
            <Col span={12}><Button type="primary" htmlType="submit">下一步</Button></Col>
          </FormItem>
        </Form>
      </Spin>
    )
  }
}

InitContent2.propTypes = {
  initSubmit2: PropTypes.func.isRequired,
  backInit1: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  dataForm: PropTypes.object.isRequired
}
const WrappedInitForm2 = Form.create()(InitContent2);

export default WrappedInitForm2
