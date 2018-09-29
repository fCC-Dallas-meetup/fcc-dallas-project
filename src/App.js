import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">freeCodeCamp Dallas</h1>
        </header>
        <p className="App-intro">
          Welcome to the <a href="https://www.freecodecamp.org/">freeCodeCamp</a> Dallas project page.
        </p>
        <img src="img/IMG_0199.JPG" alt="group pic"></img>
      </div>
    );
  }
}

export default App;
