import React, { useContext, useCallback } from 'react';
import config from '../firebase';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../Auth';
import { Link } from 'react-router-dom';

const LogInEmail = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await config.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, 
        [history]
    );

    const { currentUser } = useContext(AuthContext);
        
    if (currentUser) {
        return <Redirect to="/" />
    }

    return(
        <div id="LogInEmail" className="container">
            <div className="card">
                <div className="card-header">
                    <h1 className="display-4" align="center">Log In</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input name="password" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">Log In</button>
                        <Link to="/signup">
                            <button type="button" className="btn btn-primary mr-2">Sign Up</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(LogInEmail);