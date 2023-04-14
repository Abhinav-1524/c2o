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
      </div>
    </>
  )
}

export default About;