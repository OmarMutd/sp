import React from 'react';
import ReactDOM from 'react-dom';
import Wings from './Wings';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Wings wing={{ title: 'hot wings' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});