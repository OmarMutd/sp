import React, { Component } from 'react';
import config from "../../config";
import Desserts from './Desserts';



export class DessertPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/desserts`, {
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
                <h1 className='Category-title'>Desserts</h1>
                <div>
                    {value.map((dessert) => {
                        return (
                            <Desserts dessert={dessert} key={dessert.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default DessertPage;

