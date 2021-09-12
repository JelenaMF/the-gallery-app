import React, { Component } from 'react';


import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router';

 class SearchForm extends Component {
    state = {
        searchText: '',
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        //set path with searchText
        let path = `${this.state.searchText}`
        this.props.onSearch(this.query.value);
        this.props.history.push(`/search/${path}`);
        this.setState({searchText: ''})
    }

    render(){
        return(
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input id="search" type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        value={this.state.searchText}
                        ref={(input) => this.query=input}
                        placeholder="Search..." 
                    />
                <button type='submit' id="submit" className="search-form-button"><FaSearch /></button>
                </form>
            
        );
    }
}

export default withRouter(SearchForm)