import React, { useEffect, useState } from 'react';
import Card from '../Card/MyCard';
import './Collection.css';

const Collections = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div>
            <h2 className='popular-cl font-monospace fw-bold my-4'>Popular Perfumes</h2>
            <div className='card-container mt-3'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>

    );
};

export default Collections;