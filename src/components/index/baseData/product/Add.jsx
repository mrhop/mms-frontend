/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Form, Icon, Input, Button, TreeSelect, Col, Alert, message, InputNumber, Spin, Upload} from 'antd';

import {history} from '../../../../redux/index/store'
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';
import {positiveNumberValidate} from '../../../../common/FormValidate';
import {isCellPhone} from '../../../../common/Utils';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.props.getProductSingle()
    this.props.getProductCategoryParentTreeOptions()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_PRODUCT_SAVE_SUCCESS) {
      history.push('/basedata/productcategory')
    } else if (type === ActionTypes.BASEDATA_PRODUCT_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_PARENT_TREE_OPTIONS_GOT) {
      this.setState({productCategoryParentOptions: data})
    }
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  submitFun = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.saveProduct(values)
      }
    });
  }

  barCodeUpload = (info) => {
    const innerFun = () => {
      if (info.file.status === 'done') {
        this.props.form.setFieldsValue({barCode: info.file.response})
        info.fileList.splice(0)
      } else if (info.file.status === 'error') {
        message.error('后台无法识别条码图片，请另行上传或手动添加');
      }
    }
    innerFun.bind(this)()
  }

  render() {
    const {loading, productCategoryParentOptions} = this.state

    const barCodeProps = {
      name: 'file',
      accept: 'image/*',
      action: '//localhost:8080/file/upload.html?type=productbarcode',
      showUploadList: false,
      onChange: this.barCodeUpload,
    };
    const {type} = this.props
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.BASEDATA_PRODUCT_SAVE_FAILURE) {
      alertMsg = <Alert
        message="保存失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    return <Spin style={{width: '100%'}} tip="处理中"
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
        <FormItem label="编码" {...formItemLayout}>
          {getFieldDecorator('code',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <Input placeholder="编码"/>
          )}
        </FormItem>
        <FormItem label="分类" {...formItemLayout}>
          {getFieldDecorator('productCategory',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <TreeSelect
              dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
              treeData={productCategoryParentOptions}
              placeholder="分类"
              allowClear
            />
          )}
        </FormItem>
        <FormItem label="成本价" {...formItemLayout}>
          {getFieldDecorator('costPrice',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <InputNumber style={{width: '100%'}}
                         formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                         parser={value => value.replace(/￥\s?|(,*)/g, '')}
                         placeholder="成本价"/>
          )}
        </FormItem>
        <FormItem label="销售价" {...formItemLayout}>
          {getFieldDecorator('salePrice',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <InputNumber style={{width: '100%'}}
                         formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                         parser={value => value.replace(/￥\s?|(,*)/g, '')}
                         placeholder="销售价"/>
          )}
        </FormItem>
        <FormItem label="库存下限" {...formItemLayout}>
          {getFieldDecorator('lowerLimit',
            {})(
            <InputNumber style={{width: '100%'}}
                         placeholder="库存下限"/>
          )}
        </FormItem>
        <FormItem label="产品条形码" {...formItemLayout}>
          {getFieldDecorator('barCode', {})(
            <Input placeholder="产品条形码"
                   addonAfter={<Upload {...barCodeProps}>
                     <a>
                       <Icon type="picture"/> 选择图片
                     </a>
                   </Upload>}
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
}


Add.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.any,
  saveProduct: PropTypes.func,
  getProductSingle: PropTypes.func,
  getProductCategoryParentTreeOptions: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    ...state.baseDataProductSingle,
    ...state.baseDataProductCategoryParentTreeOptions
  }
}

const mapDispatchToProps = {
  ...baseDataActions, ...optionActions
}
const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Add))
export default AddProxy;
