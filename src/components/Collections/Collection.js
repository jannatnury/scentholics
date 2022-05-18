import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../MyCard/MyCard';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Collection.css';

const Collections = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div className='container mb-3'>
            <PageTitle title="gallery"></PageTitle>
            <h2 className='popular-cl font-monospace fw-bold my-4'>Our Collections</h2>
            <div className='row g-4'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>

    );
};

export default Collections;