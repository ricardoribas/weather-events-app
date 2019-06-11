import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import middleware from '../middleware';

const store = createStore(
  reducer,
  compose(applyMiddleware(middleware, thunk))
);

export default store;
