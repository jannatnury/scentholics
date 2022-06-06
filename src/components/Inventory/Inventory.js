import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Inventory = () => {

    const [cards, setcards] = useState([]);
    useEffect(() => {
        fetch('https://guarded-escarpment-61414.herokuapp.com/api/product')
            .then(res => res.json())
            .then(data => setcards(data))
    }, [])
    console.log(cards);
    const handleDelete = id => {
        // const {id}=useParams()
        const confirm = window.confirm('Are you want to delete');
        if (confirm) {
            axios.delete(`https://guarded-escarpment-61414.herokuapp.com/api/product/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Product Is Deleted Successfully!!");
                        const remainingOrders = cards.filter(product => product._id !== id);
                        setcards(remainingOrders);
                    }
                })
        }
    }

    return (
        <div className='container  my-4'>
            <PageTitle title="Inventory"></PageTitle>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cards.map(card =>

                            <tr
                                key={card._id}
                            >
                                <td>{card.name}</td>
                                <td>{card.quantity}</td>
                                <td><button onClick={() => handleDelete(card._id)} type="button" className="btn btn-outline-dark">Delete</button></td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;