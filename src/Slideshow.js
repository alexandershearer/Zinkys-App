import React, { Component } from 'react';
import './Slideshow.css';
import Carousel from 'react-bootstrap/Carousel';
import Zinkys34 from './Images/Zinkys34.jpg';
import Zinkys32 from './Images/Zinkys32.jpg';
import Zinkys33 from './Images/Zinkys33.png';
import Zinkys24 from './Images/Zinkys24.jpg';
import Zinkys25 from './Images/Zinkys25.jpg';
import Zinklys3 from './Images/Zinklys3.jpg';
import Zinkys8 from './Images/Zinkys8.jpg';
import Zinkys9 from './Images/Zinkys9.jpg';
import Zinkys19 from './Images/Zinkys19.jpg';

class Slideshow extends Component {
    render() {
        return (
            <Carousel id='fullCarousel'>
                <Carousel.Item>
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys34}
                        alt="First slide"
                    />
                    <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys32}
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
                       <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys24}
                        alt="Second slide"
                    />
                       <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys8}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id="carouselImg"

                        className="d-center w-25"
                        src={Zinklys3}
                        alt="Third slide"
                    />
                       <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys19}
                        alt="Third slide"
                    />
                       <img id= "carouselImg"
                        className="d-center w-25"
                        src={Zinkys9}
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
