import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<nav>
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="home"
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="portfolio"
                >Portfolio</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                >Contact</Link></li>
                <li><a href="https://docs.google.com/document/d/1jtBDalymGFOpmtIFjUiQm3h_oMbY-F4PIOSgTR2LOng/edit?usp=sharing" alt="resume"
                >Resume</a></li>
            </ul>
        </nav> );
    }
}
 
export default Navbar;