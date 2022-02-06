import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.svg';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-lg-0 py-2">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold" to='/'>
                        <img src={logo} className='img-fluid Main-logo' style={{ width: '3rem' }} alt='Logo' />
                        React Bootstrap</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_navigation">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' border-2 border-bottom active' : '')} to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' border-2 border-bottom active' : '')} to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' border-2 border-bottom active' : '')} to='/service'>Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' border-2 border-bottom active' : '')} to='/placeholder'>Placeholder</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' border-2 border-bottom active' : '')} to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;