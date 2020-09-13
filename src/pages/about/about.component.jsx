import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./about.style.css";
import Profile from '../../assets/img/profile/profile.jpg'

const About = () => { 
    return (

        <div id = 'about'>
            <div className = "about">
            <h1 className= 'pt-3 text-center font-details pb-3'>About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* Profile Pic */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src = {Profile} thumbnail fluid/>

                        </Row>
                    </Col>
                    {/* About Me Description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                        Hi there! I am <strong>&nbsp;Amy Gao.</strong>
                        <br />As a third year computer science and data science student at UofT, I am always looking for opportunities to learn new things and improve my skills. 
                        
                        <br />
                        add stuff about skills...
                        <br />
                        blah blah
                        <br />
                        Along with that, I also
                        <br /> <br />
                        </Row>
                        <Row>
                            {/* links */}
                        </Row>

                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
export default About