import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends Component {
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
            <div className="container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="search"
                        value={this.state.inputValue}
                        onChange={this.onSearchChange}
                        name="search"
                        ref={(input) => this.query=input}
                        placeholder="Search..." 
                    />
                <button type='submit' id="submit" className="search-form-button"><FaSearch /></button>
                </form>
            </div>
            
        )
    }
}

export default withRouter(SearchForm);