import React, { Component } from 'react';
import data from '../data';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <h1>About</h1>
            <h2>{data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}</h2>
            
            
            <h3>{data.abouttext}</h3>

        </div>  );
    }
}
 
export default About;