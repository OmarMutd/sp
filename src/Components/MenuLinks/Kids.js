import React, { Component } from 'react'

export class Kids extends Component {
    render() {
        const { title, price, url } = this.props.kids
        return (
            <div className='card'>
                <div className="item_item-card">
                    <div className="item_item-image">
                        <div> <img src={url} alt='kids-item' /></div>
                    </div>
                    <p> {title}</p>
                    <p>{price}</p>
                </div>

            </div>
        )
    }
}

export default Kids;
