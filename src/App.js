//importing dependents 
import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';

import './css/index.css';
import apiKey from './config';


//importing components
import Home from "./Components/Home"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: [],
      searchText:"",
      photos: [],  
      loading: true,
      title: ''
    };
  }
  componentDidMount(){
    //pass the query the value 'dogs' to prevent an empty page onload
    this.getPhoto('dogs')
    
  }
  

  getPhoto = (query = this.search) => { 
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    axios.get(url)
    .then(res => {
      this.setState({
        photos: res.data.photos.photo, 
        loading: false,
        title: query.toUpperCase(),
        /**queries created for the links */
      });
    })
      
      
    .catch( err => {
      console.log('Error fetching and parsing data', err)
    })
  }

  render(){
    return(
      <BrowserRouter>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={'/search/:query'}  /> 
          <Route path="/birds" render={ () => {this.getPhoto('birds')}} />
          <Route path="/cats" render={ () => {this.getPhoto('cats')} } />
          <Route path="/monkeys" render={ () => {this.getPhoto('monkeys')} } />
        </Switch>
      </BrowserRouter>
    )
  }
}
