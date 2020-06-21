import React from 'react';
import ReactDOM from 'react-dom';
import Beverages from './Beverages';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Beverages beverage={{ beverage: 'coke' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});
