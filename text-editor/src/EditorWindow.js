import React, { Component } from 'react';

const EditorWindow = (props) => {
    console.log(props.content);
    return (

        <textarea
            className="form-control editor-window"
            value={props.content}
            rows="3"
        />
    );

}

export default EditorWindow;