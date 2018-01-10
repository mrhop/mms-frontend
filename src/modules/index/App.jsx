import React, {Component} from 'react';
import './App.scss';
import logo from '../../assets/images/logo.svg';
// import test from '../../assets/images/html-test.jpg';
import { DatePicker } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React12311112222</h2>
          <DatePicker />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
