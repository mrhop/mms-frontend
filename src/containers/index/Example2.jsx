/**
 * Created by Donghui Huo on 2018/2/2.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
  Redirect,
} from 'react-router-dom'

class Example2 extends Component {
  constructor(props) {
    super(props)
    this.state = {visited: false}
  }

  componentDidMount() {
    console.log('componentDidMount' + this.state.visited)
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps' + this.state.visited)
    this.setState({
      visited: true
    })
  }


  componentDidUpdate() {
    console.log('componentDidUpdate' + this.state.visited)
  }

  render() {
    const {match, location} = this.props
    if (this.state.visited) {
      return <Redirect to={{
        pathname: '/',
        state: { from: location }
      }}/>
    }
    return <div className="example">
      the Id what you click is : {match.params.id},
      visited:{this.state.visited + ''}
    </div>
  }


}
Example2.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export  default Example2
