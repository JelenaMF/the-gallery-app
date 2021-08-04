  
//import React, {useParams} from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
   
        return(
            <nav className="main-nav">
                <ul>
                    <li><Link to="/birds">Birds</Link></li>
                    <li><Link to="/monkeys">Monkeys</Link></li>
                    <li><Link to="/cats">Cats</Link></li>
                </ul>
            </nav>
             
        );
    }

export default Nav;