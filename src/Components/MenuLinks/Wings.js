import React, { Component } from 'react'

export class Wing extends Component {
    render() {
        const { title, price, url, category, multiprice } = this.props.wing
        return (
            <ul className='category-navigation main two'>
                <div className="menu-sect five">
                    <div> <img src={url} alt={category} className='icon-img' /></div>
                    <div className='menu-txt' >
                        <p className='wings-txt menu-text-two'> {title}</p>
                    </div>
                    <p className='menu-txt two pizza'>{price}</p>
                    <p className='menu-txt two pizza'>{multiprice}</p>

                </div>

            </ul>
        )
    }
}

export default Wing;
