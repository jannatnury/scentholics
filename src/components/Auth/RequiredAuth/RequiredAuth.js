import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const RequiredAuth = ({children}) => {
    const [user, loading] =useAuthState(auth);
    const location = useLocation();

// if loading

    if (loading) {
        return (
            <p className='text-center fs-1'>
                Loading..
            </p>
        )
    }

// if user found

    if (user) {
        return children;
    } else {
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }
};

export default RequiredAuth;