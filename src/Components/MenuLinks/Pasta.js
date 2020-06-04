import React, { Component } from 'react';
import config from "../../config";
import OnePasta from './OnePasta';



export class Pasta extends Component {
    states = {
        pastas: [],
        data: [],
    };
    // componentDidMount() {
    //     fetch(`${config.API_ENDPOINT}/pasta`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({ data: data });
    //         });
    // }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data: data });
            });
    }

    render() {
        const value = this.state.data;
        return (
            <div>
                <h1>Pasta Page!</h1>
                <div>
                    {value.map((item) => {
                        return {
                            < OnePasta />

                        }

                    })}
                </div>
            </div>
        )
    }
}

export default Pasta

