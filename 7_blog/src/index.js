import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import logger from './middleware/logger';

const store = createStore (reducers, applyMiddleware (thunk, logger));
ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector ('#root')
);
