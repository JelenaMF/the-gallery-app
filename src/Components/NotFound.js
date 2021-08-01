import React from 'react';

const NotFound = props => (
    <li className="not-found">
        <i className="material-icons icon-gif">sentiment_very_disatisfied</i>
        <h3>No Results Found</h3>
        <p>That search did not return any results, please try again.</p>
    </li>
);

export default NotFound;