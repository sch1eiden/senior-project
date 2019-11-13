import React, {Suspense} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import './components/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Notfound from './pages/notfound';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Suspense fallback={null}>
                <div id="page-wrap">
                    <div id="header">
                        <Header />
                    </div>
                    <div id="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Suspense>
        </Router>
  );
};

export default App;
