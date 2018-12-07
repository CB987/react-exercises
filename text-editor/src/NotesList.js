import React, { Component } from 'react';

const NotesList = (props) => {
    return (
        <ul className="notes-list list-group">
            <li className="list-group-item"><a>note#1</a></li>
            <li className="list-group-item"><a>note#2</a></li>
            <li className="list-group-item"><a>note#3</a></li>
        </ul>
    );
}

export default NotesList;