import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Header from './pages/Header';
import Notfound from './pages/notfound';
import Sidebar from './components/Sidebar';
import LogIn from './pages/Auth/LogIn';
import SignUp from './pages/Auth/SignUp';
import { AuthProvider } from './Auth';
import * as serviceWorker from './serviceWorker';

const routing = (
    <AuthProvider>
        <Router>
            <div id="page-wrap">
                <Sidebar />
                <Header />
                <div id="main">
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/login" component={LogIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/profile" component={User} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route component={Notfound} />
                    </Switch>
                </div>
            </div>
        </Router>
    </AuthProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
