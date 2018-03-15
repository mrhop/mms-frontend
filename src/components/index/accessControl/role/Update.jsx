/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, Row, Col, Alert, TreeSelect, Spin} from 'antd';

import {history} from '../../../../redux/index/store'
import {accessControlActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';


class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: undefined,
      id: undefined
    }
    this.props.getAuthorityParentTreeOptions()
  }

  componentWillMount() {
    const {location} = this.props
    if (location.state && location.state.id) {
      this.setState({id: location.state.id})
      this.props.getRoleSingle({id: location.state.id})
    } else {
      window.location.href = '/'
    }
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_ROLE_SINGLE_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_SAVE_SUCCESS) {
      history.push('/accesscontrol/role')
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITYPARENT_TREE_OPTIONS_GOT) {
      this.setState({authorityParentOptions: data})
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
        this.props.saveRole(values)
      }
    });
  }

  render() {
    const {loading, data, id, authorityParentOptions} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.ACCESSCONTROL_ROLE_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.ACCESSCONTROL_ROLE_SAVE_FAILURE) {
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
          <FormItem label="角色名称" {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: data && data.name,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
              <Input placeholder="职位名称"/>
            )}
          </FormItem>
          <FormItem label="角色CODE" {...formItemLayout}>
            {getFieldDecorator('roleCode', {
              initialValue: data && data.roleCode,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
              <Input addonBefore="ROLE_" placeholder="角色CODE"/>
            )}
          </FormItem>
          <FormItem label="包含权限" {...formItemLayout}>
            {getFieldDecorator('authorities', {
              initialValue: data && data.authorities,
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
              <TreeSelect
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={authorityParentOptions}
                placeholder="包含权限"
                treeCheckable
                allowClear
              />
            )}
          </FormItem>
          <FormItem label="详细说明" {...formItemLayout}>
            {getFieldDecorator('description',{
              initialValue: data && data.description
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


Update.propTypes = {
  location: PropTypes.object,
  data: PropTypes.any,
  type: PropTypes.string,
  saveRole: PropTypes.func,
  getRoleSingle: PropTypes.func,
  getAuthorityParentTreeOptions: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    ...state.accessControlRoleSingle,
    ...state.accessControlAuthorityParentTreeOptions
  }
}

const mapDispatchToProps = {
  ...accessControlActions,
  ...optionActions
}
const UpdateProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Update))
export default UpdateProxy;
