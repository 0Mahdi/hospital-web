import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
    }
    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;