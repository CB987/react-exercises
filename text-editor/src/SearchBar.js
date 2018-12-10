import React, { Component } from 'react';

const SearchBar = (props) => {
    return (
        <div className="search-bar form-group">
            <input
                type="text"
                className="form-control"
                value={props.searchTerm}
                placeholder="aim to be shiny"
                onChange={(event) => {
                    // console.log(event.target.value);
                    props.handleInput(event.target.value);
                }} />
        </div>
    );
};

export default SearchBar;