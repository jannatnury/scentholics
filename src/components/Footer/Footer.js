import React from 'react';
import './Footer.css';
import logo from '../../assets/image/logo.png';
import { toast, ToastContainer } from 'react-toastify';

const Footer = () => {
    return (
        // footer 
        <div className='footer-container'>

            <div className='row d-flex container ms-auto'>
                <ToastContainer />
                <div className="col-sm-12 col-lg-6 mt-3 ">
                    <img className='logo' src={logo} alt="" />
                    <p>Scentaholics.Inc.provides great deals on our huge collection of perfumes, with unique fragrance, fast shipping, free returns options you'll love</p>
                    <p>Copyright <small><i class="fas fa-copyright"></i></small> 2022,Jannat Nury</p>
                    <p className='text-danger'>Desclaimer.Terms and Conditions.Privacy Policy.</p>
                </div>

                <div className="col-sm-12 col-lg-6 mt-3 align-items-center">
                    <h5>Contract with us</h5>
                    <p>Address : 141,Jannat Nury Street, <br /> Dhaka,Bangladesh</p>
                    <p>Contract us : +0880123456789</p>
                    <h6>Get Best Offers</h6>
                    <input className='bg-white rounded-3 input-field' type="email" name="" placeholder='Enter your email' required/>
                    <button onClick={() => toast.info("Thanks for subscribe")} className='button' type="submit">Subscribe</button>

                </div>
            </div>
        </div>
    );
};

export default Footer;