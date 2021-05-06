import React, { Component } from 'react';
import data from '../data'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <header>
                <h1>
                    {data.name}
                </h1>
            </header>
            <p className='header-title'>
                {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                {data.headerTagline[2]}
            </p>



        </div>);
    }
}

export default Header;