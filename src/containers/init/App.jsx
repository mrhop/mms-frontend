import React, {Component, Fragment} from 'react';

import CommonHeader from '../../components/common/Header'
import CommonFooter from '../../components/common/Footer'
import InitContentContainer from './InitContentContainer'


class App extends Component {
  render() {
    return (
      <Fragment>
        <CommonHeader/>
        <main>
          <div className="container">
            <InitContentContainer/>
          </div>
        </main>
        <CommonFooter/>
      </Fragment>
    );
  }
}
export default App;
