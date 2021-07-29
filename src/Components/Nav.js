import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PhotoList from './PhotoList';
console.log(PhotoList);

export default class Nav extends Component {

    render(prop) {
        return(
            <nav className="main-nav">
                <ul>
                    <li><Link to>Birds</Link></li>
                    <li><Link>Dogs</Link></li>
                    <li><Link>cats</Link></li>
                </ul>
            </nav>
             
        );
    }

}
