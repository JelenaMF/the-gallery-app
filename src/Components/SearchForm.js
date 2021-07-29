import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default class SearchForm extends Component {
    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render(){
        return(
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        ref={(input) => this.query=input}
                        placeholder="Search..." 
                    />
                <button type='submit' id="submit" className="search-form-button"><FaSearch /></button>
                </form>
            
        );
    }
}

