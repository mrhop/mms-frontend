import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from "react-router-dom";

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
import  {leftMenu as leftMenuData} from '../../common/TempData'


class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    const {dataProps} = this.props
    let currentKey = null
    if (dataProps.pathname === '/') {
      currentKey = 'index'
    } else {
      let locations = dataProps.pathname.split('/')
      locations.splice(0, 1)
      currentKey = locations[locations.length - 1]
    }
    let menuItems = this.iterateItems(leftMenuData, null, currentKey, dataProps.pathname)
    this.state = {
      collapsed: window.innerWidth < 768 ? true : false,
      menuItems,
      currentKeys: [currentKey],
      openKeys: this.openKeys
    }
    this.resizeFun = this.toggleCollapsed.bind(this)
    window.addEventListener('resize', this.resizeFun)
  }

  componentWillReceiveProps(nextProps) {
    const {dataProps} = nextProps
    let currentKey = null
    if (dataProps.pathname === '/') {
      currentKey = 'index'
    } else {
      let locations = dataProps.pathname.split('/')
      locations.splice(0, 1)
      currentKey = locations[locations.length - 1]
    }
    if (this.state.currentKeys == null || this.state.currentKeys.indexOf(currentKey) < 0) {
      let menuItems = this.iterateItems(leftMenuData, null, currentKey, dataProps.pathname)
      this.setState({currentKeys: [currentKey]})
      this.setState({openKeys: this.openKeys})
      this.setState({menuItems})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFun)
  }


  iterateItems = function (arr, parent, currentKey, pathname) {
    return arr.map(function (val) {
      if (val.key === currentKey && val.url === pathname) {
        if (parent) {
          this.openKeys = [parent.key]
        }
      }
      if (val.children) {
        let subItems = this.iterateItems(val.children, val, currentKey, pathname)
        let title = null
        if (val.url) {
          title = <Link to={val.url}
                        onClick={(e)=>{this.handleSubItemClick.call(this,val.key,e.currentTarget)}}><span>{val.icon &&
          <Icon type={val.icon}/>}<span>
    {val.title}</span></span></Link>
        } else {
          title = <span>{val.icon && <Icon type={val.icon}/>}<span>{val.title}</span></span>
        }
        if (val.key === currentKey && val.url === pathname) {
          return <SubMenu key={val.key}  className="sub-item-selected"
                          title={title}>
            {subItems}
          </SubMenu>
        }else{
          return <SubMenu key={val.key}
                          title={title}>
            {subItems}
          </SubMenu>
        }
      } else {
        return <Menu.Item key={val.key}>
          <Link to={val.url}>{val.icon && <Icon type={val.icon}/>}
            <span>{val.title}</span></Link>
        </Menu.Item>
      }
    }.bind(this))
  }


  handleClick = (e) => {
    this.setState({
      currentKeys: [e.key],
    });
    Array.prototype.forEach.call(document.getElementsByClassName('ant-menu-submenu'), function (e) {
      e.classList.remove('sub-item-selected')
    });
  }

  handleSubItemClick = (key, target) => {
    this.setState({
      currentKeys: [key]
    });
    target.parentElement.parentElement.classList.add('sub-item-selected')
  }

  onOpenChange = (openKeys) => {
    this.setState({openKeys});
  }

  toggleCollapsed = () => {
    if (window.innerWidth < 768 && !this.state.collapsed || window.innerWidth >= 768 && this.state.collapsed) {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
  }

  render() {
    const {currentKeys, collapsed, menuItems, openKeys} = this.state
    return (
      <div className="left-menu">
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          selectedKeys={currentKeys}
          openKeys={openKeys}
          onClick={this.handleClick}
          onOpenChange={this.onOpenChange}
        >
          {menuItems}
        </Menu></div>
    );
  }
}

LeftMenu.propTypes = {
  dataProps: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    dataProps: state.locationChange.data
  }
}
const LeftMenuProxy = connect(
  mapStateToProps
)(LeftMenu)

export default LeftMenuProxy;

