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
      <div className="relative h-screen">
        <video className="w-100 h-auto object-cover" autoPlay loop muted>
          <source src={about} type="video/mp4" />
        </video>

        <div className="overlay absolute w-full top-100 left-0 flex justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-7xl text-orange-500 font-extrabold font-serif"
         >
            Technology and Security for One World
          </h1>

          <Button 
            style={{
              position: 'absolute',
              width: '265px',
              height: '79px',
              left: '801px',
              top: '0px',
              background: '#1F8FF8',
              borderRadius: '31px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontFamily: 'NanumMyeongjo',
              fontWeight: '700',
              fontSize: '36px',
              lineHeight: '30px',
              color: '#FFFFFF'
            }}
            variant="primary" 
            className="px-5 py-3 rounded-pill shadow hover-bg-cover mt-4"
              
            onClick={handleClick_regnow}
          >
            REGISTER NOW
          </Button>
        </div>
      </div>

      <Container className="mt-5 text-center d-md-none">
        <Row>
          <Col>
            <h1 className="text-4xl md:text-7xl text-orange-500 font-extrabold font-serif hidden md:block d-md-none">
              Technology and Security for One World
            </h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button 
              variant="primary" 
              className="px-5 py-3 rounded-pill shadow hover-bg-cover d-md-none" /* this line sets the display property */
              onClick={handleClick_regnow}
            >
              REGISTER NOW
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;