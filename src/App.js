import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Project from './Project';
import Board from './Board';
import './Css/App.css';


class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="main-panel">
          <Project></Project>
          <Board></Board>
        </div>
      </div>
    );
  }
}

export default App;
