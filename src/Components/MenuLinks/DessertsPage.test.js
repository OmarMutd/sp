import React from 'react';
import ReactDOM from 'react-dom';
import DessertsPage from './DessertsPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <DessertsPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});