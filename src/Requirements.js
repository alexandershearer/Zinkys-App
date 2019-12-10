import React, { Component } from 'react';
import Zinkys21 from './Images/Zinkys21.jpg';
import './Requirements.css';

class Requirements extends Component {
    render() {
        return (
            <div>
                
                <h1> <img src={Zinkys21} height="250" width="230" align="left" id="pic"></img> Requirements</h1>
                <h3>Vaccinations</h3>
                
                    <ul>
                    <li>Rabies</li>
                    <li>Bordetella (kennel cough)</li>
                    <li>DHPP</li>
                    </ul>
                
                <h3>Temperament Test</h3>
                <p>Every pup is required to go through a temperament test before joining our other visitors. This ensures the safety of every pup in our facility. Our trained staff will do a test to measures your dog's reaction or behavior to various elements presented to them. After they are cleared, they get to join the party! Don't worry, if your pup doesn't pass, there is still a place for them at Zinky's. We have seperate rooms for our special pups who don't feel like playing with the other pups. They will still get plenty of attention from our staff! </p>
            </div>
        );
    }
}

export default Requirements;