import React from 'react';
import './Items.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Items = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const supplier = e.target.supplier.value;
        const url = 'http://localhost:5000/api/product';

        console.log(name, image, price, supplier, quantity);
        // fetch format
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name,price,image,supplier,quantity
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
            e.target.reset();
    }

    return (
        <div className='container my-3'>
            <PageTitle title='Items'></PageTitle>
            <form onSubmit={handleAddProduct} className='w-75 m-auto p-4 shadow my-5 items-form'>
                <h2>Scentholics</h2>
                <p>Add new product to Scentholics..</p>
                <div className='mb-2 mt-2'>
                    <div>
                        <input className="form-control" type='text' name="name" placeholder='Product name :' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type="text" name="image" placeholder='Product image:' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type="text" name="quantity" placeholder='Quantity:' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type='text' name="price" placeholder='Price:' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type='text' name="supplier" placeholder='Supplier name:' required />
                    </div>
                </div>
                <button  type='submit' className='btn btn-dark text-white me-1  w-100'>Add Item
                    <i className="ps-2 fas fa-plus"></i><br />
                </button>
            </form>
        </div>
    );
};

export default Items;