import React from 'react';

const oneDog = (props) => {
    const dogInfo = props.dogInfo;
    const dogName = props.match.params.dogName;
    const oneDogInfo = dogInfo[dogName];
    const dogToysListItems = oneDogInfo.toys.map(toy => {
        return (
            <li>{toy}</li>
        )
    })
    return (
        <div>
            <h1>{props.match.params.dogName} sez woof</h1>
            <h2>My owner is {oneDogInfo.owner}</h2>
            <h2>My fave things are:</h2>
            <ul>
                {dogToysListItems}
            </ul>
        </div >
    );
};

export default oneDog;