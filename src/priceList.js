import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './pricelist.css';

class PriceList extends Component {
    render() {
        return (
            <Container className='text'>
                <div>
                    <h1 className='title'>Price List</h1>
                </div>
        <Row>
             <Col id='box'>
                
                <h2 id='priceHeader'>Grooming Rates</h2>
                <h3>Full Groom</h3>
                <p id='ptext'>Small Dogs --- $35.00</p>
                <p>Medium Dogs --- $40.00</p>
                <p>Large Dogs --- $45.00</p>
                <p>XL Dogs --- $60.00</p>
                
            </Col>

            <Col id='box'>
                <h2 id='priceHeader'>Baths Only</h2>
                <p>Small Dogs --- $15.00</p>
                <p>Medium Dogs --- $20.00</p>
                <p>Large Dogs --- $22.00</p>
                <p>XL Dogs --- $30.00</p>
            </Col>
            <Col id='box'>
                <h2 id='priceHeader'>Nails Clipped</h2>
                <p>All Dogs --- $10.00</p>
                <h2 id='priceHeader'>Matted Fur</h2>
                <p>All Dogs --- $10.00</p>
            </Col>
        </Row>
        <Row>
            <Col id='box'>
                <h3>Daycare Services</h3>
                <p>Per Day --- $16.00</p>
                <p>5 Day Pass --- $75.00</p>
                <p>7 Day Pass --- $101.50</p>
                <p>10 Day Pass --- $140.00</p>
                <p>20 Day Pass --- $260.00</p>
            </Col>
            

            <Col id='box'>
                <h1>Boarding <h3>(Inclues Daycare)</h3></h1>
                <p>Small Dogs --- $21.00 per night</p>
                <p>Large Dogs --- $24.00 per night</p>
            </Col>
        </Row>
</Container>
         
        );
    }
}

export default PriceList;