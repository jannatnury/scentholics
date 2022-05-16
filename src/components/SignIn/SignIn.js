import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/google.svg';

const SignIn = () => {
    return (
        <div className='container p-5 pt-0'>
        <div className='col-md-6 mx-auto p-5 shadow m-5 rounded-10 bg-light'>
            <h2 className="text-center">Sign In to Your Profile</h2>
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
                <div>
                    <p className="ps-0 text-primary btn">Forgot Password?</p>
                </div>
                <button type='submit' className='btn btn-dark d-block w-100'>
                    Sign In
                </button>
            </form>
            <p className='mt-2'>
                Don't have an account?
                <Link className="ps-3" to="/sign-up">Create New Account</Link>
            </p>
            <div className='row justify-content-between align-items-center px-3'>
                <hr className="col-5" />
                <p className="col-1">or</p>
                <hr className="col-5" />
            </div>
            <div className=''>
                <button className='px-5 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                >
                    <img className="d-block" src={logo} alt='' />
                    <p className="mt-3 fs-5 ms-3"> Google Sign In </p>
                </button>
            </div>
        </div>
    </div>
    );
};

export default SignIn;