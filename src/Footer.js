import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div>
                    <p>102 W Cherry St. Glasgow, KY 42141</p>
                </div>
                <div>
                    {/* <img class="fas fa-phone" style='font-size:20px;color:#007bff;margin: 5px;'></img> */}
                    <p>(270) 629-3436</p>
                </div>
            </div>

        );
    }
}

export default Footer;