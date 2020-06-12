import React, { Component } from 'react'

export class Pasta extends Component {
    render() {
        const { title, price, ingredients, url } = this.props.pasta
        return (
            <div className='card'>
                <div className="item_item-card">
                    <div className="item_item-image">
                        <div> <img src={url} alt='pasta' /></div>
                    </div>
                    <p> {title}</p>
                    <p>{ingredients}</p>
                    <p>{price}</p>
                </div>

            </div>
        )
    }
}

export default Pasta;
