import React, { useEffect, useState } from 'react';
import MyCard from '../MyCard/MyCard';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Collection.css';

const Collections = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/product')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    console.log(cards);
    return (
        <div className='container mb-3'>
            <PageTitle title="Gallery"></PageTitle>
            <h2 className='popular-cl font-monospace fw-bold my-4'>Our Collections</h2>
            <div className='row g-4'>
                {
                    cards.map(card => <MyCard key={card.id} card={card}></MyCard>)
                }
            </div>
        </div>

    );
};

export default Collections;