import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className='ms-auto'>
          <Nav.Link><Link to="./card">Card</Link></Nav.Link>
          <Nav.Link  href="https://github.com/IT21020544/AF-Lab08/tree/exercise_01">Github</Nav.Link>
          <Nav.Link  href="https://www.linkedin.com/notifications/?filter=all">LinkedIn</Nav.Link>
          <Nav.Link  href="#about">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
