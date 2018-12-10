import React, { Component } from 'react';


import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId: '',
            searchTerm: '',
            notes: [
                {
                    id: 1001,
                    title: 'note 1',
                    content: 'if wishes were horses we\'d all be eating steak'
                },
                {
                    id: 1002,
                    title: 'note 2',
                    content: 'big damn heroes... ain\'t we just'
                },
                {
                    id: 1003,
                    title: 'note 3',
                    content: 'she may be a witch, but she\'s our witch'
                },
                {
                    id: 1004,
                    title: 'note 4',
                    content: 'also, i can kill you with my brain'
                }
            ]
        }
    }
    render() {
        return (
            <div className="notes-app">
                <SearchBar
                    searchTerm={this.state.searchTerm}
                    handleInput={this._setSearchTerm}
                />
                <NotesList
                    // notes={this.state.notes.map(note =>
                    //     note.title)}
                    notes={this._searchNotes(this.state.searchTerm)}
                    handleClick={this._setCurrentNoteId}
                />
                <EditorWindow
                    content={this._getById(this.state.currentNoteId).content}
                />
            </div>
        )
    }

    _setSearchTerm = (term) => {
        // console.log(`searching for: ${term}`);
        this.setState({
            searchTerm: term
        });
    }

    _setCurrentNoteId = (noteId) => {
        // console.log(`id from child: ${noteId}`)
        this.setState({
            currentNoteId: noteId //value is what gets passed in
        })
    }

    _getById = (idToFind) => {
        //find the object in this.state.notes where id === idToFind
        const theOne = this.state.notes.find(note => {
            return note.id === idToFind
        });
        return theOne || { content: '' };
        /* ^^ is shorthand for the following:
            if (theOne) {
                return theOne;
            } else {
                const dummyObject ={
                    content: ''
                };
                return dummyObject;
            }
        */
    }

    _searchNotes = (term) => {
        //filter out any notes that do not include the search term in the title or content
        const filteredNotes = this.state.notes.filter(note => {
            const termIsInTitle = note.title.includes(term);
            const termIsInContent = note.content.includes(term);

            return termIsInContent || termIsInTitle;
        });
        return filteredNotes;
    }
}

export default NotesApp;