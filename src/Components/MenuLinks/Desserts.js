import React, { Component } from 'react';
import './Menu.css';

export class Dessert extends Component {
    render() {
        const { title, price, url } = this.props.dessert
        return (
            <div className='card'>
                <div className="item_item-card">
                    <div className="item_item-image">
                        <div> <img src={url} alt='dessert' /></div>
                    </div>
                    <p> {title}</p>
                    <p>{price}</p>
                </div>

            </div>
        )
    }
}

export default Dessert;
