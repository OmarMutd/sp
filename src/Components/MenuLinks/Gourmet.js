import React, { Component } from 'react'

export class Gourmet extends Component {
    render() {
        const { title, ingredients, url } = this.props.gourmet
        return (
            <ul className='category-navigation'>
                <div className="menu-sect">
                    <div> <img src={url} alt='pizza' className='icon-img pizza' /></div>
                    <div className='menu-txt'>
                        <p> {title}</p>
                    </div>
                    <p className='menu-txt two pizza'>{ingredients}</p>

                </div>

            </ul>
        )
    }
}

export default Gourmet;
