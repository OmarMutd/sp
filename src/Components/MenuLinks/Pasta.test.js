import React from 'react';
import ReactDOM from 'react-dom';
import Pasta from './Pasta';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Pasta pasta={{ title: 'Chicken Alfredo' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});