/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

class Page404 extends Component {


  render() {
    const {location} = this.props
    if (location.state && location.state.errorMsg) {
      return <Fragment>{location.state.errorMsg}</Fragment>
    }
    return <Fragment>404 ERROR. Page not found</Fragment>
  }
}
Page404.propTypes = {
  location: PropTypes.object
}


export default Page404;
