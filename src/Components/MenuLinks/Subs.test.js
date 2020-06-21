import React from 'react';
import ReactDOM from 'react-dom';
import Subs from './Subs';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Subs sub={{ title: 'Turkey Sub' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});