import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router';

//importing components
import NotFound from '../Components/NotFound';
import PhotoList from '../Components/PhotoList';

 class SearchForm extends Component {
    state = {
        query: '',
        data: [],
        searchText: ''

    }

    onSearchChange = e => {
        this.setState({ 
            query: e.target.value, 
            searchText: this.query.value
        });
            
    }

    handleSubmit = e => {
        e.preventDefault();
        //set path with searchText
        let path = `${this.state.query}`
        this.props.history.push(`/search/${path}`);
        this.setState({query: ''})
    }
    

    render(){
        return(
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input id="search" type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        value={this.state.query}
                        ref={(input) => this.query=input}
                        placeholder="Search..." 
                    />
                <button type='submit' id="submit" className="search-form-button"><FaSearch /></button>
                </form>
            
        );
    }
}

export default withRouter(SearchForm)