import React, {Component} from 'react';
import ExampleContainer from './Example'
import Example2Container from './Example2'
import OldSchoolMenuLink from './OldSchoolMenuLink'
import PromptForm from './PromptForm'
import Person from './Person'
import AnimationExample from './AnimationExample'
import RouteConfigExample from './RouteConfigExample'

import AmbiguousExample  from '../../components/index/AmbiguousExample'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Example 1</Link></li>
            <li><Link to="/example2">Example 2</Link></li>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
            <OldSchoolMenuLink to="/promptForm" label="About"/>
            <li><Link to="/person/1">Person</Link></li>
            <li><Link to="/person/2">Person2</Link></li>
            <li><Link to="/color">animationExample</Link></li>
            <li><Link to="/will-not-match">Will Not Match</Link></li>
            <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
          </ul>
          <br/>
          <Switch>
            <Route exact path="/" component={ExampleContainer}/>
            <Route path="/example2" component={Example2Container}/>
            <Route path="/promptForm" component={PromptForm}/>
            <Route exact path="/person/:id" component={Person}/>
            <Route path="/color" component={AnimationExample}/>
          </Switch>
          <AmbiguousExample/>
          <RouteConfigExample/>
        </div>
      </Router>
    );
  }
}
export default App;
