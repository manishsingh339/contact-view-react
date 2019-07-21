import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Root from './Root';

const configureStore = (initialState) => {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk),
      ));
}

render(<Root store={configureStore({})} />, document.getElementById('root'));