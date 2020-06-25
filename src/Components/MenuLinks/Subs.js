import React, { Component } from 'react'

export class Sub extends Component {
    render() {
        const { title, price, url, category } = this.props.sub
        return (
            <ul className='category-navigation main two'>
                <div className="menu-sect">
                    <div> <img src={url} alt={category} className='icon-img' /></div>
                    <div className='menu-txt'>
                        <p className='menu-text-two'> {title}</p>
                    </div>
                    <p className='menu-txt two pizza'>{price}</p>

                </div>

            </ul>
        )
    }
}

export default Sub;