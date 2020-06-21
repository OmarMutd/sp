import React from 'react';
import ReactDOM from 'react-dom';
import BeveragesPage from './BeveragesPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <BeveragesPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});