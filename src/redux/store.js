import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import MainReducer from './reducer';

const middlewares = [thunk];
if (__DEV__) {
  middlewares.push(logger);
}

export const store = createStore(
  MainReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ),
);
