import React, { Component } from 'react'

export class Kids extends Component {
    render() {
        const { title, price, url } = this.props.kids
        return (
            <ul className='category-navigation two'>
                <div className="menu-sect">
                    <div> <img src={url} alt='kids' className='icon-img' /></div>
                    <div className='menu-txt'>
                        <p className='menu-text-two'> {title}</p>
                    </div>
                    <p className='menu-txt two pizza'>{price}</p>

                </div>

            </ul>
        )
    }
}

export default Kids;
