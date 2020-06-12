import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <ul className='category-navigation'>
                <Link to='/Pasta'><li>Pasta</li></Link>
                <Link to='/Subs'><li>Subs</li></Link>
                <Link to='/Gourmet'><li>Gourmet</li></Link>
                <Link to='/SoupsSalads'><li>Soups And Salads</li></Link>
                <Link to='/Wings'><li>Wings and Things</li></Link>
                <Link to='/Kids'><li>Kids</li></Link>
                <Link to='/Desserts'><li>Desserts</li></Link>
                <Link to='/Beverages'><li>Beverages</li></Link>


            </ul>


        </div>
    )
}

export default Menu;
