import React from 'react';
import ReactDOM from 'react-dom';
import KidsPage from './KidsPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <KidsPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});