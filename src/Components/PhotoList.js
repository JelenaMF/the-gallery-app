import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
    let results = props.data;
    const alt = props.alt;
    let list = [];
    if(results.length > 0){
         
        for(let i = 0; i < results.length; i++){
            list.push(<Photo url={results[i]} alt={alt} key={i}  />)
        }
    } else {
        /** route to no-results-layout */
        <NotFound />
    } 
    return(
        <div className="photo-container">
            <h2> {props.title} </h2>
            <ul>
                {list}
            </ul>
        </div>
        
    )
}
export default PhotoList;
