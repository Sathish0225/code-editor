import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Remarkable } from 'remarkable';
// import { linkify } from "remarkable/linkify";
import useLocalStorage from '../../hooks/LocalStorage';
import fileDownload from "js-file-download";
import Toolbar from "./Toolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Editor = () => {
  const InitialValue = `## Welcome to Markdown Editor!
  
  **Features**

  - **Markdown**
  - **Preview**
  - **Save**

  **How to use**

  1. **Markdown**
  2. **Preview**
  3. **Save**

  **Thank you**
  `;

  const body = {
    paddingTop: "30px",
    paddingBottom: "50px",
    fontFamily: "monospace",
    color: "wheat",
  };

  const mdIn = {
    width: "100%",
    height: "80vh",
    minHeight: "80vh",
    padding: "15px 15px",
    borderRadius: "2px",
    background: "white",
    boxShadow: "rgb(0 0 0 / 49%) 2px 2px 10px",
    border: 0,
    outline: "none",
    resize: "none",
    overflow: "auto",
  };

  const mdOut = {
    width: "100%",
    height: "80vh",
    minHeight: "80vh",
    padding: "15px 15px",
    borderRadius: "2px",
    background: "white",
    boxShadow: "rgb(0 0 0 / 49%) 2px 2px 10px",
    backgroundColor: "#f3f3f3",
    color: "black",
    overflow: "auto",
  };

  const btnStyle = {
    backgroundColor: "rgb(29, 27, 54)",
    color: "#f6ffbc",
    border: "2px solid rgb(29, 27, 54)",
    padding: "7px 15px",
  };

  const md = useMemo(() => {
    var remarkable = new Remarkable('full', {
      html: true,
      xhtmlOut: true,
      langPrefix: "language-",
      quotes: "“”‘’",
      typographer: true,
      highlight: function (/*str, lang*/) { return ''; }
    });
    return remarkable
  }, []);

  const [userInput, updateStorageInput] = useLocalStorage(
    "mdEditor",
    InitialValue
  );
  const [userOut, updateOut] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    let res = md.render(userInput);
    updateOut(res);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [userInput, md]);

  const handelChange = (e) => {
    updateStorageInput(e.target.value);
  };

  return (
    <div style={{ background: "rgb(42 40 62)" }}>
      <Container fluid style={body}>
        <div className="d-flex justify-content-between">
          <div>
            <Button style={btnStyle} as={Link} to="/"><i className="fas fa-chevron-left"></i></Button>
          </div>
          <h3 className="text-center">Markdown Editor</h3>
          <div></div>
        </div>
        <div className="text-center" style={{ paddingTop: "15px" }}>
          <Toolbar clickHandler={() => { fileDownload(userInput, 'README.md') }} />
        </div>
        <Row style={{
          justifyContent: "center",
          paddingLeft: "45px",
          paddingRight: "45px",
          paddingTop: "10px",
        }}>
          <Col md={6} className="text-center">
            <textarea
              id="textarea_input"
              ref={textareaRef}
              onChange={handelChange}
              value={userInput}
              style={mdIn}
            />
          </Col>
          <Col md={6} tyle={{ paddingTop: "35px" }}>
            <div dangerouslySetInnerHTML={{ __html: userOut }} style={mdOut} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Editor
