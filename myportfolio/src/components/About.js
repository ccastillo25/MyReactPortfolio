import React, { Component } from 'react';
import data from '../data';

class About extends Component {
    state = {}
    render() {
        return (<div className='about'>
            <h1>
                {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
                </h1>
                <h3>About</h3>
            <h3>{data.abouttext}</h3>

        </div>);
    }
}

export default About;