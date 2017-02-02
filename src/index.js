import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import Routes from './config/Routes';

ReactDOM.render(
    <AppContainer>
        <Routes />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./config/Routes', () => {
        ReactDOM.render(
            <AppContainer>
                <Routes />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}