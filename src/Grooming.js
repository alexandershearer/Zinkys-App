import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grooming.css';
import Zinkys13 from './Images/Zinkys13.jpg';
import Zinkys14 from './Images/Zinkys14.jpg';
import './Requirements.css';



class Grooming extends Component {
    render() {
        return (
            <div id='Body2'>
                <h1 id='groomingTitle'>Grooming Rates</h1>

                <p id='groomingDescription'>Let us pamper your pup. We will leave your pups shinny and smelling fresh!
                </p>

                <Container id="groomRates">

                <Row>
                    <Col id='col1'>

                        <h2 id='Head'>Full Groom</h2>
                        <p>Small Dogs --- $35.00</p>
                        <p>Medium Dogs --- $40.00</p>
                        <p>Large Dogs --- $45.00</p>
                        <p>XL Dogs --- $60.00</p>

                    </Col>

                    <Col id='col2'>
                        <h2 id='Head'>Baths Only</h2>
                        <p>Small Dogs --- $15.00</p>
                        <p>Medium Dogs --- $20.00</p>
                        <p>Large Dogs --- $22.00</p>
                        <p>XL Dogs --- $30.00</p>
                    </Col>
                    <Col id='col3'>
                        <h2 id='Head'>Nails Clipped</h2>
                        <p>All Dogs --- $10.00</p>
                        <h2 id='Head'>Matted Fur</h2>
                        <p>All Dogs --- $10.00</p>
                    </Col>
                </Row>

                </Container>

                <div className='picDiv'>
                <img src={Zinkys13} height="200" width="250" id="pic"></img>
                <img src={Zinkys14} height="200" width="250" id="pic2"></img>
                </div>
            </div>
        );
    }
}

export default Grooming;