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
    button: "Partnership",
  },
  {
    id: "#calender",
    button: "Calendar",
  },
  {
    id: "#commitment",
    button: "Commitments",
  },
  {
    id: "#about",
    button: "About",
  }
];

const Header = () => {
  return (
    <Navbar expand="md" className="header">
      <Container>
        <Navbar.Brand href="https://www.g20.org/en/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items ms-auto">
            {buttonsid.map((button) => (
              <Nav.Link href={button.id} className="nav-link mx-2" key={button.id}>
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
