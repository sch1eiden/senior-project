import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import config from '../firebase';

const SignUpEmail = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await config.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push('/profile');
        } catch (error) {
            alert(error);
        }
    }, [history])
    return(
        <div id="SignUp" className="container">
            <div className="card">
                <div className="card-header">
                    <h1 className="display-4" align="center">Sign Up</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                        <div className="form-group">
                        <label for="email">Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                        <label for="password">Password</label>
                            <input name="password" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignUpEmail);