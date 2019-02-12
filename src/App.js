import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import routes from './routes';
import AuthView from './Components/AuthView/AuthView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
          {routes}
        </div>
        
      </div>
    );
  }
}

export default App;
