//importing dependents 
import React, { Component } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";

import axios from 'axios';

import './css/index.css';
//component imports
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import apiKey from './config';
import Nav from './Components/Nav'


export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        search: [],
        photos:[],
        searchText:"",  
        loading: true,
        title: '',
     
      };
    }
    componentDidMount(){
      //pass the query the value 'dogs' to prevent an empty page onload
      this.getPhoto('dogs')
      
    }

  
    getPhoto = (query) => { 
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
  
    render() {
      return(
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">The Gallery App</h1>
              {/** Enter Search bar */}
            </div>
            <div className="container">
            <BrowserRouter>
              <SearchForm query={this.state.search} onSearch={this.getPhoto}  />   
              <Nav  /> 
              <Switch>
                <Route exact path="/search/:query" render={() => { /**  todo, do this one last */}}  /> 
                <Route path="/birds" render={ () => <PhotoList />} />
                <Route path="/cats" render={ () => { /**todo, render your PhotoList component here */}} />
                <Route path="/monkeys" render={ () => { /**todo, render your PhotoList component here */}} />
              </Switch>
            </BrowserRouter>
                     
              <div className="photo-container">
                <h1>{this.state.title}</h1>
                {
                  (this.state.loading)
                  ?<h2>loading...</h2>
                  : <PhotoList data={this.state.photos} />
                }
                </div>
            </div>
          </div>
        
      );
    }
  }
  

