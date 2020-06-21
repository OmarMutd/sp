import React from 'react';
import ReactDOM from 'react-dom';
import SoupsSaladsPage from './SoupsSaladsPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SoupsSaladsPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});