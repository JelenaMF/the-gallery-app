  
//import React, {useParams} from 'react';
import {  NavLink } from 'react-router-dom';

const Nav = ( props ) => {

        return(
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/birds">Birds</NavLink></li>
                    <li><NavLink to="/frogs">Frogs</NavLink></li>
                    <li><NavLink to="/cats">Cats</NavLink></li>
                </ul>
            </nav>
             
        );
    }

export default Nav;