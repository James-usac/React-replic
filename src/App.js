import React from "react";
import "./App.css";
import { Component } from "react";
import Headers from "./components/headers";
import Footer from "./components/footer";
import Fondo from "./components/Fondo";
import { BrowserRouter as Router, Switch, Route,  useParams} from "react-router-dom";

import Sigup from "./components/views/Signup";
import Home from "./components/views/Home";
import Login from "./components/views/Login";



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about/:nombre" >
            <Child />
          </Route>
          <Route exact path="/login" component={Login}/>
          <Route path="/browse" >
            <div className="App dark">
                <Headers></Headers>
                <Fondo></Fondo>
                <Footer></Footer>
              </div>
          </Route>
          <Route path="/signup/:correo" >
          <Sigup/>
          </Route>
          <Route exact path="/signup" >
            <Sigup></Sigup>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <h1>HTTP Error 404 not found</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;


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