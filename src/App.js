import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectedGameBoard from './containers/gameboard'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tic Tac Toe with Redux</h1>
        </header>
          <ConnectedGameBoard />
      </div>
    );
  }
}

export default App;
