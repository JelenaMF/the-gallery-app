import React, { Component} from "react";
import axios from 'axios';

import apiKey from '../config';
import PhotoList from './PhotoList'

export default class Birds extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          photos:[],
          loading: true,
          title: '',
        };
  
      }

      componentDidMount(){
        this.getPhoto('birds')
      }
      
      /** 
     * `getPhoto` requests an api and sets the state properties
     * @param {string} query - a url query to set to state
     * @param {Array} photos - an array of photo url from API 
     * @param {bool} loading - removes loading text when fetching is done. 
     * @param {string} title - sets title of the searched query.  
     * */

    getPhoto = (query) => { 
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

          <PhotoList title={this.state.title} data={this.state.photos} />
      )
  }
}