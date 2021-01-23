import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './Css/App.css';


class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="main-panel"></div>
      </div>
    );
  }
}

export default App;
