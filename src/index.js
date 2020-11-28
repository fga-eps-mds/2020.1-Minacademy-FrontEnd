import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';
import Routes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import './assets/alert.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          closeButton={false}
          pauseOnFocusLoss
          pauseOnHover
          newestOnTop={false}
          autoClose={3500}
        />
        <Routes />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
