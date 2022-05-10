import React from 'react';
import Banner from '../Banner/Banner';
import Collections from '../Collections/Collection';
import Perfume from '../Collections/Perfume/Perfume';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <Perfume></Perfume>
        </div>
    );
};

export default Home;