import React, { Component } from 'react';
import config from "../../config";
import Wing from './Wings';



export class PastaPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/wings`, {
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
                <h1 className='Category-title'>Wings</h1>
                <div>
                    {value.map((wing) => {
                        return (
                            <Wing wing={wing} key={wing.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PastaPage;

