import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Header from './components/Header';
import Side from './components/Side';
class App extends Component {
  state = {
    web_app: []
  };
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
      <div className="App" align="center">
        <Header />
        <Side />
        <div className="main">
        <Table striped bordered hover variant="dark">
          <thead className="thead-dark">
            <tr>
              <th style={{ textAlign: 'center' }}>ContainID</th>
              <th style={{ textAlign: 'center' }}>GarbageID</th>
              <th style={{ textAlign: 'center' }}>BinID</th>
              <th style={{ textAlign: 'center' }}>Amount</th>
              <th style={{ textAlign: 'center' }}>Level</th>
              <th style={{ textAlign: 'center' }}>DateTime</th>
            </tr>
          </thead>
          <tbody className="align-items-center">
            {
              this.state.web_app.map(item => (
              <tr key={item.contain_id}>
                <td style={{ textAlign: 'center' }}>{item.contain_id}</td>
                <td style={{ textAlign: 'center' }}>{item.garbage_id}</td>
                <td style={{ textAlign: 'center' }}>{item.bin_id}</td>
                <td style={{ textAlign: 'center' }}>{item.amount}</td>
                <td style={{ textAlign: 'center' }}>{item.level}</td>
                <td style={{ textAlign: 'center' }}>{item.date_time_value}</td>
              </tr>
              ))
            }
          </tbody>
        </Table>
        </div>
      </div>
    );
  }
}

export default App;
