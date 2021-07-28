import React from 'react';
import Pic from './Pic';
//import No-Results-Layout

const PicList = props => {
    const results = props.data;
    let pics;
    if(results.length > 0){
        pics = results.map(pic => <Pic url={pic.url} key={pic.id} />)
    } else {
        /** route to no-results-layout */
        console.log('no image');
    } 
    return(
        <ul className="photo-container">
            {pics}
        </ul>
    )
}
export default PicList;