import React, { Component } from 'react';
import './Menu.css';

export class Dessert extends Component {
    render() {
        const { title, price, url } = this.props.beverage
        return (
            <ul className='category-navigation'>
                <div className="menu-sect">
                    <div> <img src={url} alt='beverage' className='icon-img' /></div>
                    <div className='menu-txt'>
                        <p> {title}</p>
                    </div>
                    <p className='menu-txt two'>{price}</p>

                </div>

            </ul>
        )
    }
}

export default Dessert;
