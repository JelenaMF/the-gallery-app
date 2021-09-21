//importing dependents 
import React, { Component} from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";
import './css/index.css';
//importing components
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';

import Nav from './Components/Nav'
import NotFound from './Components/NotFound'


export default class App extends Component {
    
    render() {

      return(
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">The Gallery App</h1>
              {/** Enter Search bar */}
            </div>
            <div className="container">
            <BrowserRouter> 
            <SearchForm onChange={this.props.searchText} />   
             <Nav /> 
                {
                  <Switch>
                    <Route exact path="/:query"  />
                    <Route path="/birds"component={PhotoList} />  
                    <Route path="/frogs" component={PhotoList} />
                    <Route path="/cats" component={PhotoList} />
                    {/* add a conditional statement here or in the SearchFrom file or in the PhotoList 
                      that will create a 'notfound route that displays the NotFound component page. 
                    */}
                    {/* <Route path="/notfound" component={ NotFound } /> */}
                    <Route exact path="/" component={ PhotoList } />
                  </Switch>
                }
              
            </BrowserRouter>     
            </div>
          </div>
        
      );
    }
  }
  

