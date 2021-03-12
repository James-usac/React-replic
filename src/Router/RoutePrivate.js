import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null;
//const user = {id: 1, username: "luis50"}

export const RoutePrivate = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {auth.user ? <Component /> : <Redirect to={{ pathname: "/login", state: {from: location} }} />}
    </Route>
  );
};

export default RoutePrivate;
