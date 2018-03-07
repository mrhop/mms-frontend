/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {history} from '../../redux/index/store'
import PropTypes from 'prop-types'

class Page404 extends Component {
  render() {
    const {dataProps} = this.props
    if (dataProps.state && dataProps.state.errorMsg) {
      return <Fragment>{dataProps.state.errorMsg}</Fragment>
    }
    return <Fragment>404 ERROR. Page not found</Fragment>
  }
}
Page404.propTypes = {
  dataProps: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    dataProps: state.locationChange.data
  }
}
const Page404Proxy = connect(
  mapStateToProps
)(Page404)

export default Page404Proxy;
