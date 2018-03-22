/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, TreeSelect, Col, Alert, Select, Checkbox, Spin} from 'antd';

import {history} from '../../../../redux/index/store'
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
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
    this.props.getProductCategoryParentTreeOptions()
  }

  componentWillMount() {
    const {location} = this.props
    if (location.state && location.state.id) {
      this.setState({id: location.state.id})
      this.props.getProductCategorySingle({id: location.state.id})
    } else {
      window.location.href = '/'
    }
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_SINGLE_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_SAVE_SUCCESS) {
      history.push('/basedata/productcategory')
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_PARENT_TREE_OPTIONS_GOT) {
      this.setState({productCategoryParentOptions: data})
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
        this.props.saveProductCategory(values)
      }
    });
  }

  render() {
    const {loading, data, id, productCategoryParentOptions} = this.state

    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_SINGLE_FAILURE) {
      alertMsg = <Alert
        message="获取失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_SAVE_FAILURE) {
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
          <FormItem label="名称" {...formItemLayout}>
            {getFieldDecorator('name',
              {
                initialValue: data && data.name,
                rules: [{
                  required: true, message: '必选字段!'
                }],
              })(
              <Input placeholder="名称"/>
            )}
          </FormItem>
          <FormItem label="上级分类" {...formItemLayout}>
            {getFieldDecorator('parent', {
              initialValue: data && data.parent,
            })(
              <TreeSelect
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={productCategoryParentOptions}
                placeholder="上级分类"
                allowClear
              />
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
  type: PropTypes.string,
  data: PropTypes.any,
  saveProductCategory: PropTypes.func,
  getProductCategorySingle: PropTypes.func,
  getProductCategoryParentTreeOptions: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    ...state.baseDataProductCategorySingle,
    ...state.baseDataProductCategoryParentTreeOptions
  }
}

const mapDispatchToProps = {
  ...baseDataActions, ...optionActions
}
const UpdateProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Update))
export default UpdateProxy;
