import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <h1 className='Category-title'>Menu</h1>
            <ul className='category-navigation'>
                <Link to='/Pasta'><li className='menu-txt'>Pasta</li></Link>
                <Link to='/Subs'><li className='menu-txt'>Subs</li></Link>
                <Link to='/Gourmet'><li className='menu-txt'>Gourmet</li></Link>
                <Link to='/SoupsSalads'><li className='menu-txt'>Soups And Salads</li></Link>
                <Link to='/Wings'><li className='menu-txt'> Wings and Things</li></Link>
                <Link to='/Kids'><li className='menu-txt'>Kids</li></Link>
                <Link to='/Desserts'><li className='menu-txt'>Desserts</li></Link>
                <Link to='/Beverages'><li className='menu-txt'>Beverages</li></Link>


            </ul>


        </div>
    )
}

export default Menu;
