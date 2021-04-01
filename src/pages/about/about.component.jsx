import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import "./about.style.css";
// import Profile from '../../assets/img/profile/profile.jpg'
import Profile from '../../assets/img/profile/prof.jpg'
import { MdEmail } from "react-icons/md";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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
                            <Image className="profile justify-content-end" alt="profile" src = {Profile}/>

                        </Row>
                    </Col>
                    {/* About Me Description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details">
                        Hi there! I'm <strong>&nbsp;Amy.</strong>
                        <br />As a third year computer science and data science student at UofT, I am always looking for opportunities to learn new things and improve my skills. 
                        <br />
                        <br />
                        A little bit about me; I love playing volleyball with friends in my freetime, and also am a huge foodie who always wants to try new food!
                        
                        <br />
                        
                        <br />
                        For the next year, I will be a software engineer intern at RedHat!
                        <br /> 
                        <br />
                        <div class = 'contact-buttons'> 
                            <a  href = {'mailto:amyy.gao@mail.utoronto.ca'} className="btn btn-outline-secondary"> <MdEmail></MdEmail> </a>
                            <a  href = {'https://www.linkedin.com/in/agao/'} className="btn btn-outline-secondary"> <AiFillLinkedin/> </a>
                            <a  href = {'https://github.com/amygaoo'} className="btn btn-outline-secondary"> <AiFillGithub/> </a> 
                        </div>
                        
                        </Row>
                        <Row>
                        
                        </Row>

                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        
    )
}
export default About