import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
    let results = props.data;
    let photos;
    if(results.length > 0){
         photos = results.map((photoData) => {
            const id= photoData.id;
            const server= photoData.server;
            const secret = photoData.secret;
            const photoUrl = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
            return <Photo url={photoUrl} key={id}  />
        
        })
    } else {
        /** route to no-results-layout */
        <NotFound />
        console.log('no image');
    } 
    return(
        <div className="photo-container">
            <h2> {props.title} </h2>
            <ul>
                {photos}
            </ul>
        </div>
        
    )
}
export default PhotoList;
