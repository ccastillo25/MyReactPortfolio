import React, { Component } from 'react';
import Project from './Project';
import data from '../data';

class Portfolio extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>Portfolio.</h1>
        <div className='portoflio-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Portfolio;