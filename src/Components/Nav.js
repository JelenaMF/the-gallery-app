  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    
    render() {
        return(
            <nav className="main-nav">
                <ul>
                    <li><Link to="/birds" >Birds</Link></li>
                    <li><Link to="/monkeys">Monkeys</Link></li>
                    <li><Link to="/cats">cats</Link></li>
                </ul>
            </nav>
             
        );
    }

}