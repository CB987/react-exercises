import React, { Component } from 'react';

const NotesList = (props) => {
    console.log(props.notes);
    return (
        <ul className="notes-list list-group">
            {
                props.notes.map(note => {
                    return (<li className="list-group-item"><a>{note}</a></li>)
                })
            }
        </ul>
    );
}

export default NotesList;