import React, { Component } from 'react';
import CSS from './doggyDaycare.css';
import Zinkys4 from './Images/Zinkys4.jpg'

class doggyDaycare extends Component {
    render() {
        return (
            <div>
                <h1 id='doggyTitle'>Doggy Daycare</h1>
                <div id='groupOne'>
                <p>
                    We pride in our Doggy Daycare program at Zinky's. We hate to think of a pup sitting at home all day when they could be at Zinky's playing with their dog friends and getting some much needed exercise! We know people lead very busy lives, let us walk your pup and give him/her attention while you're off to work making money for all those treats you have to buy them! Have class in the morning? We offer half days of daycare too! We're here to meet your and your furbabies needs.
                </p>
                <img id='pictureOne' src={Zinkys4} />
                </div>
                <div id='groupTwo'>
                <p>We love to be able to play outside with all of our visitors. We have two play areas outside, one for our small pups and the other for our large pups. But when it's too hot, too cold, or raining, we have two large play areas inside as well! Nothing will stop the fun here at Zinky's!</p>
                <p>Please visit our requirements tab to see how to get your pup enrolled!</p>
                </div>
            </div>
        );
    }
}

export default doggyDaycare;