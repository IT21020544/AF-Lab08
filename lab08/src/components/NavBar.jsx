import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Link  className="mr-3" href="https://react.dev/learn/tutorial-tic-tac-toe">React</Nav.Link>
          <Nav.Link  className="mr-3" href="https://github.com/IT21020544/AF-Lab08/tree/exercise_01">Github</Nav.Link>
          <Nav.Link  className="mr-3" href="#https://www.linkedin.com/notifications/?filter=all">LinkendIn</Nav.Link>
          <Nav.Link  className="mr-3" href="#about">About</Nav.Link>
        </Nav>
    </Navbar>
    </div>
  )
}
