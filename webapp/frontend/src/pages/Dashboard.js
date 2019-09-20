import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Statistic from '../components/Statistic';
class Dashboard extends Component {
    render(){
        return (
            <div className="container-fluid" id="Dashboard">
                <h3 align="center">Dashboard</h3>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                Percentage
                            </div>
                            <div className="card-body">
                                Bin visual
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                Statistic
                            </div>
                            <div className="card-body">
                                <Statistic />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Location
                            </div>
                            <div className="card-body">
                                Map
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard