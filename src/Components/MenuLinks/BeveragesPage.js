import React, { Component } from 'react';
import config from "../../config";
import Beverage from './Beverages';



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
                <h1 className='Category-title'>Beverages</h1>
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

