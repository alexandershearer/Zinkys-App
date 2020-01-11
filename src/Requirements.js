import React, { Component } from 'react';
import Zinkys21 from './Images/Zinkys21.jpg';
import './Requirements.css';
import Logo from './Images/Logo.png';


class Requirements extends Component {
    render() {
        return (
            <div>
                 <h1 className='titleReq'> Requirements </h1>
                 
                <h3 className='vaccTitle'>Vaccinations</h3>
                
                    <ul className='reqList'> 
                    <li>-Rabies</li>
                    <li>-Bordetella (kennel cough)</li>
                    <li>-DHPP</li>
                    </ul>

                <h3 className='tempTest'>Temperament Test</h3>
                <p className='par'>  Every pup is required to go through a temperament test before joining our other visitors. This ensures the safety of every pup in our facility. Our trained staff will do a test to measures your dog's reaction or behavior to various elements presented to them. After they are cleared, they get to join the party! Don't worry, if your pup doesn't pass, there is still a place for them at Zinky's. We have seperate rooms for our special pups who don't feel like playing with the other pups. They will still get plenty of attention from our staff!
                 </p>

                 <img src={Zinkys21} id="img"></img>
                
            </div>
        );
    }
}

export default Requirements;