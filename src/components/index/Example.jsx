/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {name: 'Anonymous'}
    this.props.exampleWelcome('Anonymous')
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  exampleWelcome = () => {
    const {name} = this.state
    const {exampleWelcome} = this.props
    if (!name || !name.trim()) {
      this.textInput.focus()
    } else {
      exampleWelcome(name)
    }
  }


  render() {
    const {example} = this.props
    const {name} = this.state
    return <div className="example">
      {example.welcome && (<h1>{example.welcome}</h1>)}
      {example.dateNow}
      <br/>
      Example Name: <input type="input" name="name" onChange={this.handleChange}
                           value={name} ref={(input) => { this.textInput = input; }}/>
      <button onClick={this.exampleWelcome}>do it</button>
      <button onClick={this.props.exampleRoute}>push to</button>
    </div>
  }

}
Example.propTypes = {
  example: PropTypes.object.isRequired,
  exampleWelcome: PropTypes.func,
  exampleRoute: PropTypes.func
}

export  default Example
