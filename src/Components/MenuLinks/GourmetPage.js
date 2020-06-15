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
                <Link to='/menu'><div className='menu-back'>&#x2190; Menu </div></Link>
                <h1 className='Category-title'>Gourmet Pizzas</h1>
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