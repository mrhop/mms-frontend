import React, {Component} from 'react';
import IndexContainer from './IndexContainer'

// 需要将header等加进去,同时在构造函数内判断是否登陆
class App extends Component {

  render() {
    return (
        <IndexContainer/>
    );
  }
}
export default App;
