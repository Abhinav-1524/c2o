import React from 'react';
import logo from '../images/logo-c20-amma.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "../styles/nav.css";

const buttonsid = [
  {
    id: "#benefits",
    button: "Benefits",
  },
  {
    id: "#partnership",
    button: "Why Partner With Us?",
  },
  {
    id: "#calender",
    button: "Calendar",
  },
  {
    id: "#commitment",
    button: "Our Commitments",
  },
  {
    id: "#about",
    button: "About",
  }
];

const Header = () => {
  return (
    <Navbar 
    expand="md" >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="pl-6" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {buttonsid.map((button) => (
              <Nav.Link href={button.id} className="mx-2" key={button.id}>
                {button.button}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
