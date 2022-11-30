import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Context/AuthContext';
import Loader from '../SharedComponent/Loader/Loader';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(Context);

    if(loading){
        return <Loader></Loader>
    }

    if(user&&user.uid){
        return children
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivetRoute;