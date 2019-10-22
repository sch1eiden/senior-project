import React, { useEffect, useState } from 'react';
import config from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        config.auth().onAuthStateChanged(setCurrentUser);
    }, [currentUser]);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
        {children}
        </AuthContext.Provider>
    );
};