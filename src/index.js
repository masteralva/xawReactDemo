import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
