import React from "react";
import { Redirect, Route} from "react-router-dom";
import useAuth from "../auth/useAuth";


export const PublicRouter = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.user ? <Redirect to="/browse"/>:  <Component/>}
    </Route>
  );
};

export default PublicRouter;
