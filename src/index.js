import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store';
import App from './views/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Provider store={store}><App hooks/></Provider>, document.getElementById('root'));
