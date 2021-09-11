  
//import React, {useParams} from 'react';
import { Link } from 'react-router-dom';

const Nav = ( props ) => {

        return(
            <nav className="main-nav">
                <ul>
                    <li><Link id="birds" to="/birds">Birds</Link></li>
                    <li><Link id="frogs" to="/frogs">Frogs</Link></li>
                    <li><Link id="cats" to="/cats">Cats</Link></li>
                </ul>
            </nav>
             
        );
    }

export default Nav;