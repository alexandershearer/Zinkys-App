import React from 'react';
import './App.css';
import Grooming from './Grooming';
import Home from './Home';
import doggyDaycare from './doggyDaycare';
import Boarding from './Boarding';
import priceList from './priceList';
import Requirements from './Requirements';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Switch, Route, Link } from 'react-router-dom';
import Carousel from './Slideshow';




function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav.Link as={Link} to='/'>
          <Navbar.Brand>
            <img id='ZinkyLogo'
              src="ZinkyLogo2.png"
              width="90`"
              height="80"
              className="d-inline-block align-top"
              alt="Zinkyslogo"
            />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/grooming'>Grooming</Nav.Link>
            <Nav.Link as={Link} to='/doggydaycare'>Doggy Daycare</Nav.Link>
            <Nav.Link as={Link} to='/boarding'>Boarding</Nav.Link>
            <Nav.Link as={Link} to='pricelist'>Full Price List</Nav.Link>
            <Nav.Link as={Link} to='/requirements'>Requirements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
      <Carousel />

          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/grooming' component={Grooming} />
            <Route path='/doggydaycare' component={doggyDaycare} />
            <Route path='/boarding' component={Boarding} />
            <Route path='/pricelist' component={priceList} />
            <Route path='/requirements' component={Requirements} />
          </Switch>
      </div>

      </div>
  );

}

export default App;