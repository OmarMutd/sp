import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import PizzaLogo from '../../PizzaLogo.jpg';


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <p onClick={props.click} className='x-button'> X</p>
            <h1 className='side-drawer-header'>Sopranos</h1>
            {/* <img src={PizzaLogo} alt='pizza-logo' className='pizza-logo-img' /> */}

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