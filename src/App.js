//importing dependents 
import React, { Component} from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";


import axios from 'axios';

import './css/index.css';
//component imports
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import Birds from './Components/Birds'
import apiKey from './config';
import Nav from './Components/Nav'
import Frogs from "./Components/Frogs";
import Cats from "./Components/Cats";


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
    /**
     * mounts the api from the `getPhoto`
     * @param dogs - initial query 
     */

    componentDidMount(){
      this.getPhoto('dogs ')
      
    }

    /** 
     * `getPhoto` requests an api and sets the state properties
     * @param {string} query - a url query to set to state
     * @param {Array} photos - an array of photo url from API 
     * @param {bool} loading - removes loading text when fetching is done. 
     * @param {string} title - sets title of the searched query.  
     * */

    getPhoto = (query = this.search) => { 
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      axios.get(url)
      .then(res => {
        const data = res.data.photos.photo;
        const picArray = data.map((photoData) => {
        const id= photoData.id;
        const server= photoData.server;
        const secret = photoData.secret;
          
        return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
        });
        this.setState({
          photos: picArray, 
          loading: false,
          title: query.toUpperCase()
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
              <SearchForm onSearch={this.getPhoto}  />   
              <Nav  /> 
              <Switch>
                <Route exact path="/search/:query" render={() => <PhotoList data={this.state.searchText} />}  /> 
                <Route path="/birds"> <Birds /> </Route>
                <Route path="/frogs"> <Frogs /> </Route>
                <Route path="/cats"> <Cats /> </Route>
  
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
  

