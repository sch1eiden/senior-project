import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Header from './pages/Header';
import Notfound from './pages/notfound';
import LogIn from './pages/Auth/LogIn';
import SignUp from './pages/Auth/SignUp';
import { AuthProvider } from './Auth';
import Side from './components/side';

const App = () => {
  return (
      <AuthProvider>
            <Router>
                <Side pageWrapId={"page-wrap"} />
                <div id="page-wrap">
                    <Header />
                    <div id="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
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
};

export default App;
