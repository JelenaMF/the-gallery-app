//importing dependents 
import React, { Component} from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';
import './css/index.css';
//importing components
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import apiKey from './config';
import Nav from './Components/Nav'


export default class App extends Component {
 
    constructor(props) {
      super(props);
      //set initial state of photos to an empty array 
      //set the intial state of searchText to an empty string
      //Set the initial state of loading to true
      //set the the initial state of title to empty string.
      this.state = { 
        photos:[],
        searchText:'',  
        loading: true,
        title: ''
      };
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
    
    getPhoto = (query = this.searchText) => { 
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

    /**
     * mounts the api from the `getPhoto`
     * @param dogs - initial query 
     */

     componentDidMount(){
      this.getPhoto('dogs')
    }

     /**`componentDidUpdate - compares the previous state of the searchText/title to the current state of the searchText/title
      * if they don't match the `getPhoto` method calls the current state of the searchText. 
       */
    componentDidUpdate(prevProps, prevState) { 
      if(prevState.searchText !== this.state.searchText){
        return this.getPhoto(this.state.searchText)
        }
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
              <SearchForm onSearch={this.getPhoto}  />   
              <Nav /> 
              <div className="photo-container">
                <h1>{this.state.title}</h1>
                {
                  (this.state.loading)
                  ?<h2>loading...</h2>
                  : <Switch>
                    <Route  path="/" render={() =>  <PhotoList data={this.state.photos} /> } />
                    <Route exact path="/:query" render={() => <PhotoList data={this.state.searchText} />}  /> 
                    <Route path="/birds" render={() => {this.getPhoto('birds')}} />  
                    <Route path="/frogs" render={() => {this.getPhoto('frogs')}} />
                    <Route path="/cats" render={() => {this.getPhoto('cats')}} />
                  </Switch>
                }
                </div>
            </BrowserRouter>     
            </div>
          </div>
        
      );
    }
  }
  

