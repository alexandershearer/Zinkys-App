import React, { Component } from 'react';
import './Boarding.css';

class Boarding extends Component {
    render() {
        return (
            <div>
                <h1 id="boardingTitle">Boarding</h1>
                <div id="div1">
                    Here at Zinky's, we treat your furbabies like we would our own, we like every pet to feel like family! We would never want our own babies to sit in a kennel alone all day. For this reason, we kennel our visitors the least amount of time possible. While we do have dsesignated naptime and bedtime, other than that, your beloved pet will be running free and playing with other pups on their visit with us. We have naptime so our visitors don't get overstimulated and we also use this as time for their morning meal. At bedtime, your pup will get their dinner and rest all night until our staff returns first thing in the morning. 
                </div>
                <br></br>
                <div id="div2">
                    We encourage our pup parents to call and check on their baby whenever they want. Our staff is great at sending pictures and updates whenever requested by the owner! We also provide food and bedding for all of our visitors, but pup parents are more than welcome to bring any bedding, food or items you'd like for your pet to make them feel the most comfortable on their stay.
                </div>
                <div id="div3">
                    <h3 id="pricesTitle">Prices</h3>
                <p>Small Dogs --- $21.00 per night</p>
                <p>Large Dogs --- $24.00 per night</p>
                <p id="fortyOff">If you board more than one dog with us at a time, you automatically get 40% off of your total price!</p>
                </div>
                <div id="div4">
                    <p>
                        Daycare is included in our boarding price. This means your pup will be playing with not only the other boarding pups, but the pups who come in for Doggy Daycare. Please visit our requirements tab to see how to get your pup booked.
                    </p>
                </div>
            </div>
            
        );
    }
}

export default Boarding;