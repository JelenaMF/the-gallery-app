import React from 'react';
import { Component } from 'react';
import axios from 'axios';


//component imports
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import apiKey from '../config';
import Nav from './Nav'


export default class Home extends Component {
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
  
    render() {
      return(
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">The Gallery App</h1>
              {/** Enter Search bar */}
            </div>
            <div className="container">
            <SearchForm query={this.state.search} onSearch={this.getPhoto}  />   
                     
              <Nav  /> 
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
  