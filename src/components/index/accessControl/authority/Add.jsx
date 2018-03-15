/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, TreeSelect, Col, Alert, Select, Checkbox, Spin} from 'antd';

import {history} from '../../../../redux/index/store'
import {accessControlActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.props.getAuthoritySingle()
    this.props.getPostOptions()
    this.props.getAuthorityParentTreeOptions()
  }

  componentWillReceiveProps(nextProps) {
    const {type, postOptions, authorityParentOptions} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_SAVE_SUCCESS) {
      history.push('/accesscontrol/authority')
    } else if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (postOptions && postOptions.type === ActionTypes.ACCESSCONTROL_POST_OPTIONS_GOT) {
      this.setState({postOptions: postOptions.data})
    } else if (authorityParentOptions && authorityParentOptions.type === ActionTypes.ACCESSCONTROL_AUTHORITYPARENT_TREE_OPTIONS_GOT) {
      this.setState({authorityParentOptions: authorityParentOptions.data})
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
        this.props.saveAuthority(values)
      }
    });
  }

  render() {
    const {loading, postOptions, authorityParentOptions} = this.state
    const {Option} = Select;
    let postOptionsArr = postOptions && postOptions.map(function (item) {
        return <Option key={item.value} value={item.value}>{item.text}</Option>
      })
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.ACCESSCONTROL_AUTHORITY_SAVE_FAILURE) {
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
          {getFieldDecorator('name',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="名称"/>
          )}
        </FormItem>
        <FormItem label="职位" {...formItemLayout}>
          {getFieldDecorator('post', {
            rules: [{
              required: true, message: '必选字段!'
            }],
          })(
            <Select placeholder="职位">
              {postOptionsArr || []}
            </Select>
          )}
        </FormItem>
        <FormItem label="导航显示" {...formItemLayout}>
          {getFieldDecorator('inMenu', {
            initialValue: true
          })(
            <Checkbox>是</Checkbox>
          )}
        </FormItem>
        <FormItem label="父权限" {...formItemLayout}>
          {getFieldDecorator('parent')(
            <TreeSelect
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={authorityParentOptions}
              placeholder="父权限"
              allowClear
            />
          )}
        </FormItem>
        <FormItem label="URL" {...formItemLayout}>
          {getFieldDecorator('url')(
            <Input placeholder="URL"/>
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
  saveAuthority: PropTypes.func,
  getAuthoritySingle: PropTypes.func,
  getPostOptions: PropTypes.func,
  getAuthorityParentTreeOptions: PropTypes.func,
  form: PropTypes.object.isRequired,
  postOptions: PropTypes.object,
  authorityParentOptions: PropTypes.object
}


const mapStateToProps = (state) => {
  return {
    ...state.accessControlAuthoritySingle,
    postOptions: state.accessControlPostOptions,
    authorityParentOptions: state.accessControlAuthorityParentTreeOptions
  }
}

const mapDispatchToProps = {
  ...accessControlActions, ...optionActions
}
const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Add))
export default AddProxy;
