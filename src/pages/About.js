import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation'
import Carroussel from '../components/Carrousel'

const About = () => {
    return (
        <div className="container">
            <Navigation  />
            <h1>A propos</h1>
            <br/>
            <Carroussel />
            <br/>
            <p>
                hi
            </p>
        </div>
    );
};

export default About;