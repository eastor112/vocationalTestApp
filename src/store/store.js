import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authreducer';
import { uiReducer } from '../reducers/uiReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

const composeEnhancers = (typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
