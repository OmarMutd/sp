import React from 'react';
import ReactDOM from 'react-dom';
import GourmetPage from './GourmetPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <GourmetPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});