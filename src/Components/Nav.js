import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import url from './PhotoList';

export default class Nav extends Component {
    const { search } = window.location;
    
    render(prop) {
        return(
            <nav className="main-nav">
                <ul>
                    <li><Link>Birds</Link></li>
                    <li><Link>Dogs</Link></li>
                    <li><Link>cats</Link></li>
                </ul>
            </nav>
        );
    }

}
