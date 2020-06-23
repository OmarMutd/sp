import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'



const Navbar = props => {


    return (
        //             <li><Link to='/about'>About</Link></li>

        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar-btn'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className='toolbar__logo'><Link to='/'>SOPRANOS</Link></div>
                <div className='spacer'></div>
                <div className='toolbar_navigation-items'>
                    <ul>
                        <li className='desktop-menu'><Link to='/menu'>Menu</Link></li>
                        <li className='desktop-menu'><Link to='/coupons'>Coupons</Link></li>
                        <li className='desktop-menu'><Link to='/about'>About</Link></li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Navbar;


