import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-text m-lg-5 d-flex flex-column '>
                <p>Buy now and get upto <span className='text-danger fw-bold'>20%</span> discount. </p>
                <h1>Get Your Favourite Perfume <br /> And Smell <span className='text'>Unforgettable</span> </h1>
                <p>Perfume is the key to our memories.Buy your perfume for making memory speek.A perfume for you, is a mystique.</p>
                <button className='button p-2 px-3 fw-bold'>See More</button>

            </div>
            <div className='img-container'>
                <img src="https://media.allure.com/photos/614351d3934fb87214166c42/1:1/w_1196,h_1196,c_limit/Yves%20Saint%20Laurent%20Mon%20Paris.jpeg{perfume}" alt="" />
            </div>
        </div>
    );
};

export default Banner;