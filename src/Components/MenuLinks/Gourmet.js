import React, { Component } from 'react'

export class Gourmet extends Component {
    render() {
        const { title, ingredients, url } = this.props.gourmet
        return (
            <div className='card'>
                <div className="item_item-card">
                    <div className="item_item-image">
                        <div> <img src={url} alt='pizza' /></div>
                    </div>
                    <p> {title}</p>
                    <p>{ingredients}</p>
                </div>

            </div>
        )
    }
}

export default Gourmet;
