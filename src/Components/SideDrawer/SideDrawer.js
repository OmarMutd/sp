import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li onClick={props.click}><Link to='/'>Home</Link></li>
                <li onClick={props.click}><Link to='/menu'>Menu</Link></li>
                <li onClick={props.click}><Link to='/coupons'>Coupons</Link></li>
                <li onClick={props.click}><Link to='/about'>About</Link></li>

            </ul>
        </nav>
    );

};

export default SideDrawer;