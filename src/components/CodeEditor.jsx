import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import useLocalStorage from "../hooks/LocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const LineNumbers = ({ count }) => {
    const lines = [];
    for (let i = 1; i <= count; i++) {
        lines.push(<div key={i}>{i}</div>);
    }
    return <div className="line-numbers">{lines}</div>;
};

const CodeEditor = () => {
    const btnStyle = {
        backgroundColor: "rgb(29, 27, 54)",
        color: "#f6ffbc",
        border: "2px solid rgb(29, 27, 54)",
        padding: "7px 15px",
    };

    const getBlobURL = (code, type) => {
        const blob = new Blob([code], { type });
        return URL.createObjectURL(blob);
    };

    const htmlDefault = `<h2>Hello User</h2>
        <p>Welcome to Code Editor!</p>`;

    const cssDefault = `body{
      text-align:center;
      font-size:32px;
    }`;

    const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
    const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
    const [jsVal, updateJsStrorage] = useLocalStorage("js", "");

    const [html, updateHtml] = useState(htmlVal);
    const [css, updateCss] = useState(cssVal);
    const [js, updateJs] = useState(jsVal);

    const cssURL = getBlobURL(css, "text/css");
    const jsURL = getBlobURL(js, "text/javascript");

    const [htmlLines, setHtmlLines] = useState(htmlVal.split("\n").length);
    const [cssLines, setCssLines] = useState(cssVal.split("\n").length);
    const [jsLines, setJsLines] = useState(jsVal.split("\n").length);

    const handleHtmlChange = (e) => {
        const value = e.target.value;
        updateHtml(value);
        setHtmlLines(value.split("\n").length);
    };

    const handleCssChange = (e) => {
        const value = e.target.value;
        updateCss(value);
        setCssLines(value.split("\n").length);
    };

    const handleJsChange = (e) => {
        const value = e.target.value;
        updateJs(value);
        setJsLines(value.split("\n").length);
    };

    const syncScroll = (e) => {
        const editorContainer = e.target.parentElement;
        const lineNumbers = editorContainer.querySelector('.line-numbers');
        lineNumbers.scrollTop = e.target.scrollTop;
    };

    const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
        <body>
        ${html}
        ${js && `<script src="${jsURL}"></script>`}
        </body>
      </html>`;

    useEffect(() => {
        setTimeout(() => { }, 500);
        updateHtmlStrorage(html);
        updateCssStrorage(css);
        updateJsStrorage(js);
        // eslint-disable-next-line
    }, [html, css, js]);

    return (
        <div>
            <Container fluid={true} className="pane pane-top">
                <div className="d-flex justify-content-between" style={{ color: "#f6ffbc" }}>
                    <div>
                        <Button style={btnStyle} as={Link} to="/"><i className="fas fa-chevron-left"></i></Button>
                    </div>
                    <h3 className="text-center">Code Editor</h3>
                    <div></div>
                </div>
                <Row nogutters="true">
                    <Col md={4} className="editor-lang">
                        <div className="editor-text">
                            <i className="fab fa-html5"> </i> Html
                        </div>
                        <div className="editor-container">
                            <LineNumbers count={htmlLines} />
                            <textarea className="editor-textarea" value={html} onChange={handleHtmlChange} onScroll={syncScroll} />
                        </div>
                    </Col>

                    <Col md={4} className="editor-lang">
                        <div className="editor-text">
                            <i className="fab fa-css3-alt"></i> Css
                        </div>
                        <div className="editor-container">
                            <LineNumbers count={cssLines} />
                            <textarea className="editor-textarea" value={css} onChange={handleCssChange} onScroll={syncScroll} />
                        </div>
                    </Col>

                    <Col md={4} className="editor-lang">
                        <div className="editor-text">
                            <i className="fab fa-js-square"></i> Js
                        </div>
                        <div className="editor-container">
                            <LineNumbers count={jsLines} />
                            <textarea className="editor-textarea" value={js} onChange={handleJsChange} onScroll={syncScroll} />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="pane pane-bottom">
                <Row nogutters="true">
                    <iframe
                        title="output"
                        srcDoc={srcDoc}
                        className="output-pane"
                        allowFullScreen
                    ></iframe>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default CodeEditor
