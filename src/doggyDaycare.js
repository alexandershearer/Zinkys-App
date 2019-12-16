import React, { Component } from 'react';
import './doggyDaycare.css';
import Zinkys26 from './Images/Zinkys26.jpg'
import Zinkys35 from './Images/Zinkys35.jpg'
import Zinkys31 from './Images/Zinkys31.jpg'



class doggyDaycare extends Component {
    render() {
        return (
            <div>
                <h1 id='doggyTitle'>Doggy Daycare</h1>
                <div id='groupOne' >
                    
                <p id="topPar">
                    We pride in our Doggy Daycare program at Zinky's. We hate to think of a pup sitting at home all day when they could be at Zinky's playing with their dog friends and getting some much needed exercise! We know people lead very busy lives, let us walk your pup and give him/her attention while you're off to work making money for all those treats you have to buy them! 
                     </p>
                     
                      <img id='pictureOne' src={Zinkys26} /> 
                      <img id='pictureOne' src={Zinkys31} /> 
                      <img id='pictureOne' src={Zinkys35} /> 
                </div>
                

                {/* <img id='pictureFour' src={Zinkys12} />  */}
                
               <br></br>
                <div id="prices">

                
                <h3 id='daycareServices'>Daycare Services</h3>
                <p>Per Day --- $16.00</p>
                <p>5 Day Pass --- $75.00</p>
                <p>7 Day Pass --- $101.50</p>
                <p>10 Day Pass --- $140.00</p>
                <p>20 Day Pass --- $260.00</p>

                <h6 id='enrollment'>Please visit our requirements tab to see how to get your pup enrolled!</h6>
                    
                </div>
                
                
            </div>
        );
    }
}

export default doggyDaycare;