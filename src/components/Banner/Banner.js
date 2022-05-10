import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import img from '../../assets/image/perfume.png'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-text d-flex flex-column ms-lg-5 col-lg-6 col-sm-12 order-sm-last order-lg-first'>
                <p className='mb-0'>We give upto <span className='text-danger fw-bold'>20%</span> discount on products. </p>
                <h1>Get Your Favourite Perfume <br /> And Smell <span className='text'>Unforgettable</span> </h1>
                <p className='font-monospace'>Perfume is the key to our memories.Perfume is the art that makes memory speek.You are never fully dressed without perfume..</p>
                <Link to="/gallery">
                    <button className='button p-2 px-3 fw-bold'>See More</button>
                </Link>

            </div>
            <div className='img-container  col-lg-6 col-sm-12 order-sm-first order-lg-last'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;