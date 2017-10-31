import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Box from './components/Draggable/Draggable'




const arraySongs= ["Don't worry be happy ",'Californication','La-la-la-la','Wall',"It's my life",'Under my thumb']
class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Box songs={arraySongs} />
      </div>
    );
  }


}

export default App;
