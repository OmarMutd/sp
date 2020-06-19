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
            <ul className='category-navigation'>
                <Link style={{ textDecoration: 'none' }} to='/Pasta'><img src={PastaLogo} alt='pasta' className='icon-img' /><li className='menu-txt'>Pasta</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/Subs'><img src={SubLogo} alt='subs' className='icon-img' /><li className='menu-txt'>Subs</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/Gourmet'><img src={PizzaLogo} alt='pizza' className='icon-img' /><li className='menu-txt'>Gourmet</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/SoupsSalads'><img src={SaladLogo} alt='salad' className='icon-img' /><li className='menu-txt'>Soups And Salads</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/Wings'><img src={WingsLogo} alt='wings' className='icon-img' /> <li className='menu-txt'>Wings and Things</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/Kids'><img src={KidsLogo} alt='kids' className='icon-img' /><li className='menu-txt'>Kids</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/Desserts'><img src={DessertLogo} alt='Desserts' className='icon-img' /><li className='menu-txt'>Desserts</li></Link>
                <Link style={{ textDecoration: 'none' }} to='/Beverages'><img src={SodaLogo} alt='soda/beverages' className='icon-img' /><li className='menu-txt'>Beverages</li></Link>
            </ul>



        </div>
    )
}

export default Menu;
