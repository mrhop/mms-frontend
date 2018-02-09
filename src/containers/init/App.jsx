import React, {Component, Fragment} from 'react';

import InitFooter from '../../components/common/Footer'
import InitContentContainer from './InitContentContainer'


// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="container">
            <div className="logo-top"/>
          </div>
        </header>
        <main>
          <div className="container">

            <InitContentContainer/>
          </div>
        </main>
        <InitFooter/>
      </Fragment>
    );
  }
}
export default App;
