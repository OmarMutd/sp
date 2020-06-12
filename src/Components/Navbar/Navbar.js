import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='main-nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/coupons'>Coupons</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
