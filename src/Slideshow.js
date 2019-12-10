import React, { Component } from 'react';
import './Slideshow.css';
import Carousel from 'react-bootstrap/Carousel';
import Zinkys2 from './Images/Zinkys2.jpg'
import Zinkys25 from './Images/Zinkys25.jpg'
import Zinkys24 from './Images/Zinkys24.jpg'

class Slideshow extends Component {
    render() {
        return (
            <Carousel id='fullCarousel'>
                <Carousel.Item>
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys25}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id="carouselImg"
                        className="d-center w-25"
                        src={Zinkys24}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slideshow;
