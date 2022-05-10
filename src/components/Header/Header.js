import React from 'react';
import Navbar from '../Navber/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-container px-3 bg-light p-2'>
            <h3 className='fw-bolder p-2 font-monospace title'>Scentaholics</h3>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;