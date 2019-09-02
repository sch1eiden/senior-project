import React, { Component } from 'react';
class App extends Component {
  state = {
    web_app: []
  };
  // async componentDidMount() {
  //   try {
  //     const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
  //     const web_app = await res.json();
  //     this.setState({
  //       web_app
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/contain/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ web_app: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div align="center">
        {this.state.web_app.map(item => (
          <div key={item.contain_id}>
            <h1>ContainID {item.contain_id}</h1>
            <h1>GarbageID {item.garbage_id}</h1>
            <h2>BinID {item.bin_id}</h2>
            <h3>Amount {item.amount}</h3>
            <p>Level {item.level}</p>
            <span>DateTimeValue {item.date_time_value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
