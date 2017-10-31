import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import perfumesReducer from './reducers/perfumesReducer';
import './index.css';
import App from './App';

const store = createStore(perfumesReducer);


ReactDOM.render(
  <App store={createStore} />, 
  document.getElementById('root')
);


