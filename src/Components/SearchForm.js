import React from 'react';
import{ Form, 
    FormGroup,
    FormControl,
    Button,
    
 } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

 const SearchForm =() => {
     return (
        <Form className="search-form">
            <FormGroup >
            <FormControl
            placeholder="Search"
            aria-describedby="search-bar"
            />
            <Button className="search-form-button"> <FaSearch /> </Button> {/** button needs to be moved up next to the input field */}
            </FormGroup>
        
        </Form>
     );
 }

 export default SearchForm;