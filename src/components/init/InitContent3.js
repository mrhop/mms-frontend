/**
 * Created by Donghui Huo on 2018/2/8.
 */
import  React, {Component, Fragment} from 'react'
import {Button} from 'antd'
import PropTypes from 'prop-types'

class InitContent3 extends Component {

  clickNext = ()=> {
    this.props.initSubmit3()
  }


  render() {
    return <Fragment>
      <div>init3</div>
      <Button type="primary" onClick={this.clickNext}>Primary</Button>
    </Fragment>
  }
}

InitContent3.propTypes = {
  initSubmit3: PropTypes.func.isRequired
}
export default InitContent3
