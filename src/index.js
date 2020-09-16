import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import Store from './store'
import App from './views/Home';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
);
