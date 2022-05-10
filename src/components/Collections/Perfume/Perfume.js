import React from 'react';
import './Perfume.css';
import banner from '../../../assets/image/banner.jpg';

const Perfume = () => {
    return (
        <div className='perfume'>
            <center><h3 className='font-monospace'>Valentine's Day Special</h3></center>
            <img src={banner} alt="" />
        </div>
    );
};

export default Perfume;