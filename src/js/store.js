import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import request from './middleware';
import stops from './reducers/stops';
import arrive from './reducers/arrivals';
import { ConfigReducer } from './reducers/config';

const store = createStore(combineReducers({
  config: ConfigReducer,
  stops,
  arrive,
}),
applyMiddleware(
  promise(),
  thunk,
  logger(),
  request,
));

export default store;
