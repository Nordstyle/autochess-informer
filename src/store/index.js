import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { data } from './data';

const initialStateApp = data;

export const reducer = (state = initialStateApp, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function initializeStore (initialState = initialStateApp) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}