import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../styles/benefits.css';



// eslint-disable-next-linefunction handleClick_contribute() {
  // eslint-disable-next-linewindow.location.href = 'https://traboda.com/';}



function Benefits() { 
  return (
    
    <div className=' benefits_whole  rounded-t-lg:rounded-lg'>
      <h1 id="benefits" className='benefits1'>Partnership Benefits 
        <p className='text-center text-4xl text-amber-600 m-6'></p>
      </h1>
      <Container className="benefits-container">
        
        <Row>
        <Col md={4} className="mb-4">
            <Card className="benefit-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="benefit-title text-center"></Card.Title>
                <Card.Text className="descr">
                Diamond partner is a privileged partnership opportunity to be an overall initiative for all the programs with all the exclusive benefits of Event Partner and Training Program Partner.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="benefit-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="benefit-title text-center"></Card.Title>
                <Card.Text className="descr">
                    Your logo will be on all of the training program Speaking opportunity at the training program.Complimentary pass to the event on C20 working group Technology Security and Transparency (TST).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="benefit-card h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="benefit-title text-center"></Card.Title>
                <Card.Text className="descr">
                  Your logo will be on all the training program Complimentary pass to the event on C20 working group Technology Security and Transparency (TST)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



      <div className="button-container">
      <button>Contribute Now</button>
      <button>Contribute Through Bank</button>
    </div>

    </div>
  );
}

export default Benefits;
