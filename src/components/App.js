import React, { Component } from 'react';
import '../css/App.css';

import FetchPlayers from '../utils/api';

// var PlayerReturn = PlayerAxios.fetchWordPress();
// console.log(PlayerReturn);

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchPlayers />
      </div>
    );
  }
}

export default App;