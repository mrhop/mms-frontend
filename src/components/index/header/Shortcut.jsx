/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Select} from 'antd';

import {history} from '../../../redux/index/store'
import  {shortcut} from '../../../common/TempData'

const Option = Select.Option;

class Shortcut extends Component {

  constructor(props) {
    super(props);
    const {dataProps} = this.props
    this.state = {
      selected: dataProps.pathname
    }
  }


  componentWillReceiveProps(nextProps) {
    const {dataProps} = nextProps
    this.setState({
      selected: dataProps.pathname
    })
  }


  handleChange = (value) => {
    history.push(value)
  }

  render() {
    // 用于判断并给出指定值，判断是否已经选定
    let {selected} = this.state
    let flagExist = false
    let options = shortcut.map(function (val) {
      if (selected === val.value) {
        flagExist = true
      }
      return <Option value={val.value} key={val.value}>{val.label}</Option>;
    })
    if (!flagExist) {
      selected = undefined
    }
    return (
      <Select
        className="short-cut-select"
        notFoundContent="没有快捷功能"
        placeholder="快捷功能"
        onChange={this.handleChange}
        value={selected}
      >
        {options}
      </Select>
    );
  }
}
Shortcut.propTypes = {
  dataProps: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    dataProps: state.locationChange.data
  }
}
const ShortcutProxy = connect(
  mapStateToProps
)(Shortcut)

export default ShortcutProxy;

