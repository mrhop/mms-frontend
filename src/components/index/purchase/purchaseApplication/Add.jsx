/**
 * Created by Donghui Huo on 2018/1/31.
 */
import './Add.scss'

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col,
  Alert,
  message,
  Spin,
  Radio,
  DatePicker,
  Select,
  Modal,
  Table,
  Divider
} from 'antd';

const Option = Select.Option
const confirm = Modal.confirm

import {history} from '../../../../redux/index/store'
import {purchaseActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';
import EditableCell from '../../../../common/EditableCell'

import ProductChoose from '../../ProductChoose'


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      productListData: [],
      productAddvisible: false,
    }
    this.props.getPurchaseApplicationSingle()
    this.props.getSupplierOptions()
    this.props.getEmployeeOptions()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data, timestamp} = nextProps
    if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_SAVE_SUCCESS) {
      history.push('/purchase/purchaseapplication')
    } else if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_SUPPLIER_OPTIONS_GOT) {
      this.setState({supplierOptions: data})
    } else if (type === ActionTypes.BASEDATA_EMPLOYEE_OPTIONS_GOT) {
      this.setState({employeeOptions: data})
    }
  }

  handleReset = () => {
    this.props.form.resetFields();
    this.setState({productListData: []})
    this.props.form.setFieldsValue({products: []})
  }

  submitFun = (e) => {
    e.preventDefault()
    this.props.form.setFieldsValue({products: this.state.productListData})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.savePurchaseApplication(values)
      }
    });
  }

  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '记录删除不可恢复',
      okType: 'danger',
      maskClosable: true,
      onOk: (() => {
        // DO DELETE PRODUCT
        const {productListData} = this.state
        for (let key in productListData) {
          let item = productListData[key]
          if (id === item.key) {
            productListData.splice(key, 1)
            break
          }
        }
        this.setState({productListData})
        this.props.form.setFieldsValue({products: productListData})
        this.props.form.validateFields(['products'])
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  onOpenProductModal = () => {
    this.setState({productAddvisible: true})
  }
  onProductChoosen = (data) => {
    const {productListData} = this.state
    let aFlag = false
    for (let key in productListData) {
      let item = productListData[key]
      if (data.key === item.key) {
        item.number = Math.round((item.number + 1) * 100) / 100
        item.costPrice = Math.round((item.costPrice + data.costPrice) * 100) / 100
        aFlag = true
        break
      }
    }
    if (!aFlag) {
      productListData.push({
        key: data.key,
        name: data.name,
        code: data.code,
        number: 1,
        costPrice: data.costPrice
      })
    }
    this.setState({productListData})
    this.props.form.setFieldsValue({products: productListData})
  }
  onCancelProductModal = () => {
    this.setState({productAddvisible: false})
  }

  onCellChange = (id, dataIndex) => {
    return (value) => {
      const {productListData} = this.state
      for (let key in productListData) {
        let item = productListData[key]
        if (id === item.key) {
          item.costPrice = Math.round((+value) / item.number * item.costPrice * 100) / 100
          item.number = value
          break
        }
      }
      this.setState({productListData})
      this.props.form.setFieldsValue({products: productListData})
    };
  }


  render() {
    const {loading, supplierOptions, employeeOptions, productListData} = this.state
    const {type} = this.props
    const FormItem = Form.Item
    const {TextArea} = Input;
    const {getFieldDecorator} = this.props.form
    let alertMsg = null
    if (type === ActionTypes.PUCHASE_PURCHASEAPPLICATION_SAVE_FAILURE) {
      alertMsg = <Alert
        message="保存失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    let supplierOptionsArr = supplierOptions && supplierOptions.map(function (value) {
      return <Option key={value.value} value={value.value}>{value.text}</Option>
    })
    let employeeOptionsArr = employeeOptions && employeeOptions.map(function (value) {
      return <Option key={value.value} value={value.value}>{value.text}</Option>
    })

    const columns = [
      {title: '名称', dataIndex: 'name', key: 'name'},
      {title: '编码', dataIndex: 'code', key: 'code'},
      {
        title: '数量', dataIndex: 'number', key: 'number',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'number')}
          />
        ),
      },
      {title: '成本价', dataIndex: 'costPrice', key: 'costPrice'},
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
              <Link to="#" onClick={this.showDeleteConfirm.bind(this, record.key)}>删除</Link>
          </span>
        )
      }
    ];


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
        <FormItem label="申请人" {...formItemLayout}>
          {getFieldDecorator('applyUser', {
            rules: [{
              required: true, message: '必选字段!'
            }]
          })(
            <Select>
              {employeeOptionsArr}
            </Select>
          )}
        </FormItem>
        <FormItem label="申请日期" {...formItemLayout}>
          {getFieldDecorator('date',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <DatePicker placeholder='申请日期'/>
          )}
        </FormItem>
        <FormItem label="供货商" {...formItemLayout}>
          {getFieldDecorator('supplier',
            {
              rules: [{
                required: true, message: '必选字段!'
              }]
            })(
            <Select>
              {supplierOptionsArr}
            </Select>)}
        </FormItem>
        <FormItem label="详细说明" {...formItemLayout}>
          {getFieldDecorator('description')(
            <TextArea placeholder="详细说明"/>
          )}
        </FormItem>
        <FormItem className='products' label="商品列表" {...formItemLayout}>
          {getFieldDecorator('products', {
            rules: [{
              required: true, message: '请选择商品!'
            }]
          })(
            <Input type="hidden"/>
          )}
          <Button onClick={this.onOpenProductModal}>添加商品</Button>
          <Table
            columns={columns}
            dataSource={productListData}
            pagination={false}
          />
        </FormItem>
        <FormItem {...formItemTailLayout}>
          <Col span={12}><Button onClick={this.handleReset}>重置</Button></Col>
          <Col span={12}><Button type="primary" htmlType="submit">保存</Button></Col>
        </FormItem>
      </Form>
      <Modal
        title="添加商品"
        visible={this.state.productAddvisible}
        onCancel={this.onCancelProductModal}
        footer={null}
        width={'80%'}
      >
        <ProductChoose chooseProduct={this.onProductChoosen}/>
      </Modal>
    </Spin>
  }
}


Add
  .propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.any,
  timestamp: PropTypes.any,
  savePurchaseApplication: PropTypes.func,
  getPurchaseApplicationSingle: PropTypes.func,
  getSupplierOptions: PropTypes.func,
  getEmployeeOptions: PropTypes.func,
  form: PropTypes.object.isRequired,
}


const
  mapStateToProps = (state) => {
    return {
      ...state.purchaseApplicationSingle,
      ...state.baseDataSupplierOptions,
      ...state.baseDataEmployeeOptions,
      ...state.baseDataProductChoosen
    }
  }

const
  mapDispatchToProps = {
    ...purchaseActions,
    ...optionActions
  }
const
  AddProxy = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form.create()(Add))
export default AddProxy;
