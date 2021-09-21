import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router';

//importing components
import NotFound from '../Components/NotFound';
import PhotoList from '../Components/PhotoList';

 class SearchForm extends Component {
    state = {
        searchText: '',
        results: []
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        //set path with searchText
        let path = `${this.state.searchText}`
        this.props.history.push(`/search/${path}`);
        
    }
    

    render(){
        return(
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input id="search" type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        value={this.state.searchText}
                        placeholder="Search..." 
                    />
                <button type='submit' id="submit" className="search-form-button"><FaSearch /></button>
                </form>
            
        );
    }
}

export default withRouter(SearchForm)