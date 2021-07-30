import axios from 'axios';
import apiKey from './config';
const instance = axios.create({
    baseURL: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=animals&per_page=24&format=json&nojsoncallback=1`
});
export default instance;