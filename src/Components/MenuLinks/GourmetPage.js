import React, { Component } from 'react';
import config from "../../config";
import Gourmet from './Gourmet';
import { Link } from 'react-router-dom';



export class GourmetPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/gourmet`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => { this.setState({ data: data }) });
    }

    render() {
        const value = this.state.data;
        return (
            <div>
                <Link style={{ textDecoration: 'none' }} to='/menu'><div className='menu-back'><p className='back-txt'>&#x2190; Menu</p> </div></Link>
                <h1 className='Category-title two'>Gourmet Pizzas</h1>
                <p className='sub-options pizza'>Small: $9.99 | Medium: $14.99 | Large $16.99 | Giant $18.99</p>
                <div>
                    {value.map((gourmet) => {
                        return (
                            <Gourmet gourmet={gourmet} key={gourmet.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GourmetPage;