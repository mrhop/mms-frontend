/**
 * Created by Donghui Huo on 2018/1/31.
 */
// 接着处理，保存的时候，库位的保存注意
import './Add.scss'

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


import {
  Form,
  Icon,
  Select,
  Input,
  Button,
  TreeSelect,
  Col,
  Alert,
  Divider,
  InputNumber,
  Spin,
  Table,
  Radio,
  Modal
} from 'antd';

const FormItem = Form.Item
const TextArea = Input.TextArea
const RadioGroup = Radio.Group
const Option = Select.Option
const confirm = Modal.confirm
import {history} from '../../../../redux/index/store'
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';
import {positiveNumberValidate} from '../../../../common/FormValidate';
import AddPosition from './AddPosition'

// 继续实现该页面
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      positionListData: [],
      positionAddvisible: false,
      positionId: undefined,
    }
    this.props.getStorePositionList()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_STORE_POSITION_LIST_GOT || type === ActionTypes.BASEDATA_STORE_POSITION_DELETE_SUCCESS) {
      this.setState({positionListData: data})
    } else if (type === ActionTypes.BASEDATA_STORE_SAVE_SUCCESS) {
      history.push('/basedata/store')
    } else if (type === ActionTypes.BASEDATA_STORE_SAVE_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_STORE_POSITION_SAVE_SUCCESS) {
      this.setState({positionAddvisible: false})
      this.props.getStorePositionList()
    }
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  submitFun = (e) => {
    e.preventDefault()
    this.props.form.setFieldsValue({positions: this.state.positionListData})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        this.props.saveStore(values)
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
        this.props.deleteStorePosition({id})
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  onOpenPositionModal = () => {
    this.setState({positionAddvisible: true, positionId: null})
  }
  onCancelPostionModal = () => {
    this.setState({positionAddvisible: false})
  }

  render() {
    const {loading, positionListData, positionId} = this.state
    const {type} = this.props
    const {getFieldDecorator} = this.props.form
    const columns = [
      {title: '名称', dataIndex: 'name', key: 'name'},
      {title: '容积（立方米）', dataIndex: 'volume', key: 'volume'},
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to="#" onClick={() => {
              this.setState({positionId: record.key, positionAddvisible: true})
            }}>修改</Link>
              <Divider type="vertical"/>
              <Link to="#" onClick={this.showDeleteConfirm.bind(this, record.key)}>删除</Link>
              </span>
        )
      }
    ];
    let alertMsg = null
    if (type === ActionTypes.BASEDATA_STORE_SAVE_FAILURE) {
      alertMsg = <Alert
        message="保存失败"
        description="失败原因，后台传回"
        type="error"
        showIcon
      />
    }
    const addPositionModal = <Modal/>
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

        <FormItem label="容积" {...formItemLayout}>
          {getFieldDecorator('volume',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <InputNumber style={{width: '100%'}}
                         formatter={value => `${value} 立方米`.replace(/(?=(\d{3})+(?!\d))\B/g, ',')}
                         parser={value => value.replace(/\s?立方米|(,*)/g, '')}
                         placeholder="容积"/>
          )}
        </FormItem>
        <FormItem label="主库" {...formItemLayout}>
          {getFieldDecorator('isPrimary', {
            rules: [{
              required: true, message: '必选字段!'
            }],
            initialValue: false,
          })(
            <RadioGroup>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem className='positions' label="库位信息" {...formItemLayout}>
          {getFieldDecorator('positions')(
            <Input type="hidden"/>
          )}
          <Button onClick={this.onOpenPositionModal}>添加库位</Button>
          <Table
            columns={columns}
            dataSource={positionListData}
            pagination={false}
          />
        </FormItem>
        <FormItem label="详细说明" {...formItemLayout}>
          {getFieldDecorator('description', {})(
            <TextArea placeholder="详细说明"/>
          )}
        </FormItem>
        <FormItem {...formItemTailLayout}>
          <Col span={12}><Button onClick={this.handleReset}>重置</Button></Col>
          <Col span={12}><Button type="primary" htmlType="submit">保存</Button></Col>
        </FormItem>
      </Form>
      <Modal
        title="新增或修改库位"
        visible={this.state.positionAddvisible}
        onCancel={this.onCancelPostionModal}
        footer={null}
      >
        <AddPosition positionId={positionId}/>
      </Modal>
    </Spin>
  }
}


Add.propTypes = {
  location: PropTypes.object,
  type: PropTypes.string,
  data: PropTypes.any,
  saveStore: PropTypes.func,
  getStoreSingle: PropTypes.func,
  getStorePositionList: PropTypes.func,
  deleteStorePosition: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    ...state.baseDataStorePositionList,
    ...state.baseDataStoreSingle,
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
