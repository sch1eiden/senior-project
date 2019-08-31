import React, { Component } from 'react';

class App extends Component {
  state = {
    web_app: []
  };
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
      const web_app = await res.json();
      this.setState({
        web_app
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div align="center">
        {this.state.web_app.map(item => (
          <div key={item.garbage_id}>
            <h1>{item.garbage_id}</h1>
            <span>{item.garbage_name}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
