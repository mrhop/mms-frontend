import React, {Component, Fragment} from 'react';
import IndexHeader from '../../components/index/header/Header'
import IndexContainer from './IndexContainer'
import CommonFooter from '../../components/common/Footer'

// 需要将header等加进去,同时在构造函数内判断是否登陆
class App extends Component {

  render() {
    return (
      <Fragment>
        <IndexHeader/>
        <main>
          <IndexContainer/>
        </main>
        <CommonFooter/>
      </Fragment>
    );
  }
}
export default App;
