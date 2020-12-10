import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../../assets/img/profile/profile.jpg';
import '../about/about.style.css';
import Button from "react-bootstrap/Button";
function About() {
    return (
        <div id='About'>
        <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
            <Row className="pt-3 pb-5 align-items-center" >
                <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                    <Image className="profile justify-content-end" alt="profile" src={profile} thumbnail fluid />
                    </Row>
                </Col>
                <Col xs={12} md={6}>

                <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Sridhar Reddy Alapati</strong>
                <br />A passionate programmer , learner and a Techie, born and brought up in India. I am a Front End Developer with React.js . Along with this i had quite good knowledge in Core Java , Sql and Networking.
                <br />
                 I'm currently perceiving my Engineering with specialization in 'Computer Science' in Vaagdevi College Of Engineering.
                <br />
                 My goal is always driven towards providing amazing experience with the best level of quality and service .
                <br />
                Along with that, I also participate in social activites like Blood donation Camps . 
                <br />I love learning about new technologies, what problems are they solving and How they are solving.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#Contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/18aXgrvEJrCs2nw92k4tQRc9NvFQiHrtb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/SRIDHARALAPATI" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/alapati-sridhar-reddy-101499152" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>

        </div>
    )
}

export default About
