import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import Routes from './routes/routes';
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './alert.scss'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
            <ToastContainer 
                hideProgressBar
                closeButton={false}
                newestOnTop
                autoClose={3500}
            />
                    <Routes />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);