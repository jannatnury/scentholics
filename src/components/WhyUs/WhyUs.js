import React from 'react';
import './WhyUs.css';
import pic from '../../assets/image/ques.svg';

const WhyUs = () => {
    return (
        <div>
            <h2 className='title font-monospace mt-4'>Why Choose Us</h2>
            <div className='why-us'>
                <div>
                    <img className='img-fluid ques-img' src={pic} alt="" />
                </div>
                <div className="list-container">
                    <li> 100% Satisfaction Guarantee</li>
                    <li> Free Shipping</li>
                    <li> Free Frame Customiztion</li>
                    <li> Exceptional Customer Service</li>
                    <li> Top-Level Quality Control</li>
                    <li> 1M+ Happy Customers</li>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;