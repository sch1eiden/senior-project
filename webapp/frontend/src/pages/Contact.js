import React, {useContext} from 'react';
import {AuthContext} from '../Auth';

const Contact = (props) => {
    const {currentUser} = useContext(AuthContext);
    const handleOnLogIn = () => {
        props.history.push('/login');
    }
    const handleOnSignUp = () => {
        props.history.push('/signup');
    }
    if(currentUser) {
        return (
            <div id="Contact" className="container-fluid">
                <h3 className="display-4">Contact</h3>
            </div>
        );
    } else {
        return (
            <div className="container-fluid" id="Contact" align="center">
                <h3 className="display-4">Contact</h3>
                <p align="center">You didn't sign in yet</p>
                <button className="btn btn-primary" onClick={handleOnLogIn}>Sign In</button>
                <p align="center">Didn't have account yet?</p>
                <button className="btn btn-secondary" onClick={handleOnSignUp}>Sign Up</button>
            </div>
        );
    }

}
export default Contact