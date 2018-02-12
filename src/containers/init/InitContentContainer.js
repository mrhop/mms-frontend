/**
 * Created by Donghui Huo on 2018/2/8.
 */
/**
 * Created by Donghui Huo on 2018/2/1.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Steps} from 'antd';
import * as actions from '../../redux/init/actions'
import InitContent1 from '../../components/init/InitContent1'
import InitContent2 from '../../components/init/InitContent2'
import InitContent3 from '../../components/init/InitContent3'


class InitContentContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const {status} = nextProps
    if (status === 'gotoIndex') {
      window.location.href = '/index.html'
    }
  }

  render() {
    const Step = Steps.Step
    const {status} = this.props
    let currentStep = 0
    let initPage = null
    switch (status) {
      case 'init1' || 'dbTestSuccess' || 'dbTestFailure':
        initPage = <InitContent1{...this.props}/>
        currentStep = 0
        break
      case 'init2':
        initPage = <InitContent2{...this.props}/>
        currentStep = 1
        break
      case 'init3':
        initPage = <InitContent3{...this.props}/>
        currentStep = 2
        break
      default:
        initPage = <InitContent1{...this.props}/>
        currentStep = 0
        break
    }
    const StepsLocal = <Steps current={currentStep}>
      <Step title="数据库初始化"/>
      <Step title="填写企业信息"/>
      <Step title="跳转登陆页面"/>
    </Steps>
    return <Fragment>{StepsLocal}{initPage}</Fragment>
  }
}
InitContentContainer.propTypes = {
  status: PropTypes.string.isRequired,
  dataForm: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    status: state.init.status,
    dataForm: state.init.data
  }
}

const mapDispatchToProps = {
  ...actions
}
const InitContentContainerProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitContentContainer)
export default InitContentContainerProxy;
