import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import perfumesReducer from './reducers/perfumesReducer';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ));


ReactDOM.render(
  <Provider store={store} > 
    <App />
  </Provider>, 
  document.getElementById('root')
);




