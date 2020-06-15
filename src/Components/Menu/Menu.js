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
                <Link to='/Pasta'><li className='menu-txt'><img src={PastaLogo} alt='pasta' className='icon-img' /> Pasta</li></Link>
                <Link to='/Subs'><li className='menu-txt'><img src={SubLogo} alt='subs' className='icon-img' />Subs</li></Link>
                <Link to='/Gourmet'><li className='menu-txt'><img src={PizzaLogo} alt='pizza' className='icon-img' />Gourmet</li></Link>
                <Link to='/SoupsSalads'><li className='menu-txt'><img src={SaladLogo} alt='salad' className='icon-img' />Soups And Salads</li></Link>
                <Link to='/Wings'><li className='menu-txt'><img src={WingsLogo} alt='wings' className='icon-img' /> Wings and Things</li></Link>
                <Link to='/Kids'><li className='menu-txt'><img src={KidsLogo} alt='kids' className='icon-img' />Kids</li></Link>
                <Link to='/Desserts'><li className='menu-txt'><img src={DessertLogo} alt='Desserts' className='icon-img' />Desserts</li></Link>
                <Link to='/Beverages'><li className='menu-txt'><img src={SodaLogo} alt='soda/beverages' className='icon-img' />Beverages</li></Link>
            </ul>


        </div>
    )
}

export default Menu;
