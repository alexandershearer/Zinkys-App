import React, { Component } from 'react';
import './doggyDaycare.css';
import Zinkys26 from './Images/Zinkys26.jpg'
import Zinkys35 from './Images/Zinkys35.jpg'
import Zinkys31 from './Images/Zinkys31.jpg'
import Zinkys12 from './Images/Zinkys12.jpg'


class doggyDaycare extends Component {
    render() {
        return (
            <div>
                <h1 id='doggyTitle'>Doggy Daycare</h1>
                <div id='groupOne'>
                <p id="topPar">
                    We pride in our Doggy Daycare program at Zinky's. We hate to think of a pup sitting at home all day when they could be at Zinky's playing with their dog friends and getting some much needed exercise! We know people lead very busy lives, let us walk your pup and give him/her attention while you're off to work making money for all those treats you have to buy them! Have class in the morning? We offer half days of daycare too! We're here to meet your and your furbabies needs. 
                     </p>
                     <img id='pictureTwo' src={Zinkys31} />
                </div>
                <div id='groupTwo'>
                <img id='pictureThree' src={Zinkys26} />
                <p id="bottomPar">We love to be able to play outside with all of our visitors. We have two play areas outside, one for our small pups and the other for our large pups. But when it's too hot, too cold, or raining, we have two large play areas inside as well! Nothing will stop the fun here at Zinky's!</p>
                {/* <img id='pictureFour' src={Zinkys12} /> */}
                </div>
                <div id="prices">

                <p>Please visit our requirements tab to see how to get your pup enrolled!</p>
                    
                <h3>Daycare Services</h3>
                <p>Per Day --- $16.00</p>
                <p>5 Day Pass --- $75.00</p>
                <p>7 Day Pass --- $101.50</p>
                <p>10 Day Pass --- $140.00</p>
                <p>20 Day Pass --- $260.00</p>

                </div>
                
                
            </div>
        );
    }
}

export default doggyDaycare;