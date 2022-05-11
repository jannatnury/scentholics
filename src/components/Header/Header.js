import React from 'react';
import Navbar from '../Navber/Navbar';
import './Header.css';
import logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className='nav-container  p-2 container'>
            <img className='logo' src={logo} alt="" />
            <Navbar></Navbar>
        </div>
    );
};

export default Header;