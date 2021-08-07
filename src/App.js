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
        birds: [],
        cats: [],
        monkeys: []
     
      };
    }
    componentDidMount(){
      //pass the query the value 'dogs' to prevent an empty page onload
      this.getPhoto()
      
    }

  
    getPhoto = (query = 'dogs') => { 
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      axios.get(url)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo, 
          loading: false,
          title: query.toUpperCase()
        });
      })
      .catch( err => {
        console.log('Error fetching and parsing data', err)
      })
    }

    getBirdPhoto = (query = 'birds') => {
      axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
          this.setState({
            birds: res.data.birds.photo,
            loading: false,
            title: query.toUpperCase()
        })
      })
    }
    getBirdPhoto = (query = 'monkeys') => {
      axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
          this.setState({
            birds: res.data.monkeys.photo,
            loading: false,
            title: query.toUpperCase()
        })
      })
    }
    getBirdPhoto = (query = 'cats') => {
      axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
          this.setState({
            birds: res.data.cats.photo,
            loading: false,
            title: query.toUpperCase()
        })
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
                <Route exact path="/search/:query" render={() => <PhotoList data={this.state.searchText} />}  /> 
                <Route path="/birds" render={ () => <PhotoList data={this.state.birds}/>} />
                <Route path="/cats" render={ () => { <PhotoList data={this.state.cats}/>}} />
                <Route path="/monkeys" render={ () => <PhotoList data={this.state.monkeys}/>} />
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
  

