import React, { Component } from 'react';
import data from '../data';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
            Contact
        </h1>
        <div className='contact-content'>
                
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </div>);
    }
}
 
export default Contact;