import React from 'react';
import about from '../images/c20-tst-header.jpg';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/vid.css';

function handleClick_regnow() {
  window.location.href = 'https://www.eventbrite.com/e/technology-and-security-for-one-world-tickets-598507230237';
}

const About = () => {
  return (
    <>
      <div className="video-container">
      <img src={about} 
      alt="Logo" className='c20'/>
        {/* <div className="overlay">
          <div className="overlay-content">
            <h1>Technology And Security For One World</h1>

            <a href="https://www.eventbrite.com/e/technology-and-security-for-one-world-tickets-598507230237" target="_blank">

            <Button  
              className="register-button"
            >
              REGISTER NOW
            </Button>
            </a>
          </div>
        </div> */}
      </div>
{/* <div className='parent'>
      <Container className="container-change">
        <Row>
          <Col>
            <h1 className="tech">
            Technology And Security For One World
            </h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
         
            <Button 
              variant="primary" 
              className="reg_now"
              onClick={handleClick_regnow}
            >
              REGISTER NOW
            </Button>
          </Col>
        </Row>
      </Container>
      </div> */}
    </>
  )
}

export default About;