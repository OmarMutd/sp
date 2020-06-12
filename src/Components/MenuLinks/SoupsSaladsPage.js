import React, { Component } from 'react';
import config from "../../config";
import SoupSalad from './SoupsSalads';



export class PastaPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/soupsalad`, {
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
                <h1 className='Category-title'>Soups and Salads</h1>
                <div>
                    {value.map((salads) => {
                        return (
                            <SoupSalad salads={salads} key={salads.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PastaPage;

