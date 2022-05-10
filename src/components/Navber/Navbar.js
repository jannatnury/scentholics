import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
               <a href="">Home</a>
               <a href="">Gallery</a>
               <a href="">Blogs</a>
               <a className='sign-in p-1 px-1' href="">Sign In</a>
            </nav>
        </div>
    );
};

export default Navbar;