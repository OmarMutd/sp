import React from 'react';
import ReactDOM from 'react-dom';
import SoupsSalads from './SoupsSalads';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SoupsSalads salads={{ title: 'Garden Salad' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});