//importing dependents 
import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";

import './css/index.css';


//importing components
import Home from "./Components/Home"
import Photo from "./Components/Photo";

export default class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/birds'  />
          <Route path='/monkeys'  />
          <Route path='/cats'  />
        </Switch>
      </BrowserRouter>
    )
  }
}
