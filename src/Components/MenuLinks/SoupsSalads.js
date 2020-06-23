import React, { Component } from 'react'

export class SoupSalad extends Component {
    render() {
        const { title, price, url, category } = this.props.salads
        return (
            <ul className='category-navigation'>
                <div className="menu-sect">
                    <div> <img src={url} alt={category} className='icon-img' /></div>
                    <div className='menu-txt'>
                        <p> {title}</p>
                    </div>
                    <p className='menu-txt two'>{price}</p>

                </div>

            </ul>
        )
    }
}

export default SoupSalad;
