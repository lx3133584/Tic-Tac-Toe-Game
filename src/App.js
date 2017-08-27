import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';

class App extends Component {
  constructor () {
    super()
    this.state = {
      show: false,
      start: 'Start'
    }
    this.gameStart = this.gameStart.bind(this)
  }
  gameStart () {
    this.setState((pre) => ({
     show: !pre.show,
     start: pre.show ? 'Start' : 'Close'
    }))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My first react app</h2>
        </div>
        <p className="App-intro">
          A Tic-Tac-Toe Game, To <span onClick={this.gameStart}>{this.state.start}</span>
        </p>
        {this.state.show &&
          <Game/>
        }
      </div>
    );
  }
}

export default App;
