/**
 * Created by Donghui Huo on 2018/1/31.
 */
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
  Upload,
  Radio,
  Modal,
  Table
} from 'antd';

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
import {history} from '../../../../redux/index/store'
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {formItemLayout, formItemTailLayout} from '../../../../common/FormLayout';
import {positiveNumberValidate} from '../../../../common/FormValidate';

// 继续实现该页面
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    }
  }

  componentWillReceiveProps(nextProps) {
    const {type, data, positionId} = nextProps

    if (positionId !== this.props.positionId) {
      this.props.getStorePositionSingle({id: positionId})
    }
    if (type === ActionTypes.BASEDATA_STORE_POSITION_SINGLE_GOT) {
      this.setState({data})
    }
  }


  handleReset = () => {
    this.props.form.resetFields();
  }

  submitFun = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.saveStorePosition(values)
      }
    });
  }


  render() {
    const {data} = this.state
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.submitFun}>
        <FormItem{...formItemLayout}>
          {getFieldDecorator('id',
            {
              initialValue: data && data.id
            })(
            <Input type="hidden" name='id'/>
          )}
        </FormItem>
        <FormItem label="名称" {...formItemLayout}>
          {getFieldDecorator('name',
            {
              rules: [{
                required: true, message: '必选字段!'
              }]
            })(
            <Input placeholder="名称"/>
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
        <FormItem {...formItemTailLayout}>
          <Col span={12}><Button onClick={this.handleReset}>重置</Button></Col>
          <Col span={12}><Button type="primary" htmlType="submit">保存</Button></Col>
        </FormItem>
      </Form>)
  }
}


Add.propTypes = {
  positionId: PropTypes.any,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  data: PropTypes.object,
  getStorePositionSingle: PropTypes.func,
  saveStorePosition: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    ...state.baseDataStorePositionSingle
  }
}

const mapDispatchToProps = {
  ...baseDataActions
}

const AddProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({
  mapPropsToFields(props) {
    const {positionId, data, type} = props
    if (positionId && type && type === ActionTypes.BASEDATA_STORE_POSITION_SINGLE_GOT) {
      return {
        id: Form.createFormField({
          value: data.id,
        }),
        name: Form.createFormField({
          value: data.name,
        }),
        volume: Form.createFormField({
          value: data.volume,
        }),
      };
    } else {
      return {
        id: Form.createFormField({
          value: undefined,
        }),
        name: Form.createFormField({
          value: undefined,
        }),
        volume: Form.createFormField({
          value: undefined,
        }),
      };
    }

  }
})(Add))
export default AddProxy;
