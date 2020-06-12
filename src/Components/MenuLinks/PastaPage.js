import React, { Component } from 'react';
import config from "../../config";
import Pasta from './Pasta';



export class PastaPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/pasta`, {
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
                <h1 className='Category-title'>Pasta</h1>
                <div>
                    {value.map((pasta) => {
                        return (
                            <Pasta pasta={pasta} key={pasta.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PastaPage;

