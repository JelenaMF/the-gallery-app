import React, { Component } from 'react';
// import{ Form, 
//     FormGroup,
//     FormControl,
//     Button,
    
//  } from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa';

export default class SearchForm extends Component {
    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target. value });
    }

    handleSubmit = e => {
        e.prevent.default();
    
        //invoke the performSearch function that fetches data
        this.props.onSearch(this.query.value);
        e. currentTarget.reset();
    }

    render(){
        return(
            <div className="container">
                <form className="search-form">

                </form>
            </div>
            
        )
    }
}