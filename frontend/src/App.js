import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import MyComponents from './components/Greet'
// import { Greet } from './components/Greet'
import Welcome from './components/Welcome';


// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Greet />
//       {/* <MyComponents /> */}
//       <Welcome />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    )
  }
}

export default App;
