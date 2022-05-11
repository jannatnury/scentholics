import React from 'react';
import './WhyUs.css';
import pic from '../../assets/image/ques.svg';

const WhyUs = () => {
    return (
        <div>
            <h2 className='title font-monospace mt-5 mb-0'>Why Choose Us</h2>
            <div className=' col-12 why-us container justify-content-evenly align-content-center mb-5 w-75'>
                <div className='col-sm-12 col-lg-6'>
                    <img className='img-fluid ques-img' src={pic} alt="" />
                </div>
                <div className="col-sm-12 col-lg-6 list-container">
                    <ul className='list'>
                        <li> 100% Satisfaction Guarantee</li>
                        <li> Free Shipping</li>
                        <li> Free Customiztion</li>
                        <li> Cash On Delivery</li>
                        <li> Money Back Guarantee On Conditions</li>
                        <li> Exceptional Customer Service</li>
                        <li> Top-Level Quality Control</li>
                        <li> 1M+ Happy Customers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;