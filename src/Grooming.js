import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Grooming extends Component {
    render() {
        return (
            <div>
                <h1>Grooming</h1>
                <p>
                    Let us pamper your pup. We will leave your pups shinny and smelling fresh!
                </p>
                <Row>
             <Col>
                
                <h2>Grooming Rates</h2>
                <h3>Full Groom</h3>
                <p>Small Dogs --- $35.00</p>
                <p>Medium Dogs --- $40.00</p>
                <p>Large Dogs --- $45.00</p>
                <p>XL Dogs --- $60.00</p>
                
            </Col>

            <Col>
                <h2>Baths Only</h2>
                <p>Small Dogs --- $15.00</p>
                <p>Medium Dogs --- $20.00</p>
                <p>Large Dogs --- $22.00</p>
                <p>XL Dogs --- $30.00</p>
            </Col>
            <Col>
                <h2>Nails Clipped</h2>
                <p>All Dogs --- $10.00</p>
                <h2>Matted Fur</h2>
                <p>All Dogs --- $10.00</p>
            </Col>
        </Row>
       
            </div>
        );
    }
}

export default Grooming;