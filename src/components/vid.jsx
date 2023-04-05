import React from 'react';
import about from '../images/vid.webm';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/vid.css';

function handleClick_regnow() {
  window.location.href = 'https://www.eventbrite.com/e/technology-and-security-for-one-world-tickets-598507230237';
}

const About = () => {
  return (
    <>
      <div className="video-container">
        <video className="video" autoPlay loop muted>
          <source src={about} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="overlay-content">
            <h1>Technology And Security For One World</h1>
            <Button  
              className="register-button"
              onClick={handleClick_regnow}
            >
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
<div className='parent'>
      <Container className="container-change">
        <Row>
          <Col>
            <h1 className="text-4xl md:text-7xl text-orange-500 font-extrabold font-serif hidden md:block d-md-none">
            Technology And Security For One World
            </h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button 
              variant="primary" 
              className="px-3 py-3 rounded-pill shadow hover-bg-cover d-md-none"
              onClick={handleClick_regnow}
            >
              REGISTER NOW
            </Button>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default About;