import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

// const composeEnhancers =  typeof window === 'object' &&  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const composingMiddlewareAndDevTools = composeEnhancers(applyMiddleware(...middleware));

// const store = createStore(rootReducer, initialState, composingMiddlewareAndDevTools);

export default store;