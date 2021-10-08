import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router';

//import Photo from './Photo';

 class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText: ''};

        //this.onSearchChange = this.onSearchChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
        console.log(this.state.searchText)
    }

    handleSubmit = e => {  
       e.preventDefault();
       e.currentTarget.reset();
       this.props.onSearch(this.query.value)
            //set path with searchText
        let path = `${this.state.searchText}`;
        this.props.history.push(`/search/${path}`);
    }
    

    render(){
        const {searchText} = this.state;
        
        console.log(searchText)
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