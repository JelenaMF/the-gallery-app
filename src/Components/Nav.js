import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return(
            <nav className="main-nav">
                <ul>
                    <li><a href="#">Birds</a></li>
                    <li><a href="#">Dogs</a></li>
                    <li><a href="#">cats</a></li>
                </ul>
            </nav>
        );
    }

}
