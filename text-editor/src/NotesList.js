import React, { Component } from 'react';

const NotesList = (props) => {
    // console.log(props.notes);
    return (
        <ul className="notes-list list-group">
            {
                props.notes.map(note => {
                    return (
                        <li className="list-group-item"
                            onClick={(event) => {
                                event.preventDefault();
                                // console.log(note.id);
                                props.handleClick(note.id);
                            }}>
                            {note.title}
                        </li>)
                })
            }
        </ul>
    );
}

export default NotesList;