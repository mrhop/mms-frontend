import './EditableCell.scss'

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

import {Table, InputNumber, Icon, Button, Popconfirm} from 'antd';
import {history} from "../redux/index/store";
import * as ActionTypes from "../redux/index/actions/ActionTypes";

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }

  componentWillReceiveProps(nextProps) {
    const {value} = nextProps
    this.setState({value})

  }

  handleChange = (value) => {
    this.setState({value});
  }
  check = () => {
    let {value} = this.state
    value = Math.round((+value) * 100) / 100
    if (!value || value <= 0.01) {
      value = 1
    }
    this.setState({value, editable: false});
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  edit = () => {
    this.setState({editable: true});
  }

  render() {
    const {value, editable} = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <InputNumber
                value={value}
                min={0.01}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                style={{lineHeight: '32px'}}
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                style={{lineHeight: '22px'}}
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

EditableCell.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default EditableCell


