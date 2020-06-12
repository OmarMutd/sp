import React from 'react';
import Garland from '../../garland.jpeg'

function About() {
    return (
        <div>
            <p align="center">
                < a href=
                    "https://www.google.com/maps/dir//Soprano's+Cafe+%26+Pizza+Subs,+North+Jupiter+Road,+Garland,+TX/@32.9627729,-96.7172416,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864c1e947d7f914f:0x2d7d9cc0009dc0bb!2m2!1d-96.6822222!2d32.9627778"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Garland} alt='store hours' />
                </a>
            </p>
        </div>
    )
}

export default About
