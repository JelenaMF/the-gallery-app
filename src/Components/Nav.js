import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    
    render(props) {
        return(
            <nav className="main-nav">
                <ul>
                    <li><Link to="" >Birds</Link></li>
                    <li><Link to="">Dogs</Link></li>
                    <li><Link to="">cats</Link></li>
                </ul>
            </nav>
             
        );
    }

}