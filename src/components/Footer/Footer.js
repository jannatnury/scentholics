import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        // footer 
        <div className='footer-container'>
           <div className="col-sm-12 col-lg-4 mt-3 order-sm-last order-lg-first">
               <h5>Scentaholics</h5>
               <p>Scentaholics.Inc.provides great deals on our huge collection of perfumes, with unique fragrance, fast shipping, free returns options you'll love</p>
               <p>Copyright 2022,Jannat Nury</p>
               <p className='text-danger'>Desclaimer.Terms and Conditions.Privacy Policy.</p>
           </div>
           <div className="col-sm-12 col-lg-4 mt-0 order-sm-first order-lg-2">
               <h5>Quick Links</h5>
               <Link to="/*">Payment Options</Link>
               <Link to="/*">FAQ </Link>
               <Link to="/*">Feedback</Link>
               <Link to="/*">Return Policy</Link>
           </div>
           <div className="col-sm-12 col-lg-4 mt-3 order-sm-2 order-lg-last">
               <h5>Contract with us</h5>
               <p>Address : 141,Jannt Nury Street, <br /> Dhaka,Bangladesh</p>
               <p>Contract us : +0880123456789</p>
               <h6>Get Best Offers</h6>
               <input className='bg-white rounded-3 input-field' type="text" />
               <button className='button' type="submit">Subscribe</button>

           </div>
        </div>
    );
};

export default Footer;