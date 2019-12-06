import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img id='gssLogo'
            src="Zinkys.png"
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="GSS logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#upcoming">Grooming</Nav.Link>
            <Nav.Link href="#past">Doggy Daycare</Nav.Link>
            <Nav.Link href="#schedule">Boarding</Nav.Link>
            <Nav.Link eventKey={2} href="#about">Full Price List</Nav.Link>
            <Nav.Link href="#schedule">Requirements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
