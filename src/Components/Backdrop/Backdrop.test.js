import React from 'react';
import ReactDOM from 'react-dom';
import BackDrop from './BackDrop';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <BackDrop />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});