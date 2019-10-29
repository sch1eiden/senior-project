import React, {useContext} from 'react';
import {AuthContext} from '../Auth';
import BinBar from '../components/binBar';
import BinGraph from '../components/binGraph';

const Dashboard = (props) => {
    const {currentUser} = useContext(AuthContext);
    const handleOnLogIn = () => {
        props.history.push('/login');
    }
    const handleOnSignUp = () => {
        props.history.push('/signup');
    }


    if (currentUser) {
        return (
            <div className="container-fluid" id="Dashboard">
                <h3 className="display-4" align="center">Dashboard</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Current Level Bar
                            </div>
                            <div className="card-body">
                                <BinBar />
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
    } else {
        return (
            <div className="container-fluid" id="Dashboard" align="center">
                <h3 className="display-4">Dashboard</h3>
                <p align="center">This is private, you have to sign in first</p>
                <button className="btn btn-primary" onClick={handleOnLogIn}>Sign In</button>
                <p align="center">Didn't have account yet?</p>
                <button className="btn btn-secondary" onClick={handleOnSignUp}>Sign Up</button>
            </div>
        );
    }
};
export default Dashboard