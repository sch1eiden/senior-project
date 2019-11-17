import React from 'react';
import DoughnutChart from './components/DoughnutChart';

const App = () => {
  
  return (
    <div id="App" className="container-fluid">
      <header align="center">
        <img src={require('./img/logo.png')} alt="responsive" width="15%" align="center" />
      </header>
      <h1 className="display-4" align="center">Ranking</h1>
      <DoughnutChart />
    </div>
  );
}

export default App;
