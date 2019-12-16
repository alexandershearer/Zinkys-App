import React, { Component } from 'react';
import './Boarding.css';
import Zinkys30 from './Images/Zinkys30.jpg'
import Zinkys22 from './Images/Zinkys22.jpg'
import Zinkys11 from './Images/Zinkys11.jpg'


class Boarding extends Component {
    render() {
        return (
            <div id='Group'>
                <h1 id="boardingTitle">Boarding</h1>
            
                <br></br>
                <div id="div1">
                  We provide food and bedding for all of our visitors, but pup parents are more than welcome to bring any bedding, food or items you'd like for your pet to make them feel the most comfortable on their stay.
                </div>
                <img id='picOne' src={Zinkys30} /> 
                <img id='picOne' src={Zinkys11} /> 
                <img id='picOne' src={Zinkys22} /> 

                <div id="div2">
                    <h3 id="pricesTitle">Prices</h3>
                <p>Small Dogs --- $21.00 per night</p>
                <p>Large Dogs --- $24.00 per night</p>
                <p id="fortyOff">If you board more than one dog with us at a time, you automatically get 40% off of your total price!</p>
                </div>
                <div id="div3">
                    <p>
                        Daycare is included in our boarding price. 
                        Please visit our requirements tab to see how to get your pup booked.
                    </p>
                </div>
            </div>
            
        );
    }
}

export default Boarding;