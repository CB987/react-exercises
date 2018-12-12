import React from 'react';
import { Link } from 'react-router-dom';

const Dogs = (props) => {
    const dogListItems = props.dogList.map((dogName, index) => {
        return (
            <li key={index}>
                <Link to={`/doggos/${dogName}`}>{dogName}</Link>
            </li>
        );
    });

    return (
        <div>
            <h1>doggos</h1>
            <ul>
                {dogListItems}
            </ul>
        </div>
    );
};

export default Dogs;