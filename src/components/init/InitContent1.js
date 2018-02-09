/**
 * Created by Donghui Huo on 2018/2/8.
 */
import  React, {Component, Fragment} from 'react'
import {Button} from 'antd'
import PropTypes from 'prop-types'

class InitContent1 extends Component {

  clickNext = ()=> {
    this.props.initSubmit1()
  }


  render() {
    return <Fragment>
      <div>init1</div>
      <Button type="primary" onClick={this.clickNext}>Primary</Button>
    </Fragment>
  }
}

InitContent1.propTypes = {
  initSubmit1: PropTypes.func.isRequired
}
export default InitContent1
