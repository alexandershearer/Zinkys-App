import React, { Component } from 'react';
import './home.css';
import './Slideshow';
import Carousel from './Slideshow';
import HomeImage from './Images/zinkys_home.png';



class Home extends Component {
    render() {
        return (
            <div className='homeLayout'>

                <div id='mainImage' style = {{height:"100vh"}}>
                    <div id='layer' />
                    <img id='landing' src={HomeImage} />
                </div>

            <Carousel />
            <h1 id='homeTitle'>Only the best for your pets!</h1>
            <p className="topPar">Hate leaving your pup at home alone all day when you leave for work? Is the weather bad and you can't take them for a walk? Then bring them on in to our doggy daycare program where he/she can play with other pups while getting the exercise they need and getting extra lovings from humans all day! At Zinky's, your fur baby will not be cooped up in a kennel all day, they'll be in one of our two play areas! We have an outside play area if weather permits, or an indoor play area for those cold and/or rainy days. Play areas are also seperated by the size of your pup, we keep the small dogs together and the big dogs together. </p>


            <p className="bottomPar">Our trained staff makes sure every dog gets the attention they deserve. We want every dog to feel loved and safe when they visit Zinky's. To ensure the safety of our visitors, we will first do a temperament test with your pet. After he/she passes the test, they will get placed in the correct play area. From there, a staff member will supervise and play with the dogs all day. Simple as that!</p>
              
            <br></br>
            <br></br>
            <p id="p2">To make life easier for our pup parents, Zinky's offers pick-up and drop-off 7 days a week! We also offer grooming on Saturdays from 8:00am-12:00pm. Below is our normal business hours: </p>

            <h3 id='hours'>Hours of Operation</h3>
            <ul id="List">
                <li>Monday: 8:00am-7:00pm</li>
                <li>Tuesday: 8:00am-7:00pm</li>
                <li>Wednesday: 8:00am-7:00pm</li>
                <li>Thursday: 8:00am-7:00pm</li>
                <li>Friday: 8:00am-7:00pm</li>
                <li>Saturday: 8:00am-12:00pm -Break- 4:00pm-7:00pm</li>
                <li>Sunday: 4:00pm-7:00pm</li>
                <br></br>
            </ul>
          </div>
        );
    }
}

export default Home;