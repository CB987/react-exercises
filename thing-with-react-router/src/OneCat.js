import React from 'react';

const OneCat = (props) => {
    const allToys = props.toys;
    const catName = props.match.params.catName;
    const myToys = allToys[catName];
    return (
        <div>
            <h2>{catName}</h2>
            <ul>
                {myToys.map((toy) => {
                    return <li>{toy}</li>
                })}
            </ul>
        </div>
    );
};

export default OneCat;