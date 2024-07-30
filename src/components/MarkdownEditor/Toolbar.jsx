import React from 'react';
import { Button } from 'react-bootstrap';
import "@github/markdown-toolbar-element";

const Toolbar = (props) => {
    const btnStyle = {
        backgroundColor: "rgb(29, 27, 54)",
        color: "#f6ffbc",
        border: "2px solid rgb(29, 27, 54)",
        padding: "7px 15px",
        fontSize: "14px",
        lineHeight: "20px",
        margin: "3px",
    };

    const fasStyle = {
        width: "50px",
    };

    return (
        <div>
            <markdown-toolbar for="textarea_input">
                <md-header level="1">
                    <Button style={btnStyle}>
                        <i className="fas fa-heading" style={fasStyle}></i>
                    </Button>
                </md-header>
                <md-bold>
                    <Button style={btnStyle}>
                        <i className="fas fa-bold" style={fasStyle}></i>
                    </Button>
                </md-bold>
                <md-italic>
                    <Button style={btnStyle}>
                        <i className="fas fa-italic" style={fasStyle}></i>
                    </Button>
                </md-italic>
                <md-quote>
                    <Button style={btnStyle} >
                        <i className="fas fa-quote-right" style={fasStyle}></i>
                    </Button>
                </md-quote>
                <md-code>
                    <Button style={btnStyle} >
                        <i className="fas fa-code" style={fasStyle}></i>
                    </Button>
                </md-code>
                <md-link>
                    <Button style={btnStyle} >
                        <i className="fas fa-link" style={fasStyle}></i>
                    </Button>
                </md-link>
                <md-image>
                    <Button style={btnStyle}>
                        <i className="fas fa-image" style={fasStyle}></i>
                    </Button>
                </md-image>
                <md-unordered-list>
                    <Button style={btnStyle} >
                        <i className="fas fa-list-ul" style={fasStyle}></i>
                    </Button>
                </md-unordered-list>
                <md-ordered-list>
                    <Button style={btnStyle} >
                        <i className="fas fa-list-ol" style={fasStyle}></i>
                    </Button>
                </md-ordered-list>
                <md-task-list>
                    <Button style={btnStyle} >
                        <i className="fas fa-tasks" style={fasStyle}></i>
                    </Button>
                </md-task-list>
                <md-mention>
                    <Button style={btnStyle} >
                        <i className="fas fa-at" style={fasStyle}></i>
                    </Button>
                </md-mention>
                <md-ref>
                    <Button style={btnStyle} >
                        <i className="fas fa-exclamation" style={fasStyle}></i>
                    </Button>
                </md-ref>
                <Button style={btnStyle} variant="info" onClick={props.clickHandler}>
                    <i className="fas fa-file-download" style={fasStyle}></i>
                </Button>
            </markdown-toolbar>
        </div>
    )
}

export default Toolbar
