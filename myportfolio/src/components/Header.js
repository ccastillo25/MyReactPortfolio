import React, { Component } from 'react';
import data from '../data'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <h1 className='heading-background'>C NEILL</h1>
            <header>
                <h1>
                    {data.name}
                </h1>
            </header>
            <p className='header-title'>
                {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                {data.headerTagline[2]}
                <br></br>
                <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                <button><a href={`${data.resume}`} rel="noopener noreferrer" >Resume</a></button>
            </p>



        </div>);
    }
}

export default Header;