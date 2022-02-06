import React from 'react';
import UserLogo from './user_laptop.svg';
import Logo from './logo.svg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
            name='Grow your bussiness with' 
            imgsrc={Logo} imgsrc2={UserLogo}
            content={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
            visit='/service'
            btname='Get Started'
             />
        </>
    );
}


export default Home;