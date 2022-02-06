import React from "react";
import About_us from './about_us.svg';
import Logo from './logo.svg';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                name='Welcome to About Page'
                imgsrc={Logo} imgsrc2={About_us}
                content={'We are the team of talented developer making website.'}
                visit='/contact'
                btname='Contact Now'
            />
        </>
    );
}


export default About;