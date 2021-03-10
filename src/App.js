import React, { Component } from "react";
import "./App.css";

import AutoProvider from "./auth/AutoProvider";
import AppRouter from "./Router/AppRouter";



class App extends Component {
  render() {
    return (
      <AutoProvider>
        <AppRouter/>
      </AutoProvider>
    );
  }
}

export default App;


