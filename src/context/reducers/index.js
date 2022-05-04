import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { vocationalReducer } from './vocationalReducer';
import { solvingTestReducer } from './solvingTestReducer';
import { billingsReducer } from './billingsReducer';
import { universitiesReducer } from './universitiesReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  users: usersReducer,
  vocational: vocationalReducer,
  solvingTest: solvingTestReducer,
  billings: billingsReducer,
  universities: universitiesReducer,
});

export default rootReducer;
