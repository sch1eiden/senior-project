import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
class App extends Component {
  render() {
    return (
      <div className="App" align="center">
        <Header />
        <Sidebar />
        <div className="main">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
