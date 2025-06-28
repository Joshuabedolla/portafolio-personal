import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

export default function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <BsNavbar.Brand as={Link} to="/">🎓 Mi Portafolio</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/sobre-mi">Sobre mí</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

