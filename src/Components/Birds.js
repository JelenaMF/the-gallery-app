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