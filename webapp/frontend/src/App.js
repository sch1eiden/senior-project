import React, { Component } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Statistic from './components/Statistic';
class App extends Component {
  render() {
    return (
      <div className="App" align="center">
        <Header />
        <SideNav />
        <div className="main">
          <Statistic />
        </div>
      </div>
    );
  }
}

export default App;
