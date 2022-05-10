import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyCard = ({card}) => {
    const { name, img, details } = card;
    console.log(card);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button className='card-button' variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyCard;