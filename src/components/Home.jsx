import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homeImg from '../assets/homeimg.svg'
import sh1 from '../assets/shape-1.svg';
import sh2 from '../assets/shape-2.svg';
import sh3 from '../assets/shape-3.svg';
import sh4 from '../assets/shape-4.svg';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const wrapper = {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
        position: "relative",
    };

    const shape1 = {
        left: 0,
        right: 0,
        margin: "auto",
        top: "150px",
        position: "absolute",
    };

    const shape2 = {
        right: "420px",
        top: "310px",
        position: "absolute",
    };

    const shape3 = {
        right: "88px",
        top: "300px",
        position: "absolute",
    };

    const shape4 = {
        right: "310px",
        bottom: "80px",
        position: "absolute",
    };

    const btnStyle = {
        backgroundColor: "rgb(29, 27, 54)",
        color: "#f6ffbc",
        border: "2px solid rgb(29, 27, 54)",
        padding: "7px 15px",
    };

    return (
        <div style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}>
            <Container style={wrapper}>
                <img src={sh1} alt="sh1" className='shape' style={shape1} />
                <img src={sh2} alt="sh2" className='shape' style={shape2} />
                <img src={sh3} alt="sh3" className='shape' style={shape3} />
                <img src={sh4} alt="sh4" className='shape' style={shape4} />
                <Row className="text-center" style={{ alignItems: "center", paddingTop: "100px", paddingBottom: "50px" }}>
                    <Col md={6}>
                        <img src={homeImg} alt="homeImg" className='img-fluid' style={{ justifyContent: "center", padding: "30px", width: "550px" }} />
                    </Col>
                    <Col md={6}>
                        <h2 style={{ color: "#f0c19e" }}>Online Code Editor From Any Where</h2>
                        <h5 style={{
                            textAlign: "justify",
                            color: "rgb(154 179 205)",
                            paddingTop: "10px",
                        }}>
                            With this online code editor, you can edit HTML, CSS and
                            JavaScript code, and live preview of site instantly.
                        </h5>
                        <Button style={btnStyle} as={Link} to="/code-editor">Code Editor</Button>

                        <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>Generate README.md for your project</h2>
                        <h5 style={{
                            textAlign: "justify",
                            color: "rgb(154 179 205)",
                            paddingTop: "10px",
                        }}>
                            Online markdown editor, with custom toolbar to help you make your
                            readme easily.
                        </h5>
                        <Button style={btnStyle} as={Link} to="/markdown-editor">Markdown Editor</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
