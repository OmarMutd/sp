import React from 'react';
import ReactDOM from 'react-dom';
import SubsPage from './SubsPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SubsPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});