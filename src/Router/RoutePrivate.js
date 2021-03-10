import React from 'react'
import { Redirect, Route } from 'react-router';
import useAuth from '../auth/useAuth';

//const user = null;
//const user = {id: 1, username: "luis50"}

export const RoutePrivate = ({component: Component, ...rest}) => {
    const auth = useAuth();
    return (
        <Route {...rest}>
        {
            auth.user ? <Component/> :<Redirect to="/login"/>
        }
        </Route>
    )
}

export default RoutePrivate;
