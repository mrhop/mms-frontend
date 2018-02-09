/**
 * Created by Donghui Huo on 2018/2/2.
 */
import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

const PEEPS = [
  {id: 0, name: 'Michelle', friends: [1, 2, 3]},
  {id: 1, name: 'Sean', friends: [0, 3]},
  {id: 2, name: 'Kim', friends: [0, 1, 3],},
  {id: 3, name: 'David', friends: [1, 2]}
]

const find = (id) => PEEPS.find(p => p.id == id)

class Person extends React.Component {

  componentDidMount() {
    console.log('Person - componentDidMount')
  }

  componentWillReceiveProps() {
    console.log('Person - componentWillReceiveProps')
  }

  render() {
    const {match} = this.props
    const person = find(match.params.id)
    console.log('matchUrl' + match.url)
    return (
      <div>
        <h3>{person.name}’s Friends</h3>
        <ul>
          {person.friends.map(id => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>
                {find(id).name}
              </Link>
            </li>
          ))}
        </ul>
        <Route path={`${match.url}/:id`} component={Person}/>
      </div>
    )
  }
}
Person.propTypes = {
  match: PropTypes.object
}
export  default Person
