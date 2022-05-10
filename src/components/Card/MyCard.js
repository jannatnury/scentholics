import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCard = ({ card }) => {
    const { name, img, details } = card;

    return (
        <div>
            <div className=''>
                <Card className='single-card shadow d-block mx-auto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='tanmay' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to="/sign-in"><Button id='card-button'>View Stock</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default MyCard;