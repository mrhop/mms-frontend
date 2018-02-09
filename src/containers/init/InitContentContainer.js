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

    const StepsLocal = <Steps current={0}>
      <Step title="In Progress" description="This is a description."/>
      <Step title="Waiting" description="This is a description."/>
      <Step title="Waiting" description="This is a description."/>
    </Steps>
    switch (status) {
      case 'init1':
        return <Fragment><StepsLocal/><InitContent1{...this.props}/></Fragment>
      case 'init2':
        return <InitContent2 {...this.props}/>
      case 'init3':
        return <InitContent3 {...this.props}/>
      default:
        return <InitContent1 {...this.props}/>
    }
  }
}
InitContentContainer.propTypes = {
  status: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    status: state.init.status,
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
