import React from 'react';
import Navbar from '../Navber/Navbar';
import './Header.css';
import logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className='nav-container px-3  p-2'>
            <img className='logo' src={logo} alt="" />
            <Navbar></Navbar>
        </div>
    );
};

export default Header;