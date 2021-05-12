import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
    rootElement
);







