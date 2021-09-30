import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router';

import PhotoList from './PhotoList';

 class SearchForm extends Component {
    state = {
        searchText: ''    
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
        if(this.state.searchText.length > 0){
            //set path with searchText
        let path = `${this.state.searchText}`;
        this.props.history.push(`/search/${path}`);
        <PhotoList />
        }
    }
    
    getPhoto = (query = this.state.searchText) => {
        //get url for the searched input
        //then set state of photos to the new data 
    }

    render(){

        return(
                <form className="search-form" onSubmit={this.handleSubmit}>
                        <input  type="search"
                            onChange={this.onSearchChange}
                            name="search"
                            value={this.state.searchText}
                            ref={(input)=> this.query= input}
                            placeholder="Search..." 
                        />

                <button type='submit' id="submit" className="search-form-button"><FaSearch /></button>
                </form>
            
        );
    }
}

export default withRouter(SearchForm)