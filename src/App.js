import React from "react";
import "./App.css";
import Home from "../../guia-dos-abracos/src/pages/Home";
import Participe from "../src/pages/Participe";
import Sobre from "../src/pages/Sobre";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/sobre" render={(props) => <Sobre {...props} />} />
        <Route path="/participe" render={(props) => <Participe {...props} />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
