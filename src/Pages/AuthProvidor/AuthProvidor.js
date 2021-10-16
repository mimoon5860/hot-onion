import React, { createContext } from 'react';
import FetchData from '../../Hooks/FetchData/FetchData';

export const AuthContext = createContext();

const AuthProvidor = ({ children }) => {
    const data = FetchData();
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;