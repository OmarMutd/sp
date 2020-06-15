import React, { Component } from 'react';
import config from "../../config";
import Kids from './Kids';
import { Link } from 'react-router-dom';



export class KidsPage extends Component {
    state = {
        data: [],
    };


    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/kids`, {
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
                <h1 className='Category-title'>Kids Menu</h1>
                <div>
                    {value.map((kids) => {
                        return (
                            <Kids kids={kids} key={kids.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default KidsPage;

