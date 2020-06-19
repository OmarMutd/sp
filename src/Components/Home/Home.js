import React from 'react';
import './Home.css';
import SopranosHours from '../../sopranos.jpeg'

function Home() {
    return (
        <div>
            <h1 className='Welcome-to-Sopranos'>Welcome to Sopranos!</h1>
            {/* <button className='menu-home'>View our Menu</button> */}
            <p align="center">
                <img src={SopranosHours} alt='store hours' className='store-hours' />
            </p>
            <p className='about-us'>
                We Offer more than just pizza. We have an extensive Italian menu offering Pizza, Subs, Calzone, Stromboli, and varied

                Pasta dishes at affordable prices that won't leave you with a bad taste. Our dough is made fresh daily. Our sauce is

                made with a blend of many fresh ingredients. We use only 100% mozzarella cheese. All items on our menu are

                available for delivery to your home or business!
            </p>
        </div>
    )
}

export default Home;
