import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Header from './pages/Header';
import Notfound from './pages/notfound';
import Sidebar from './components/sidebar';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Sidebar />
            <Header />
            <div id="page-wrap">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/users" component={User} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
