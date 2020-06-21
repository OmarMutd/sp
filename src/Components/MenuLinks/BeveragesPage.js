import React, { Component } from 'react';
import config from "../../config";
import Beverage from './Beverages';
import { Link } from 'react-router-dom';



export class BeveragesPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/beverages`, {
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
                <Link to='/menu'><div className='menu-back'><p className='back-txt'>&#x2190; Menu</p> </div></Link>
                <h1 className='Category-title two'>Beverages</h1>
                <div>
                    {value.map((beverage) => {
                        return (
                            <Beverage beverage={beverage} key={beverage.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default BeveragesPage;

