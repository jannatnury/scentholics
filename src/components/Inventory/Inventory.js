import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Inventory = () => {

      const [cards,setcards]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setcards(data))
    },[])
    const handleDelete=id=>{
      // const {id}=useParams()
      const confirm=window.confirm('Areyou want to delete')
      if(confirm){
          console.log("id",id);
          const url=`https://lit-shelf-48296.herokuapp.com/car/${id}`
          fetch(url,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount>0){

                  const remainingCar=cards.filter(card=>card._id!==id)
                  setcards(remainingCar)
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
                                <td><button onClick={() => handleDelete(card._id)} type="button" class="btn btn-outline-dark">Delete</button></td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;