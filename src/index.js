import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import perfumesReducer from './reducers/perfumesReducer';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(perfumesReducer);


ReactDOM.render(
  <Provider store={store} > 
    <App store={store} />
  </Provider>, 
  document.getElementById('root')
);


