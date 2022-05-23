import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const PerfumeDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://guarded-escarpment-61414.herokuapp.com/api/products/${id}`)
        .then(res => res.json())
        .then(data=> setProduct(data))
    },[])
    const { name, img, details, supplier, price, quantity } = product;

    const handleStock =(e)=>{
        e.preventDefault();
        const id = product._id;
        const qtn = e.target.shipped.value
        const url = `https://guarded-escarpment-61414.herokuapp.com/api/product/stock/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: qtn })

        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct({ ...product, quantity: product.quantity = parseInt(product.quantity) + parseInt(qtn) });

    }

    const handleDeliver = ()=>{
        const id = product._id;
        const qtn = 1
        const url = `https://guarded-escarpment-61414.herokuapp.com/api/products/shipped/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: qtn })

        })
            .then(res => res.json())
            .then(data => console.log(data))
        setProduct({ ...product, quantity: product.quantity = product.quantity - qtn });
    }

    return (
        <div className='row container ms-auto my-5 m-auto d-flex align-items-center'>
            <PageTitle title="Perfume-details"></PageTitle>
            <div className="col-12 col-lg-6">
                <img src={img} alt="" />
            </div>
            <div className="col-12 col-lg-6 shadow p-4">
                <h2>Name:{name}</h2>
                <p>Quantity:{quantity}</p>
                <p>Supplier:{supplier}</p>
                <p>Price:{price}</p>
                <p>Details:{details}</p>
                <form onSubmit={handleStock}>
                <div className='mb-2'>
                    <label htmlFor='update'>Update Stock</label>
                    <div>
                        <input className='w-100'
                            type='text' name="shipped" placeholder='Enter number'
                            required
                        />
                    </div>
                </div>
                <input type="submit" className='btn btn-dark d-block w-100' value="update" />
                </form>
                <button onClick={handleDeliver} className='btn my-1 btn-dark d-block w-100'>Deliver</button>
            </div>
        </div>
    );
};

export default PerfumeDetails;