import React, { Component } from 'react';
import config from "../../config";
import SoupSalad from './SoupsSalads';
import { Link } from 'react-router-dom';



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
                <Link style={{ textDecoration: 'none' }} to='/menu'><div className='menu-back'><p className='back-txt'>&#x2190; Menu</p> </div></Link>
                <h1 className='Category-title two'>Soups and Salads</h1>
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

