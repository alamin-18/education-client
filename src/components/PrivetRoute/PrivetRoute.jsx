import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const PrivetRoute = ({ children }) => {
    const { user,lodding } = useContext(AuthContext)
    const location = useLocation()
    if(lodding){
        return <progress className="progress w-full"></progress>
    }
    if (!user) {
        return <Navigate to='/logIn' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivetRoute;