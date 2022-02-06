import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <footer className='w-100 bg-light text-center py-2 position-fixed bottom-0'>
                <p className='m-0 form-text'>© {new Date().getFullYear()} React Bootstrap. All Rights Reserved | <NavLink to='/' className='link-secondary text-decoration-none'>Terms and Condition</NavLink>  </p>
            </footer>
        </>
    );
}

export default Footer;