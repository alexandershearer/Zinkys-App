import React, { Component } from 'react';
import './Slideshow.css';
import Carousel from 'react-bootstrap/Carousel';
import Zinkys30 from './Images/Zinkys30.jpg';
import Zinkys31 from './Images/Zinkys31.jpg';
import Zinkys33 from './Images/Zinkys33.jpg';
import Zinkys24 from './Images/Zinkys24.jpg';
import Zinkys25 from './Images/Zinkys25.jpg';

class Slideshow extends Component {
    render() {
        return (
            <Carousel id='fullCarousel'>
                <Carousel.Item>
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys30}
                        alt="First slide"
                    />
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys31}
                        alt="First slide"
                    />
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys33}
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
