import React from 'react';
import { withRouter } from 'react-router';
import SignUpEmail from '../../components/signupEmail';

const SignUp = ({ history }) => {
    return(
        <div id="SignUp" className="container">
            <SignUpEmail />
        </div>
    )
}
export default withRouter(SignUp);