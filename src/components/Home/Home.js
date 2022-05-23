import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import MyCard from '../MyCard/MyCard';
import Collections from '../Collections/Collection';
import Perfume from '../Collections/Perfume/Perfume';
import Customers from '../Customers/Customers';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';


const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://guarded-escarpment-61414.herokuapp.com/api/product')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div>
           <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <div className='container'>
                <h2 className='popular-cl font-monospace fw-bold my-4'>Popular Perfumes</h2>
                <div className='row g-4'>
                    {
                        cards.slice(0, 6).map(card => <MyCard key={card.id} card={card}></MyCard>)
                    }
                </div>
                <Link to="/inventory">
                    <button className=' p-2 fw-bold' type="submit">Manage Inventory</button>
                </Link>
            </div>
            <Perfume></Perfume>
            <WhyUs></WhyUs>
            <Customers></Customers>
        </div>
    );
};

export default Home;