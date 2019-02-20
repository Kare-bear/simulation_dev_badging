import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import routes from './routes';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null
    };
  }
  componentDidMount() {
    axios
    .get('/api/me')
    .then(response => {
      console.log(response); 
      this.setState({test: response.data});
    })
    .catch(console.log);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          {routes}     
      </div>
    );
  }
}

export default App;
//left off on youtube review chapter 14