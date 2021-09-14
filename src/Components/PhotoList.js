import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import axios from 'axios';
import  {match, withRouter} from 'react-router'
import apiKey from '../config';
export default class PhotoList extends Component {
    constructor(props) {
        super(props);
        /** 
          * set initial state of photos to an empty array 
          * set the initial state of searchText to an empty string
          * Set the initial state of loading to true
          * set the the initial state of title to empty string.
         * 
         */
        
        this.state = { 
          photos:[],
          searchText:'',  
          loading: true,
          title: ''
        };
      }

      componentDidMount(){
          const searchText = this.props.location.pathname.replace('/', '');
          if(searchText === ''){
              this.getPhoto('dogs');
          } else {
            this.getPhoto(searchText);

          }
      }

        /** 
     * `getPhoto` requests an api and sets the state properties
     * @param {string} query - a name of query
     * @param {Array} photos - an array of photo url from the API 
     * @param {bool} loading - sets to false. 
     * @param {string} title - sets title of the searched query to uppercase letters. 
     * 
     * catches fetching/parsing errors.  
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
    render(){
        console.log(this.props);   
        const { photos, title } = this.state;
        const photoList = photos.map((photo) => {
           return <Photo url={photo} alt={title} key={photo} />
        })
        return(
            <div className="photo-container">
                <h2> {title} </h2>
                <ul>
                    {photoList}
                </ul>
            </div>
            
        )
    }
    
}
