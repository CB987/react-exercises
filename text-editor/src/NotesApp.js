import React, { Component } from 'react';


import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="notes-app">
                <SearchBar />
                <NotesList />
                <EditorWindow />
            </div>
        )
    }
}

export default NotesApp;