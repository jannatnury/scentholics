import React, { useEffect, useState } from 'react';
import Card from '../Card/MyCard';
import './Collection.css';

const Collections = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data));
    },[]);
    return (
        <div className='card-container'>
           {
               cards.map(card=> <Card key={card.id} card={card}></Card>)
           }
        </div>
    );
};

export default Collections;