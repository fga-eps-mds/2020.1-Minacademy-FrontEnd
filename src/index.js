import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

=======
>>>>>>> Fazendo com que os formularios sejam editaveis
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
