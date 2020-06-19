import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';


const SideDrawer = props => (
    <nav className='side-drawer'>
        <ul>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/coupons'>Coupons</Link></li>
            <li><Link to='/about'>About</Link></li>

        </ul>
    </nav>

);

export default SideDrawer;