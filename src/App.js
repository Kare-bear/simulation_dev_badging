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
    .get('/api/test')
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

        <div>
          {this.state.test && <div>{}</div>}
          {routes}
        </div>        
      </div>
    );
  }
}

export default App;
