//importing dependents 
import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";

import './css/index.css';


//importing components
import Home from "./Components/Home"

export default class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={'/search/:query'}  /> 
          <Route path="birds" render={ () => {this.getPhoto('birds')}} />
          <Route path="cats" render={ () => {this.getPhoto('cats')} } />
          <Route path="monkeys" render={ () => {this.getPhoto('monkeys')} } />
        </Switch>
      </BrowserRouter>
    )
  }
}
