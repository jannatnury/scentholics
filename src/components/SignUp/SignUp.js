import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const SignUp = () => {
    return (
        <div className='container p-5 pt-0'>
            <PageTitle title="Sign Up"></PageTitle>
            <div className='col-md-6 mx-auto p-5 shadow m-5 rounded-10 bg-light'>
                <h2 className="text-center">Sign Up to a New Account</h2>
                <form>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='email'>Email</label>
                        <div className=''>
                            <input className="form-control" type='text' name='email'
                                id='email' required />
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <div className=''>
                            <input className="form-control"
                                type='password'
                                name='password'
                                id='password' required
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                        Sign Up
                    </button>
                </form>
                <p className='mt-2'>
                    Already have an account?
                    <Link className="ps-3" to="/sign-in">Go to Your Account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;