/**
 * Created by Donghui Huo on 2018/2/8.
 */
import  React, {Component, Fragment} from 'react'
import {Form, Icon, Input, Button, Row, Col, Alert, message, Spin} from 'antd';
import {ipValidate, portValidate} from  '../../common/FormValidate';
import {formItemLayout, formItemTailLayout} from '../../common/FormLayout';
import {urlSelectAfter, urlSelectBefore} from '../../common/FormVars';

import PropTypes from 'prop-types'

class InitContent3 extends Component {
  clickNext = ()=> {
    this.props.initSubmit3()
  }

  constructor(props) {
    super(props);
    this.state = {
      leftSecond: 5
    };
  }

  componentDidMount() {
    let _this = this
    this.countSecondLeft = setInterval(function () {
      const {leftSecond} = _this.state
      if (leftSecond > 1) {
        _this.setState({leftSecond: leftSecond - 1})
      } else {
        _this.clickNext()
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.countSecondLeft)
    this.countSecondLeft = null
  }

  render() {
    const {leftSecond} = this.state
    let msg = "初始化成功，" + leftSecond + "秒后将自动跳转至控制台首页"
    let desc = <div>
      <Button type="primary" onClick={this.clickNext}>跳转至首页</Button>
    </div>
    let alertMsg = <Alert
      message={msg}
      description={desc}
      type="success"
      showIcon
    />
    return alertMsg

  }
}

InitContent3.propTypes = {
  initSubmit3: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired
}
const WrappedInitForm3 = Form.create()(InitContent3);

export default WrappedInitForm3
