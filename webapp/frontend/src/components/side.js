import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import config from '../firebase';
import { push as Menu } from 'react-burger-menu';

import 'font-awesome/css/font-awesome.min.css';
import './side.css';

const Side = props => {
    const {currentUser} = useContext(AuthContext);
    const handleSignOut = (e) => {
        e.preventDefault();
        config.auth().signOut();
    }
    return (
        <Menu {...props}>
            <a className="menu-item" href="/">
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                Home
            </a>

            <a className="menu-item" href="/dashboard">
                <i className="fa fa-fw fa-pie-chart" style={{ fontSize: '1.75em' }} />
                Dashboard
            </a>

            <a className="menu-item" href="/contact">
                <i className="fa fa-fw fa-address-book" style={{ fontSize: '1.75em' }} />
                Contact
            </a>

            <a className="menu-item" href="/profile">
                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                Profile
            </a>
            {currentUser ? (
                <a className="menu-item" href="/" onClick={handleSignOut.bind(this)}>
                <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                    Sign Out
                </a>

            ) : (
                <a className="menu-item" href="/login">
                    <i className="fa fa-fw fa-sign-in" style={{ fontSize: '1.75em' }} />
                    Log In
                </a>
            )}
        </Menu>
    );
};
export default Side