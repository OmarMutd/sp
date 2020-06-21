import React from 'react';
import ReactDOM from 'react-dom';
import Gourmet from './Gourmet';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Gourmet gourmet={{ title: 'Supreme' }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});