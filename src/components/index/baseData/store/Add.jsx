/**
 * Created by Donghui Huo on 2018/1/31.
 */
// 接着处理，注意store position form 放在modal里面
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
      listData: [],
    }
    this.props.getStorePositionList()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_STORE_POSITION_LIST_GOT) {
      this.setState({listData: data})
    } else if (type === ActionTypes.BASEDATA_STORE_SAVE_SUCCESS) {
      history.push('/basedata/store')
    } else if (type === ActionTypes.BASEDATA_STORE_SAVE_FAILURE) {
      this.setState({loading: false})
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

  render() {
    const {loading, positionListData} = this.state
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
            <Link onClick={() => {
              this.props.getStorePositionSingle({id: record.key})
            }}>修改</Link>
              <Divider type="vertical"/>
              <Link onClick={this.showDeleteConfirm.bind(this, record.key)}>删除</Link>
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
          {getFieldDecorator('costPrice',
            {
              rules: [{
                required: true, message: '必选字段!'
              }],
            })(
            <InputNumber style={{width: '100%'}}
                         formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))立方米/g, ',')}
                         parser={value => value.replace(/￥\s?|(,*)/g, '')}
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
          <Button>添加库位</Button>
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
      <AddPosition/>
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
  getStorePositionSingle: PropTypes.func,
  deleteStorePosition: PropTypes.func,
  form: PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
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
