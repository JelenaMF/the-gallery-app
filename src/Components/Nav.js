import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
