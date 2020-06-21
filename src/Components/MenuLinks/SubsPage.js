import React, { Component } from 'react';
import config from "../../config";
import Sub from './Subs';
import { Link } from 'react-router-dom';



export class PastaPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/sub`, {
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
                <h1 className='Category-title two'>Subs</h1>
                <div>
                    {value.map((sub) => {
                        return (
                            <Sub sub={sub} key={sub.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PastaPage;