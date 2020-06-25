import React, { Component } from 'react'

export class Pasta extends Component {
    render() {
        const { title, price, ingredients, url } = this.props.pasta
        return (
            <ul className='category-navigation main two'>
                <div className="menu-sect pasta">
                    <div> <img src={url} alt='pasta' className='icon-img' /></div>
                    <div className='menu-txt'>
                        <p className='menu-text-two'> {title}</p>
                    </div>
                    <p className='menu-txt two pizza'>{price}</p>
                    <p className='menu-txt two pizza'>{ingredients}</p>

                </div>

            </ul>
        )
    }
}

export default Pasta;
