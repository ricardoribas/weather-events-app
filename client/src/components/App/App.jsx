import React, { Component } from 'react';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

export class App extends Component {
  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default App;
