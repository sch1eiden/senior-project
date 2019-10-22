import React, { useCallback } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { AuthContext } from '../Auth';
import { withRouter, Redirect } from 'react-router';

const LogInOthers = () => {
    const { currentUser } = useCallback(AuthContext)
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    if (currentUser) {
        return <Redirect to="/" />
    }


    return (
        <div className="container">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}
export default withRouter(LogInOthers);