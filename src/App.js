//dependent imports
import React, { Component } from 'react';
import './css/index.css';
import axios from 'axios';
import {
  BrowserRouter,
  Router,
  Switch,
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
    this.performSearch()
  }

  //pass the query the value 'dogs' to prevent an empty page onload
  performSearch = (query = 'dogs') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=25&format=json&nojsoncallback=1`)
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
    console.log(this.state.photos) 
    return(
      <div className="main-header">
        <div className="inner">
          <h2>The Gallery App</h2>
          {/** Enter Search bar */}
          <SearchForm />          
        </div>
        <div className="main-content">
          <Nav />

        {
          (this.state.loading)
          ?<p>loading...</p>
          : <PhotoList data={this.state.photos}/>
        }
      </div>
      </div>
     
      
    );
  }
}

