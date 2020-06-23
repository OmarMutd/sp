import React, { Component } from 'react'

export class Wing extends Component {
    render() {
        const { title, price, url, category } = this.props.wing
        return (
            <ul className='category-navigation'>
                <div className="menu-sect five">
                    <div> <img src={url} alt={category} className='icon-img' /></div>
                    <div className='menu-txt four' >
                        <p> {title}</p>
                    </div>
                    <p className='menu-txt two'>{price}</p>

                </div>

            </ul>
        )
    }
}

export default Wing;
