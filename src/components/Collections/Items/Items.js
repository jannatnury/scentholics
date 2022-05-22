import React from 'react';
import './Items.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Items = () => {
    return (
        <div className='container my-3'>
            <PageTitle title='Items'></PageTitle>
            <form className='w-75 m-auto p-4 shadow my-5 items-form'>
                <h2>Scentholics</h2>
                <p>Add new product to Scentholics..</p>
                <div className='mb-2 mt-2'>
                    <div>
                        <input className="form-control" type='text' placeholder='Product name :' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type='text' placeholder='Product image:' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type='text' placeholder='Quantity:' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type='text' placeholder='Price:' required />
                    </div>
                </div>
                <div className='mb-2'>
                    <div>
                        <input className="form-control" type='text' placeholder='Supplier name:' required />
                    </div>
                </div>
                <button type='submit' className='btn btn-dark text-white me-1  w-100'>Add Item
                    <i className="ps-2 fas fa-plus"></i><br />
                </button>
            </form>
        </div>
    );
};

export default Items;