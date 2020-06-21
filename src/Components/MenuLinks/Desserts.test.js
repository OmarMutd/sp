import React from 'react';
import ReactDOM from 'react-dom';
import Desserts from './Desserts';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Desserts dessert={{ title: 'brownie' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});