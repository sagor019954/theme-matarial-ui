import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to='/home' > <li>Home</li></Link>
            </ul>
        </div>
    );
};

export default Navbar;