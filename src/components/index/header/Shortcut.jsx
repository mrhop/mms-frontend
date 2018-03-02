/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Form, Select, Icon, Input, Button, Checkbox, Alert, message, Spin} from 'antd';
import {shortcutActions} from '../../../redux/index/actions'
import * as ActionTypes from '../../../redux/index/actions/ActionTypes'
import {history} from '../../../redux/index/store'

const Option = Select.Option;

class Shortcut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.props.shortcut()
  }

  componentWillReceiveProps(nextProps) {
    const {status, dataProps} = nextProps
    if (status === ActionTypes.SHORTCUT_INITED) {
      if (dataProps) {
        let options = dataProps.map(function (val) {
          return <Option value={val.value} key={val.value}>{val.label}</Option>;
        })
        this.setState({options})
      }
    }
  }

  handleChange = (value) => {
    console.log('change:' + value)
  }

  render() {
    // 用于判断并给出指定值，判断是否已经选定
    console.log('location:' + history.location.pathname)
    const {options} = this.state

    return (
      <Select
        className="short-cut-select"
        notFoundContent="没有快捷功能"
        placeholder="快捷功能"
        onChange={this.handleChange}
      >
        {options}
      </Select>
    );
  }
}
Shortcut.propTypes = {
  status: PropTypes.string,
  shortcut: PropTypes.func.isRequired,
  dataProps: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    status: state.shortcut.status,
    dataProps: state.shortcut.data
  }
}

const mapDispatchToProps = {
  ...shortcutActions
}
const ShortcutProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortcut)
export default ShortcutProxy;
