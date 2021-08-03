import React from 'react';
import { Component } from 'react';
import './css/index.css';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
 
} from 'react-router-dom';

//component imports
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import apiKey from './config';
import Nav from './Components/Nav'


export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      photos: [],
      loading: true
    };
  }
  componentDidMount(){
    this.getPhoto()
  }

  //pass the query the value 'dogs' to prevent an empty page onload
  getPhoto = (query = 'dogs') => { 
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    axios.get(url)
    .then(res => {
      this.setState({
        photos: res.data.photos.photo, 
        loading: false
      });
    
    })
    .catch( err => {
      console.log('Error fetching and parsing data', err)
    })
  }

  render() {
    
    return(
      <BrowserRouter>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">The Gallery App</h1>
            {/** Enter Search bar */}
          </div>
          <div className="container">
          <SearchForm onSearch={this.getPhoto}  />          
            <Nav  />
            <Switch>
              <Redirect exact from="/" to="/dogs" /> 
              <Route exact path={"/:query"}>
              {
                (this.state.loading)
                ?<p>loading...</p>
                : <PhotoList data={this.state.photos} />
              }
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      
    );
  }
}