//importing dependents 
import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";

import './css/index.css';


//importing components
import Home from "./Components/Home"
import Nav from './Components/Nav'

export default class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Home />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/birds' render={() => <Nav />} />
        </Switch>
      </BrowserRouter>
    )
  }
}
