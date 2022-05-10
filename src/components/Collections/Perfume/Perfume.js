import React from 'react';
import './Perfume.css';
import banner from '../../../assets/image/banner.jpg';

const Perfume = () => {
    return (
        <div className='perfume'>
            <center><h2 className='font-monospace'>Valentine's Day Special</h2></center>
            <img src={banner} alt="" />
        </div>
    );
};

export default Perfume;