import React, { Component } from 'react'

export class Wing extends Component {
    render() {
        const { title, price, url, category } = this.props.wing
        return (
            <div className='card'>
                <div className="item_item-card">
                    <div className="item_item-image">
                        <div> <img src={url} alt={category} /></div>
                    </div>
                    <p> {title}</p>
                    <p>{price}</p>
                </div>

            </div>
        )
    }
}

export default Wing;
