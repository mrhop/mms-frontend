/**
 * Created by Donghui Huo on 2018/2/8.
 */
import  React, {Component, Fragment} from 'react'
import {Form, Icon, Input, Button, Row, Col, Alert, message, Spin} from 'antd';
import {ipValidate, portValidate} from  '../../common/FormValidate';
import {formItemLayout, formItemTailLayout} from '../../common/FormLayout';

import PropTypes from 'prop-types'

class InitContent1 extends Component {
  clickNext = (e)=> {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.initSubmit1(values)
      }
    });
  }
  dbTest = ()=> {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.initDbTest(values)
      }
    });
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
    if (status === 'dbTestSuccess' || status === 'dbTestFailure' || status === 'init1CommitFailure') {
      this.setState({loading: false})
      if (status === 'dbTestSuccess') {
        message.success('数据库连接测试成功');
      }
    }
  }

  render() {
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    const {status, dataForm} = this.props
    let data1 = dataForm.data1
    let alertMsg = null
    if (status === 'dbTestFailure') {
      alertMsg = <Alert
        message="数据库连接测试失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }

    return (
      <Spin size="large" tip="处理中" spinning={this.state.loading}>
        <p>注意事项</p>
        <p>1. 请使用mySql 5.5版本以及以上数据库</p>
        <p>2. 保证数据库可以被访问，且用户名/密码正确</p>
        <hr style={{marginBotton:'20px'}}/>
        {alertMsg}
        <Form onSubmit={this.clickNext} className="init-page1">
          <FormItem label="IP地址" {...formItemLayout}>
            {getFieldDecorator('ip', {
              initialValue: data1 && data1.ip,
              rules: [{
                required: true, message: '必选字段!'
              }, {
                validator: ipValidate
              }],
            })(
              <Input placeholder="IP地址"/>
            )}
          </FormItem>
          <FormItem label="端口号"  {...formItemLayout}>
            {getFieldDecorator('port', {
              initialValue: data1 && data1.port,
              rules: [{
                required: true, message: '必选字段!'
              }, {
                validator: portValidate
              }],
            })(
              <Input placeholder="端口号"/>
            )}
          </FormItem>
          <FormItem label="账号"  {...formItemLayout}>
            {getFieldDecorator('account', {
              initialValue: data1 && data1.account,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
              <Input placeholder="账号"/>
            )}
          </FormItem>
          <FormItem label="密码"  {...formItemLayout}>
            {getFieldDecorator('password')(
              <Input type="password" placeholder="密码"/>
            )}
          </FormItem>
          <FormItem {...formItemTailLayout}>
            <Col span={12}><Button onClick={this.dbTest}>测试数据库</Button></Col>
            <Col span={12}><Button type="primary" htmlType="submit">初始化数据库</Button></Col>
          </FormItem>
        </Form>
      </Spin>
    )
  }
}

InitContent1.propTypes = {
  initSubmit1: PropTypes.func.isRequired,
  initDbTest: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  dataForm: PropTypes.object.isRequired
}
const WrappedInitForm1 = Form.create()(InitContent1);

export default WrappedInitForm1
