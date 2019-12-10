import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grooming.css';
import Zinkys13 from './Images/Zinkys13.jpg';
import Zinkys14 from './Images/Zinkys14.jpg';


class Grooming extends Component {
    render() {
        return (
            <div>
                <h1 id='groomingTitle'>Grooming Rates</h1>

                <p id='groomingDescription'>Let us pamper your pup. We will leave your pups shinny and smelling fresh!
                </p>

                <Row>
                    <Col>

                        <h3 id='fullGroom'>Full Groom</h3>
                        <p>Small Dogs --- $35.00</p>
                        <p>Medium Dogs --- $40.00</p>
                        <p>Large Dogs --- $45.00</p>
                        <p>XL Dogs --- $60.00</p>

                    </Col>

                    <Col>
                        <h2 id='bathOnly'>Baths Only</h2>
                        <p>Small Dogs --- $15.00</p>
                        <p>Medium Dogs --- $20.00</p>
                        <p>Large Dogs --- $22.00</p>
                        <p>XL Dogs --- $30.00</p>
                    </Col>
                    <Col>
                        <h2 id='nailsClipped'>Nails Clipped</h2>
                        <p>All Dogs --- $10.00</p>
                        <h2 id='nailsClipped'>Matted Fur</h2>
                        <p>All Dogs --- $10.00</p>
                    </Col>
                </Row>

                <div className='picDiv'>
                <img src={Zinkys13} height="200" width="250" id="pic"></img>
                <img src={Zinkys14} height="200" width="250" id="pic2"></img>
                </div>
            </div>
        );
    }
}

export default Grooming;