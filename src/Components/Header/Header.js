import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-sm navbar-light bg-info">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-white h5" to="/icon">JTourism
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item " >
                                <Link to="/home" className="nav-link text-white ">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/My Orders" className="nav-link text-white">My Orders</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Manage All Orders" className="nav-link text-white">Manage All Orders</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Add A New Service" className="nav-link text-white">Add A New Service</Link>
                            </li>


                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-white">Login</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;