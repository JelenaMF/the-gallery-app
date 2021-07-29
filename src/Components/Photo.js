import React from 'react';
//function to hold the photo data
const Photo = props => (
    <li>
        <img src={props.url} alt={props.title}/>
    </li>
);

export default Photo;