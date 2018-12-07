import React, { Component } from 'react';


import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    title: 'note 1',
                    content: 'run'
                },
                {
                    title: 'note 2',
                    content: 'walk'
                },
                {
                    title: 'note 3',
                    content: 'crawl'
                }
            ]
        }
    }
    render() {
        return (
            <div className="notes-app">
                <SearchBar />
                <NotesList
                    notes={this.state.notes.map(note =>
                        note.title)}
                />
                <EditorWindow
                    content={
                        "if wishes were horses, we'd all be eating steak"
                    }
                />
            </div>
        )
    }
}

export default NotesApp;