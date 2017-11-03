import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import perfumesReducer from './reducers/perfumesReducer';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store} > 
    <App store={store} />
  </Provider>, 
  document.getElementById('root')
);


