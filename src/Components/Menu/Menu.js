import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import SubLogo from '../../turkeysub.png';
import WingsLogo from '../../hotwings.jpg';
import DessertLogo from '../../NY-Cheesecake.jpg';
import SodaLogo from '../../coke.jpg';
import PastaLogo from '../../pasta.jpg';
import PizzaLogo from '../../supreme.jpg';
import SaladLogo from '../../gardensalad.jpg';
import KidsLogo from '../../Kids.jpg';




function Menu() {
    return (
        <div>
            <h1 className='Category-title'>Menu</h1>
            <ul className='category-navigation main'>
                <Link style={{ textDecoration: 'none' }} to='/Pasta'><div className='menu-sect'><img src={PastaLogo} alt='pasta' className='icon-img' /><li className='menu-txt main'>Pasta</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/Subs'><div className='menu-sect'><img src={SubLogo} alt='subs' className='icon-img' /><li className='menu-txt main'>Subs</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/Gourmet'><div className='menu-sect'><img src={PizzaLogo} alt='pizza' className='icon-img' /><li className='menu-txt main'>Gourmet Pizzas</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/SoupsSalads'><div className='menu-sect'><img src={SaladLogo} alt='salad' className='icon-img' /><li className='menu-txt main'>Soups And Salads</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/Wings'><div className='menu-sect'><img src={WingsLogo} alt='wings' className='icon-img' /> <li className='menu-txt main'>Wings and Things</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/Kids'><div className='menu-sect'><img src={KidsLogo} alt='kids' className='icon-img' /><li className='menu-txt main'>Kids</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/Desserts'><div className='menu-sect'><img src={DessertLogo} alt='Desserts' className='icon-img' /><li className='menu-txt main'>Desserts</li></div></Link>
                <Link style={{ textDecoration: 'none' }} to='/Beverages'><div className='menu-sect'><img src={SodaLogo} alt='soda/beverages' className='icon-img' /><li className='menu-txt main'>Beverages</li></div></Link>
            </ul>



        </div>
    )
}

export default Menu;
