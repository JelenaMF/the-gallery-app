import React, { Component } from 'react';
import './css/index.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PicList from './Components/PicList';
import apiKey from './config';


export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      pics: [],
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
        pics: res.data,
        loading: false
      });
    })
  }
  render() {
    console.log(this.state.pics) 
    return(
      <div className="main-header">
        <div className="inner">
          <h2>The Gallery App</h2>
          {/** Enter Search bar */}
          <SearchForm />
          
        </div>
        <div className="main-content">
        {
          (this.state.loading)
          ?<p>loading...</p>
          : <PicList data={this.state.pics}/>
        }
      </div>
      </div>
     
      
    );
  }
}

