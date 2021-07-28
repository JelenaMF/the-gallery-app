import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
    const results = props.data;
    let photos;
    if(results.length > 0){
        photos = results.map(photo => {
            const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            return <Photo url={url} key={photo.id} desc={photo.title} />
        });
    } else {
        /** route to no-results-layout */
        <NotFound />
        console.log('no image');
    } 
    return(
        <ul className="photo-container">
            {photos}
        </ul>
    )
}
export default PhotoList;