import React, { Component } from 'react';
import './index.css';
//import axios from 'axios';
//import SearchForm from './Components/SearchForm';
import PicList from './Components/PicList';



export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      pics: [],
      loading: true
    };
  }
  // componentDidMount(){
  //   this.performSearch()
  // }

  //pass the query the value 'dogs' to prevent an empty page onload
  // performSearch = (query = 'dogs') => {
  //   axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a10abb8336a90173442222b094e5852b&tags=cat%2C+dog%2C+bird&per_page=25&format=json&nojsoncallback=1');
  // }
  render() {
    console.log(this.state.pics) 
    return(
      <div className="main-header">
        <div className="inner">
          <h2>The Gallery App</h2>
          {/** Enter Search bar */}
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

