import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyCard = ({ card }) => {
    const { name, img, details } = card;

    return (
        <div>
            <div className='bg-danger'>
                <Card className='single-card bg-info' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Button id='card-button'>View Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default MyCard;