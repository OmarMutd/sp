import React from 'react';
import ReactDOM from 'react-dom';
import Kids from './Kids';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Kids kids={{ title: 'Spaghetti' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});