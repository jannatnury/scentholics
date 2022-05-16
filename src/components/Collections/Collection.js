import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className='container'>
            <h2 className='popular-cl font-monospace fw-bold my-4'>Popular Perfumes</h2>
            <div className='row g-4'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <Link to="/*">
                <button className='intntory-btn p-3 fw-bold' type="submit">Manage Inventories</button>
            </Link>
        </div>

    );
};

export default Collections;