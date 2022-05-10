import React from 'react';
import Banner from '../Banner/Banner';
import Collections from '../Collections/Collection';
import Perfume from '../Collections/Perfume/Perfume';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <Perfume></Perfume>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;