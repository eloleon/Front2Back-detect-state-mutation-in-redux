import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Routes from './routes';

import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{textAlign: 'center'}}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            {<Navigation />}
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            {this.props.children}
          </div>
          {<Routes />}
        </div>
      </Router>
    );
  }
}

export default App;
