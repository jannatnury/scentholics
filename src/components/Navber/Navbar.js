import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/galery">Gallery</Link>
                <Link to="/blogs">Blogs</Link>
                <Link className='sign-in p-1 px-1' to="/sign-in">Sign In</Link>
            </nav>
        </div>
    );
};

export default Navbar;