import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img id='ZinkyLogo'
            src="ZinkyLogo2.png"
            width="90`"
            height="80"
            className="d-inline-block align-top"
            alt="Zinkyslogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#grooming">Grooming</Nav.Link>
            <Nav.Link href="#daycare">Doggy Daycare</Nav.Link>
            <Nav.Link href="#boarding">Boarding</Nav.Link>
            <Nav.Link href="#pricelist">Full Price List</Nav.Link>
            <Nav.Link href="#requirements">Requirements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

export default App;