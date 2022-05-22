import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Header = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // console.log(user);
            }
            else {
                setUser({});
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm px-lg-3">
            <div className="container-fluid">
                {/* brand logo */}
                <Link className="navbar-brand" to="/home"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inventory">Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/items">Add Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>

                        {/* signIn/out on user login */}
                        {
                            user?.uid ? (
                                <li className="nav-item button">
                                    <Link onClick={handleSignOut} className="nav-link fw-bolder" to="/">Sign Out</Link>
                                </li>
                            ) : (
                                <li className="nav-item button">
                                    <Link className="nav-link fw-bolder" to="/sign-in">Sign In</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;