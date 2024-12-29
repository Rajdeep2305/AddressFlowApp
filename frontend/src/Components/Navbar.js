import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Address Flow App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/manage-addresses">Manage Addresses</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;