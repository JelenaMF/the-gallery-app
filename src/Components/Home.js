import React from 'react';
import { Component } from 'react';
import axios from 'axios';


//component imports
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import apiKey from './config/config';
import Nav from './Nav'


export default class Home extends Component {
    constructor() {
      super();
      this.state = { 
        photos: [],
        loading: true,
        title: ''
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
        const data = res.data.photos.photo;
        const photoInfo = data.map((photoData) => {
          const id= photoData.id;
          const server= photoData.server;
          const secret = photoData.secret;
          return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
  
        })
        this.setState({
          photos: photoInfo, 
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
            <SearchForm onSearch={this.getPhoto}  />   
                     
              <Nav />
              <div className="photo-container">
                <h1>{this.state.title}</h1>
                {
                  (this.state.loading)
                  ?<p>loading...</p>
                  : <PhotoList data={this.state.photos} />
                }
                </div>
            </div>
          </div>
        
      );
    }
  }
  