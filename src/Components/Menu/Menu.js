import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <ul className='category-navigation'>
                <Link to='/Pasta'><li>Pasta</li></Link>
                <li>Subs</li>
            </ul>


        </div>
    )
}

export default Menu;
