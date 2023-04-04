import React from 'react';
import '../styles/footer.css';
import { Container, Row, Col } from "react-bootstrap";

function handleClick_contribute() {
  window.location.href = 'https://traboda.com/';
}

const Footer = () => {
  return (
    <footer className='footer_container'>
<Container className='container-of'>
      <Row>
        <Col md={4}>
          <div className='col1'>Civil 20 Engagement Group provides a platform for Civil Society Organisations (CSO) worldwide to voice the people's aspirations with the world's leaders in G20.</div>
        </Col>
        <Col md={4}>
          <div><a href='https://c20.amma.org/edt-wg/'>Education and Digital Transformation</a></div>
        </Col>
        <Col md={4}>
          <div>Column 3</div>
        </Col>
      </Row>
    </Container>
      <div className='footer_item'>
        Funds will be collected and receipts disbursed through our partner entity – Traboda Solutions
      </div>

    </footer>
  );
};

export default Footer;
