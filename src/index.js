import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const store = createStore(
  reducer,
  applyMiddleware(reduxImmutableStateInvariant())
)
window.ReduxStore = store;

ReactDOM.render(
  (<Provider store={store}><App /></Provider>),
  document.getElementById('root')
);
