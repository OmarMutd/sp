import React from 'react';
import ReactDOM from 'react-dom';
import Coupons from './Coupons';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Coupons />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});