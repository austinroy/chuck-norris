import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const initialState = {}
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
          <Routes />
      </BrowserRouter>
    </Provider >
    , document.getElementById('root'));
registerServiceWorker();

