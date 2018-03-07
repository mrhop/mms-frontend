/**
 * Created by Donghui Huo on 2018/2/27.
 */
import React, {Component, Fragment} from 'react';
import {history} from '../../../redux/index/store'

import {Select} from 'antd';
const Option = Select.Option;

import  {shortcut} from '../../../common/TempData'

class Shortcut extends Component {

  handleChange = (value) => {
    console.log('change:' + value)
  }

  render() {
    // 用于判断并给出指定值，判断是否已经选定
    console.log('location:' + history.location.pathname)
    let options = shortcut.map(function (val) {
      return <Option value={val.value} key={val.value}>{val.label}</Option>;
    })
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

export default Shortcut;
