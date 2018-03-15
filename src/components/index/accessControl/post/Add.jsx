/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, Row, Col, Alert, message, Spin} from 'antd';

import {history} from '../../../../redux/index/store'
import {accessControlActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.props.getPostSingle()
  }

  componentWillReceiveProps(nextProps) {
    const {type} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_POST_SAVE_SUCCESS) {
      history.push('/accesscontrol/post')
    } else if (type === ActionTypes.ACCESSCONTROL_POST_SAVE_FAILURE) {
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
        this.props.savePost(values)
      }
    });
  }

  render() {
    const {loading} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.ACCESSCONTROL_POST_SAVE_FAILURE) {
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
        <FormItem label="职位名称" {...formItemLayout}>
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Input placeholder="职位名称"/>
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
  savePost: PropTypes.func,
  getPostSingle: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => {
  return {...state.accessControlPostSingle}
}

const mapDispatchToProps = {
  ...accessControlActions
}
const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Add))
export default AddProxy;
