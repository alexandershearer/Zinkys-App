import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="info">
        <Navbar.Brand href="#home">
          <img id='gssLogo'
            src="GSS.png"
            width="100"
            height="75"
            className="d-inline-block align-top"
            alt="GSS logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#upcoming">Upcoming Events</Nav.Link>
            <Nav.Link href="#past">Past Events</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link eventKey={2} href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
