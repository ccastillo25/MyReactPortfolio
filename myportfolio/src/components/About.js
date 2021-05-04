import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">

                    <div className="three columns">

                        <img className="profile-pic" src="myportfolio\src\images\myImage.jpg" alt="my photo" />

                    </div>

                    <div className="nine columns main-col">

                        <h2>About Me</h2>
                        <p>
                            My name is Carlos Castillo. I'm 28 years old, I was born in Los Angeles, California. I love to work out and
                            watch sports, baseball being my favorite sport of all with the Dodgers being my favorite team. I am
                            currently a
                            student at UCSD extension for coding, on my journey to begin a career as a web developer.
                            I have always been driven by my competitive spirit, and always wanting to be the best, and I will
                            strive
                            everyday to become the very best web developer I know I can be.
               </p>

                        <div className="row">

                            <div className="columns contact-details">

                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>
                                        {resumeData.address}
                                    </span>
                                    <br></br>
                                    <span>{resumeData.website}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}