import React from 'react';
import { withRouter } from 'react-router';
import LogInEmail from '../../components/loginEmail';
import LogInOthers from '../../components/loginOthers';

const LogIn = () => {

    return(
        <div id="LogIn" className="container">
            <LogInEmail />
            <LogInOthers />
        </div>
    )
}
export default withRouter(LogIn);