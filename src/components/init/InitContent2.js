/**
 * Created by Donghui Huo on 2018/2/8.
 */
import  React, {Component, Fragment} from 'react'
import {Button} from 'antd'
import PropTypes from 'prop-types'

class InitContent2 extends Component {

  clickNext = ()=> {
    this.props.initSubmit2()
  }


  render() {
    return <Fragment>
      <div>init2</div>
      <Button type="primary" onClick={this.clickNext}>Primary</Button>
    </Fragment>
  }
}

InitContent2.propTypes = {
  initSubmit2: PropTypes.func.isRequired
}
export default InitContent2
