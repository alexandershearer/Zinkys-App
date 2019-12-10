import React, { Component } from 'react';
import './home.css';
import './Slideshow';
import Carousel from './Slideshow';



class Home extends Component {
    render() {
        return (
            <div className='homeLayout'>

            <Carousel />
            <h1 id='homeTitle'>Only the best for your pets!</h1>
            <p>Hate leaving your pup at home alone all day when you leave for work? Is the weather bad and you can't take them for a walk? Then bring them on in to our doggy daycare program where he/she can play with other pups while getting the exercise they need and getting extra lovings from humans all day! At Zinky's, your fur baby will not be cooped up in a kennel all day, they'll be in one of our two play areas! We have an outside play area if weather permits, or an indoor play area for those cold and/or rainy days. Play areas are also seperated by the size of your pup, we keep the small dogs together and the big dogs together. </p>


            <p>Our trained staff makes sure every dog gets the attention they deserve. We want every dog to feel loved and safe when they visit Zinky's. To ensure the safety of our visitors, we will first do a temperament test with your pet. After he/she passes the test, they will get placed in the correct play area. From there, a staff member will watch and play with the dogs all day. Simple as that!</p>
              
          </div>
        );
    }
}

export default Home;