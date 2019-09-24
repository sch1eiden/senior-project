import React from 'react';
import BinGraph from '../components/bingraph';
import BinChart from '../components/binchart';
const Dashboard = () => {
    return (
        <div className="container-fluid" id="Dashboard">
            <h3 className="display-4" align="center">Dashboard</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            Bin Chart
                        </div>
                        <div className="card-body">
                            <BinChart />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            Statistic
                        </div>
                        <div className="card-body">
                            <BinGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard