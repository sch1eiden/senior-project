import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route 
            {...rest}
            render={props =>
                currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={
                        {
                            pathname: '/login',
                            state: { from: props.location }
                        }
                    } />
                )
            }
        />
    );
};

export default PrivateRoute