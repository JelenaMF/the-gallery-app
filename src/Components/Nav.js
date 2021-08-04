  
import React from 'react';
import { Link } from 'react-router-dom';



const Nav = ({match}) => {
        return(
            <nav className="main-nav">
                <ul>
                    <li><Link to="/birds">Birds</Link></li>
                    <li><Link to="/monkeys">Monkeys</Link></li>
                    <li><Link to="/cats">cats</Link></li>
                </ul>
            </nav>
             
        );
    }

export default Nav;