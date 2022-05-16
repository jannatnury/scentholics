import React from 'react';
import { Link } from 'react-router-dom';
import './MyCard.css';

const MyCard = ({ card }) => {
    const { name, img, details,supplier,price } = card;

    return (
        <div className='col-lg-4 col-sm-12 mt-3 h-100'>
            <div className='p-3 h-100'>
                <div className=" shadow row justify-content-between align-items-center  h-100">
                    <div>
                        <img src={img} className="card-img" alt="card image" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-secondary font-monospace">{name}</h5>
                        <p>Suppier : <span className='fw-bold'>{supplier}</span> </p>
                        <p className="card-text">{details}</p>
                        <p>Price: <span className='fw-bold'>{price}</span></p>
                        <button className='button px-3 py-2' type="submit">
                            <Link to="/checkout">Update</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCard;