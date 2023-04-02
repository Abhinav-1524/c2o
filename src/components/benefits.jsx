import React from 'react';
import "../styles/benefits.css";
import cover1 from'../images/cover1.png';
import { Card, Col, Container, Row } from 'react-bootstrap';

function Benefits() {
  return (
    <div className='bg-amber-600 m-4 shadow-lg rounded-t-lg:rounded-lg'>
      <p id="benefits" className='text-center text-7xl pt-32 text-blue-950 pb-3'>Partnership Benefits 
        <p className='text-center text-4xl text-amber-600 m-6'></p>
      </p>
      <Container className="my-5">
        <Row>
          <Col md={4} className="mb-4">
            <Card className="bg-blue-950 text-white rounded-lg h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center text-2xl mb-4">DIAMOND PARTNER</Card.Title>
                <Card.Text className="text-center text-2xl">
                  Diamond partner is a privileged partnership opportunity to be an overall initiative for all the programs with all the exclusive benefits of Event Partner and Training Program Partner.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-amber-600 text-white rounded-lg h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center text-2xl mb-4">MAIN PARTNER</Card.Title>
                <Card.Text className="text-center text-2xl">
                  Your logo will be on all the training programSpeaking opportunity at the training program.Complimentary pass to the event on C20 working group Technology Security and Transparency (TST).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="bg-blue-950 text-white rounded-lg h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center text-2xl mb-4">CO-PARTNER</Card.Title>
                <Card.Text className="text-center text-2xl">
                  Your logo will be on all the training program Complimentary pass to the event on C20 working group Technology Security and Transparency (TST)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;
