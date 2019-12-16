import React, { Component } from 'react';
import './home.css';
import './Slideshow';
import Carousel from './Slideshow';
import HomeImage from './Images/zinkys_home.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




class Home extends Component {
    render() {
        return (
            <div className='homeLayout'>

                <div id='mainImage' style = {{height:"85vh"}}>
                    <div id='layer' />
                    <img id='landing' src={HomeImage} />
                    <h1 id='slogan'>Only the best for your pets!</h1>
                </div>

                <h1 id='homeTitle'>Only the best for your pets!</h1>

            <Carousel />
            
         {/* <p className="topPar">Hate leaving your pup at home alone all day when you leave for work? Is the weather bad and you can't take them for a walk? Then bring them on in to our doggy daycare program where he/she can play with other pups while getting the exercise they need and getting extra lovings from humans all day! At Zinky's, your fur baby will not be cooped up in a kennel all day, they'll be in one of our two play areas! We have an outside play area if weather permits, or an indoor play area for those cold and/or rainy days. Play areas are also seperated by the size of your pup, we keep the small dogs together and the big dogs together. </p> */}


            {/* <p className="bottomPar">Our trained staff makes sure every dog gets the attention they deserve. We want every dog to feel loved and safe when they visit Zinky's. To ensure the safety of our visitors, we will first do a temperament test with your pet. After he/she passes the test, they will get placed in the correct play area. From there, a staff member will supervise and play with the dogs all day. Simple as that!</p> */}
              
            <br></br>
            <br></br>
            {/* <p id="p2">To make life easier for our pup parents, Zinky's offers pick-up and drop-off 7 days a week! We also offer grooming on Saturdays from 8:00am-12:00pm. Below is our normal business hours: </p> */}

            <Container className='text'>
                <div>
                    <h1 className='title'>Price List</h1>
                </div>
        <Row id="row">
             <Col id='box1'>
                
                <h3 id='priceHeader'>Full Groom</h3>
                <p id='ptext'>Small Dogs --- $35.00</p>
                <p>Medium Dogs --- $40.00</p>
                <p>Large Dogs --- $45.00</p>
                <p>XL Dogs --- $60.00</p>
                
            </Col>

            <Col id='box2'>
                <h2 id='priceHeader'>Baths Only</h2>
                <p>Small Dogs --- $15.00</p>
                <p>Medium Dogs --- $20.00</p>
                <p>Large Dogs --- $22.00</p>
                <p>XL Dogs --- $30.00</p>
            </Col>
            <Col id='box3'>
                <h2 id='priceHeader'>Nails Clipped</h2>
                <p>All Dogs --- $10.00</p>
                <h2 id='priceHeader'>Matted Fur</h2>
                <p>All Dogs --- $10.00</p>
            </Col>
        </Row>
        <Row id="row">
            <Col id='box4'>
                <h3 id="priceHeader">Daycare Services</h3>
                <p>Per Day --- $16.00</p>
                <p>5 Day Pass --- $75.00</p>
                <p>7 Day Pass --- $101.50</p>
                <p>10 Day Pass --- $140.00</p>
                <p>20 Day Pass --- $260.00</p>
            </Col>
            

            <Col id='box5'>
                <h1 id="priceHeader">Boarding</h1> <h3 id='priceHeader1'>(Inclues Daycare)</h3>
                <p>Small Dogs --- $21.00 per night</p>
                <p>Large Dogs --- $24.00 per night</p>
            </Col>
        </Row>
</Container>

            
          </div>
        );
    }
}

export default Home;