import React, { Component } from 'react';
import './doggyDaycare.css';
import Container from 'react-bootstrap/Container'
import Carousel from './Slideshow';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class doggyDaycare extends Component {
    render() {
        return (
            <div>
                <h1 id='doggyTitle'>Doggy Daycare</h1>
                <div id='groupOne' >
                    
                <p id="topPar">
                    We pride in our Doggy Daycare program at Zinky's. We hate to think of a pup sitting at home all day when they could be at Zinky's playing with their dog friends and getting some much needed exercise! We know people lead very busy lives, let us walk your pup and give him/her attention while you're off to work making money for all those treats you have to buy them! 
                     </p>
                     
                     <Carousel />
                </div>
                
                
              <div id="Prices">
    
                <h3 id='daycareServices'>Daycare Services</h3>
                <p>Per Day --- $16.00</p>
                <p>5 Day Pass --- $75.00</p>
                <p>7 Day Pass --- $101.50</p>
                <p>10 Day Pass --- $140.00</p>
                <p>20 Day Pass --- $260.00</p>
                
            </div>

                <div>

                <h6 id='enrollment'>Please visit our requirements tab to see how to get your pup enrolled!</h6>
                    
                </div>
                
                </div>
            
        );
    }
}

export default doggyDaycare;