import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isUserLoggedIn } = useUser();

    return isUserLoggedIn ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
