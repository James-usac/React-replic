import React from "react";
import { BrowserRouter as Router, Switch, Route,  useParams} from "react-router-dom";
import Home from "../components/views/Home";
import Inicio from "../components/views/Inicio";
import Login from "../components/views/Login";
import Signup from "../components/views/Signup";
import Start from "../components/views/Start";
import PublicRouter from "./PublicRouter";
import RoutePrivate from "./RoutePrivate";

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { nombre } = useParams();
  
    return (
      <div>
        <h3>ID: {nombre}</h3>
      </div>
    );
}

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about/:nombre" component={Child} />
        <Route exact path='/start' component={Start}/>
        <PublicRouter exact path="/login" component={Login} />
        <RoutePrivate path="/browse" component={Inicio} />
        <PublicRouter path="/signup/:correo" component={Signup} />
        <PublicRouter exact path="/signup" component={Signup} />
        <PublicRouter exact path="/" component={Home} />
        <Route path="*">
          <h1>HTTP Error 404 not found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
