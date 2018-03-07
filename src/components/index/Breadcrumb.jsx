import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {history} from '../../redux/index/store'
import PropTypes from 'prop-types'

import {Link} from "react-router-dom";

import {Breadcrumb} from 'antd';

import  {leftMenu} from '../../common/TempData'


const locateItem = function (arr, target) {
  let returnItem = null
  for (let index in arr) {
    let item = arr[index]
    if (item.key === target) {
      return item
    } else if (item.children) {
      returnItem = locateItem(item.children, target)
      if (returnItem) {
        return returnItem
      }
    }
  }
  return returnItem
}

//2.当无权限时 redirect 到 首页，并给出提示，无权限等
//3.当上级目录找不到，无权限时，不显示该父目录
class CustomBreadcrumb extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    const {dataProps} = props
    this.state = this.checkUrl(dataProps)
  }

  componentWillReceiveProps(nextProps) {
    console.log('WillReceiveProps')
    this.setState(this.checkUrl(nextProps.dataProps))
  }

  checkUrl(dataProps) {
    if (dataProps.pathname === '/' || dataProps.pathname === '/404' || (dataProps.state && dataProps.state.errorMsg)) {
      return {
        locations: null,
        currentItem: null
      }
    } else {
      let locations = dataProps.pathname.split('/')
      locations.splice(0, 1)
      let currentItem = locateItem(leftMenu, locations[locations.length - 1])
      if (!currentItem || currentItem.url !== dataProps.pathname) {
        const location = {
          pathname: '/404',
          state: {errorMsg: 'access denied'}
        }
        history.push(location)
        return {
          locations: null,
          currentItem: null
        }
      }
      return {
        locations,
        currentItem
      }
    }
  }

  render() {
    if (this.state && this.state.currentItem) {
      const {locations, currentItem} = this.state
      let items = locations.map(function (val, index) {
        if (index === (locations.length - 1)) {
          return <Breadcrumb.Item key={currentItem.key}>{currentItem.title}</Breadcrumb.Item>
        } else {
          let item = locateItem(leftMenu, val)
          if (item) {
            return <Breadcrumb.Item key={item.key}><Link to={item.url}>{item.title}</Link></Breadcrumb.Item>
          }
        }
      })
      return (
        <Breadcrumb>
          {items}
        </Breadcrumb>
      )
    } else {
      return ''
    }
  }
}


CustomBreadcrumb.propTypes = {
  dataProps: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    dataProps: state.locationChange.data
  }
}
const CustomBreadcrumbProxy = connect(
  mapStateToProps
)(CustomBreadcrumb)

export default CustomBreadcrumbProxy;
