import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div>
            <h2 className='title-wu font-monospace mt-4'>Why Choose Us</h2>
            <div className='why-us bg-info'>
                <div className='container-img'>
                    <img src="https://winsomecomputermedia.com/assets/img/why.jpg" alt="" />
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