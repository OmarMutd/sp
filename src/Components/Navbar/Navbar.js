import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='main-nav'>
                    <Link to='/'><li className='main-route'>Home</li></Link>
                    <Link to='/menu'><li>Menu</li></Link>
                    <Link to='/about'><li>About</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
