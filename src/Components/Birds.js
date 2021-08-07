import axios from 'axios';

import apiKey from '../config'

const getBirdsPhoto = (query = 'birds') => { 
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    axios.get(url)
    .then(res => {
      this.setState({
        photos: res.data.photos.photo, 
        loading: false,
        title: query.toUpperCase(),
      });
    }) 
     .catch( err => {
        console.log('Error fetching and parsing data', err)
      })
    }
    export default getBirdsPhoto;