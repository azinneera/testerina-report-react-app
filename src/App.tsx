import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Report } from './Report';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { /*<img src={logo} className="App-logo" alt="logo" />*/ }
        Ballerina testreport
      </header>
      <Report/>
    </div>
  );
}

export default App;
