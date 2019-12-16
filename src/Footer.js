import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div id='locationNum'>
                <a href='https://www.google.com/maps/dir/36.9803264,-85.9201536/102+W+Cherry+St,+Glasgow,+KY+42141/@36.9905984,-85.9275137,13.97z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88663dbd47831089:0xd112a5b52bcdc094!2m2!1d-85.9087639!2d37.0011152'>
                    <p className='addressName'>102 W Cherry St. Glasgow, KY 42141</p>
                </a>
                    {/* <img class="fas fa-phone" style='font-size:20px;color:#007bff;margin: 5px;'></img> */}
                    <p id='number'>(270) 629-3436</p>
                </div>

                <div id='hours' text-decoration= 'none'> 
                    
                    <ul>Mon-Fri: 8:00am-7:30pm</ul>
                    <ul>Sat 8:00am-12:00pm, 4:00pm-7:30pm</ul>
                    <ul>Sunday: 4:00pm-7:30pm</ul>
                </div>
            </div>

        );
    }
}

export default Footer;